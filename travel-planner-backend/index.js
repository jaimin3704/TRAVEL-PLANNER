require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const destinationRoutes = require("./routes/destinationRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB().catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit the process if DB connection fails
});

// Routes
app.use("/api/destinations", destinationRoutes);

app.get("/", (req, res) => {
    res.send("✅ Travel Planner Backend is running!");
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
