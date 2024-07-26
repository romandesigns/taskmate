import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const tasks = [
    { id: 1, title: "Task 1", description: "Description 1" },
    { id: 2, title: "Task 2", description: "Description 2" },
  ];
  res.json(tasks);
});

router.post("/", (req: Request, res: Response) => {
  const task = req.body;
  task.id = new Date().getTime(); // simple unique id based on current time
  res.json(task);
});

export default router;
