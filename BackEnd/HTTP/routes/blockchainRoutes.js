const express = require("express");
const router = express.Router();
const blockchainService = require("../services/blockchainService.js");

// Read greeting without Metamask
router.get("/greet", async (req, res) => {
  try {
    const greeting = await blockchainService.readGreeting();
    res.json({ greeting });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Set greeting directly from backend without Metamask
router.post("/setGreeting", async (req, res) => {
  try {
    const { newGreeting } = req.body;
    const txHash = await blockchainService.setGreeting(newGreeting);
    res.json({ message: "Greeting updated!", txHash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
