import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  postby: {
    type: String,
    default: "admin",  // default value
  },
});

// Check if the model is already defined to prevent overwriting
export const ValorantVideo = mongoose.models.ValorantVideo || mongoose.model("ValorantVideo", videoSchema, "VALORANT");
export const COCVideo = mongoose.models.COCVideo || mongoose.model("COCVideo", videoSchema, "COC");
export const CSGOVideo = mongoose.models.CSGOVideo || mongoose.model("CSGOVideo", videoSchema, "CSGO");
export const PUBGVideo = mongoose.models.PUBGVideo || mongoose.model("PUBGVideo", videoSchema, "PUBG");
export const BrawlstartVideo = mongoose.models.BrawlstartVideo || mongoose.model("BrawlstartVideo", videoSchema, "BRAWLSTART");
