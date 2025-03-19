const express = require("express");
const router = express.Router();
const esp32Service = require("../services/esp32Service");

// Open Door Route
router.get("/open", async (req, res) => {
  try {
    const result = await esp32Service.openDoor();
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Close Door Route
router.get("/close", async (req, res) => {
  try {
    const result = await esp32Service.closeDoor();
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Door Status Route
router.get("/status", async (req, res) => {
  try {
    const result = await esp32Service.getDoorStatus();
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
