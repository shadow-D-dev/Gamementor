import express from "express";
import { Tournament } from "../models/schema.js";
import { clerkClient } from "@clerk/clerk-sdk-node";

const router = express.Router();

const allowedCategories = ["VALORANT", "PUBG", "CSGO", "COC", "BRAWLSTART"];

router.post("/register", async (req, res) => {
  const { playerName, discordID, teamName, gameCategory } = req.body;

  if (!playerName || !discordID || !teamName || !gameCategory) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const finalCategory = gameCategory.toUpperCase();

  if (!allowedCategories.includes(finalCategory)) {
    return res.status(400).json({ error: "Invalid category" });
  }

  try {
    const newTournament = new Tournament({
      playerName,
      discordID,
      teamName,
      gameCategory: finalCategory,
    });

    await newTournament.save();

    res.status(201).json({
      success: true,
      message: "Tournament registration successful",
      category: finalCategory,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Authorization token required" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = await clerkClient.verifyToken(token);

    const user = await clerkClient.users.getUser(decoded.sub);

    if (!user.publicMetadata?.isAdmin) {
      return res.status(403).json({ error: "Admin access required" });
    }

    const registrations = await Tournament.find().sort({ createdAt: -1 });
    res.status(200).json(registrations);
  } catch (error) {
    console.error("Error in /all endpoint:", error);
    res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
});

export default router;
