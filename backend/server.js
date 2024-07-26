const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();
// Create express app
const app = express();
// App port
const PORT = process.env.PORT || 5000;

// Routes
const taskRoutes = require("./routes/tasks.ts");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API endpoint
app.use("/api", taskRoutes);

// Running express app
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
