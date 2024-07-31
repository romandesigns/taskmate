import cors from "cors";
import dotenv from "dotenv";
import express from "express";
// Routes
import taskRoutes from "./routes/tasks";

// Load environment variables
dotenv.config();

// Create express app
const app = express();

// App port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", taskRoutes);

// Running express app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
