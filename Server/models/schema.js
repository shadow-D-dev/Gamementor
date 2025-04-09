import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
});

export const ValorantVideo = mongoose.model("ValorantVideo", videoSchema, "valorant");
export const COCVideo = mongoose.model("COCVideo", videoSchema, "COC");
export const CSGOVideo = mongoose.model("CSGOVideo", videoSchema, "CSGO");
export const PUBGVideo = mongoose.model("PUBGVideo", videoSchema, "PUBG");
export const BrawlstartVideo = mongoose.model("BrawlstartVideo", videoSchema, "brawlstart");
