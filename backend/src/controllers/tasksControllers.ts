import { Router, Request, Response } from "express";
import pool from "../lib/dbConnection";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, priority, description, due_date } = req.body;
    const response = await pool.query(
      "insert into tasks (title, priority, description, due_date) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, priority, description, due_date]
    );
    return res.json(response.rows[0]);
  } catch (error) {
    console.error(error);
  }
};

// You can export other controllers similarly
export const getTasks = async (req: Request, res: Response) => {
  try {
    const response = await pool.query(
      "select * from tasks order by due_date desc"
    );
    return res.json(response.rows);
  } catch (error) {
    console.error(error);
  }
};
