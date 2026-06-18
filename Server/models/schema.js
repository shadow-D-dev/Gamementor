import mongoose from "mongoose";
// HACK:Let admin choose the schema for different games
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
    default: "admin",
  },
});
// NOTE:Here's how tournaments will work so admins can create a tournament but the schema will change to gameCategory,allowed team numbers,rounds,points table,etc
const tournamentSchema = new mongoose.Schema(
  {
    playerName: { type: String, required: true },
    discordID: { type: String, required: true },
    teamName: { type: String, required: true },
    gameCategory: String,
  },
  { timestamps: true },
);
//PERF:optimize checking if model exists or find good alternative to it.

// Check if the model is already defined to prevent overwriting
export const ValorantVideo =
  mongoose.models.ValorantVideo ||
  mongoose.model("ValorantVideo", videoSchema, "VALORANT");
export const COCVideo =
  mongoose.models.COCVideo || mongoose.model("COCVideo", videoSchema, "COC");
export const CSGOVideo =
  mongoose.models.CSGOVideo || mongoose.model("CSGOVideo", videoSchema, "CSGO");
export const PUBGVideo =
  mongoose.models.PUBGVideo || mongoose.model("PUBGVideo", videoSchema, "PUBG");
export const BrawlstartVideo =
  mongoose.models.BrawlstartVideo ||
  mongoose.model("BrawlstartVideo", videoSchema, "BRAWLSTART");
export const Tournament =
  mongoose.models.Tournament ||
  mongoose.model("Tournament", tournamentSchema, "TOURNAMENTS");
