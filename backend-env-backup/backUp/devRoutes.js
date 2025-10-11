import express from "express";
import User from "../src/models/User.js";

const router = express.Router();

// ----------------------------
// DEV ONLY: Reset Users Database
// ----------------------------
router.delete("/reset-users", async (req, res) => {
  try {
    if (process.env.NODE_ENV !== "development") {
      return res.status(403).json({ message: "Forbidden in production" });
    }

    // Delete all users and their refresh tokens
    const result = await User.deleteMany({});
    
    return res.json({
      message: `Database reset successful. Deleted ${result.deletedCount} users.`,
    });
  } catch (err) {
    console.error("Reset users error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
