import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import allGameRoutes from "./routes/allRoutes.js"; // ✅ apne route file ka naam yeh hai

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use all game routes
app.use("/api", allGameRoutes); // saare route `/api/valorant`, `/api/pubg` etc. yahan se handle honge

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
