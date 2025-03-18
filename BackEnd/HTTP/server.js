const express = require("express");

const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
    res.send("🚀 Node.js Server is Running!");
});

app.post("/", (req, res) => {
    res.send("🚀 Node.js Server is Running!");
});

// API Route Example
app.post("/api/data", (req, res) => {
    const { name, message } = req.body;
    res.json({ success: true, response: `Hello ${name}, you said: ${message}` });
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
