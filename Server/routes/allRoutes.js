import express from "express";
import {
  ValorantVideo,
  COCVideo,
  CSGOVideo,
  PUBGVideo,
  BrawlstartVideo
} from "../models/schema.js";

const router = express.Router();

router.get("/valorant", async (req, res) => {
  try {
    const data = await ValorantVideo.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Valorant data fetch failed" });
  }
});

router.get("/coc", async (req, res) => {
  try {
    const data = await COCVideo.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "COC data fetch failed" });
  }
});

router.get("/csgo", async (req, res) => {
  try {
    const data = await CSGOVideo.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "CSGO data fetch failed" });
  }
});

router.get("/pubg", async (req, res) => {
  try {
    const data = await PUBGVideo.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "PUBG data fetch failed" });
  }
});

router.get("/brawlstart", async (req, res) => {
  try {
    const data = await BrawlstartVideo.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Brawlstart data fetch failed" });
  }
});



export default router;
