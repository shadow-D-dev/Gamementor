  import express from "express";
  import { Tournament } from "../models/schema.js";  // Tournament schema ko import karein
  import { clerkClient } from "@clerk/clerk-sdk-node";

  const router = express.Router();

  // Predefined allowed categories for Tournament
  const allowedCategories = ["VALORANT", "PUBG", "CSGO", "COC", "BRAWLSTART"];

  router.post("/register", async (req, res) => {
    const { playerName, discordID, teamName, gameCategory } = req.body;
    console.log("Incoming registration:", { playerName, discordID, teamName, gameCategory });


    if (!playerName || !discordID || !teamName || !gameCategory) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const finalCategory = gameCategory.toUpperCase();

    // Check if the category is in the allowed list
    if (!allowedCategories.includes(finalCategory)) {
      return res.status(400).json({ error: "Invalid category" });
    }

    try {
      // Saving tournament registration to the database
      const newTournament = new Tournament({
        playerName,
        discordID,
        teamName,
        gameCategory: finalCategory
      });
      console.log("Incoming registration:", { playerName, discordID, teamName, gameCategory });

      await newTournament.save();

      res.status(201).json({ success: true, message: "Tournament registration successful", category: finalCategory });
    } catch (error) {
      console.error("Error saving tournament data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  router.get("/all", async (req, res) => {
    try {
      // 1. Get authorization header
      const authHeader = req.headers.authorization;
      if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Authorization token required" });
      }
  
      // 2. Extract and verify token
      const token = authHeader.split(' ')[1];
      const decoded = await clerkClient.verifyToken(token);
      
      // 3. Get user data
      const user = await clerkClient.users.getUser(decoded.sub);
  
      // 4. Check admin status
      if (!user.publicMetadata?.isAdmin) {
        return res.status(403).json({ error: "Admin access required" });
      }
  
      // 5. Fetch data if admin
      const registrations = await Tournament.find().sort({ createdAt: -1 });
      res.status(200).json(registrations);
  
    } catch (error) {
      console.error("Error in /all endpoint:", error);
      res.status(500).json({ 
        error: "Internal server error",
        details: error.message 
      });
    }
  });

  export default router;
