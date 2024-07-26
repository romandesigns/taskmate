import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
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

// Routes
app.use("/api/tasks", taskRoutes);

// API endpoint
app.post("/api", (req: Request, res: Response) => {
  const tasks = [
    { id: 1, title: "Task 1", description: "Description 1" },
    { id: 2, title: "Task 2", description: "Description 2" },
  ];
  res.json(tasks);
});

// Running express app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
