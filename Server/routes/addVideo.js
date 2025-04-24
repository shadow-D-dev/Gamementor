import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Predefined allowed categories (same as frontend cards)
const allowedCategories = ["VALORANT", "PUBG", "CSGO", "COC", "BRAWLSTART"];

router.post("/addVideo", async (req, res) => {
  const { title, link, category } = req.body;

  if (!title || !link || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const finalCategory = category.toUpperCase();

  // Check if the category is in the allowed list
  if (!allowedCategories.includes(finalCategory)) {
    return res.status(400).json({ error: "Invalid category" });
  }

  try {
    // Use dynamic model creation for allowed categories only
    const DynamicModel = mongoose.models[finalCategory] || mongoose.model(
      finalCategory,
      new mongoose.Schema({ title: String, link: String }, { strict: false, collection: finalCategory })
    );

    const newEntry = new DynamicModel({ title, link });
    await newEntry.save();

    res.status(201).json({ success: true, message: "Video added successfully", category: finalCategory });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
