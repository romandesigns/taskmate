import { Router, Request, Response } from "express";

export const createTask = async (req: Request, res: Response) => {
  const payload = req.body;
  return res.json(payload);
};

// You can export other controllers similarly
export const getTasks = (req: Request, res: Response) => {
  res.send("List of tasks");
};
