import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.post("/addVideo", async (req, res) => {
  const { title, link, category, customCategory } = req.body;

  if (!title || !link || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const finalCategory = category === "other" ? customCategory.toUpperCase() : category.toUpperCase();

    // Dynamically create a model for the category, either predefined or custom
    const DynamicModel = mongoose.models[finalCategory] || mongoose.model(finalCategory, new mongoose.Schema({ title: String, link: String }, { strict: false, collection: finalCategory }));

    const newEntry = new DynamicModel({ title, link });
    await newEntry.save();

    res.status(201).json({ success: true, message: "Video added successfully", category: finalCategory });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
