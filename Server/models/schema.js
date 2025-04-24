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
const tournamentSchema = new mongoose.Schema({
  playerName: { type: String, required: true },
  discordID: { type: String, required: true },
  teamName:{ type: String, required: true },
  gameCategory: String
},{ timestamps: true });

// Check if the model is already defined to prevent overwriting
export const ValorantVideo = mongoose.models.ValorantVideo || mongoose.model("ValorantVideo", videoSchema, "VALORANT");
export const COCVideo = mongoose.models.COCVideo || mongoose.model("COCVideo", videoSchema, "COC");
export const CSGOVideo = mongoose.models.CSGOVideo || mongoose.model("CSGOVideo", videoSchema, "CSGO");
export const PUBGVideo = mongoose.models.PUBGVideo || mongoose.model("PUBGVideo", videoSchema, "PUBG");
export const BrawlstartVideo = mongoose.models.BrawlstartVideo || mongoose.model("BrawlstartVideo", videoSchema, "BRAWLSTART");
export const Tournament = mongoose.models.Tournament || mongoose.model("Tournament", tournamentSchema, "TOURNAMENTS");