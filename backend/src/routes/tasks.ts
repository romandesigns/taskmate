import { Router, Request, Response } from "express";
import * as taskControllers from "../controllers/tasksControllers";
import * as TaskSchema from "../lib/schemaValidation";

const router = Router();

router.get("/tasks", taskControllers.getTasks);
router.post(
  "/task/new",
  TaskSchema.validateNewTask,
  taskControllers.createTask
);

export default router;
