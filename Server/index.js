import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import allGameRoutes from "./routes/allRoutes.js";
import addVideo from "./routes/addVideo.js";
import tournament from "./routes/tournament.js";
import { assignOrgAdminRole } from "./clerk/clerkService.js";
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// app.use(ClerkExpressWithAuth());

app.use("/api/videos/fetch", allGameRoutes);
app.use("/api", addVideo);
app.use("/api/tournaments", tournament);
// TODO:Before this you should first check if the user was logged in from local
// storage also check whether he was a admin or not
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`),
    );
    // assignOrgAdminRole(process.env.ADMIN_EMAIL);
  })
  .catch((err) => console.error("MongoDB connection error:", err));
// WARN:do a secure backend start with all the security checks such as health route and all
