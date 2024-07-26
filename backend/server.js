const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Create express app
const app = express();

// App port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

// Routes
const taskRoutes = require("./routes/tasks.ts");

// API endpoint
app.use("/api", taskRoutes);

// Running express app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
