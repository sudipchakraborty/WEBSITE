const axios = require("axios");

// Set the ESP32 IP Address
const ESP32_BASE_URL = "http://115.187.37.99:8080";  // Your static IP

// Function to open the door
const openDoor = async () => {
  try {
    const response = await axios.get(`${ESP32_BASE_URL}/open`);
    return response.data;
  } catch (error) {
    console.error("Error opening the door:", error);
    return { success: false, message: "Failed to open door" };
  }
};

// Function to close the door
const closeDoor = async () => {
  try {
    const response = await axios.get(`${ESP32_BASE_URL}/close`);
    return response.data;
  } catch (error) {
    console.error("Error closing the door:", error);
    return { success: false, message: "Failed to close door" };
  }
};

// Function to fetch door status
const getDoorStatus = async () => {
  try {
    const response = await axios.get(`${ESP32_BASE_URL}/status`);
    return response.data;
  } catch (error) {
    console.error("Error fetching door status:", error);
    return { success: false, status: "Unknown", message: "Failed to fetch status" };
  }
};

module.exports = { openDoor, closeDoor, getDoorStatus };
