import { Router, Request, Response } from "express";
import * as taskControllers from "../controllers/tasksControllers";

const router = Router();

router.post("/task/new", taskControllers.createTask);

export default router;
