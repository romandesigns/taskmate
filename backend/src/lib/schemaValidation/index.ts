const Joi = require("joi");
import { Request, Response } from "express";

// Define the validation schema with custom error messages
const newTaskSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Title should be a type of text",
    "string.empty": "Title cannot be empty",
    "any.required": "Title is a required field",
  }),
  priority: Joi.string().required().messages({
    "string.base": "Priority should be a type of text",
    "string.empty": "Priority cannot be empty",
    "any.required": "Priority is a required field",
  }),
  description: Joi.string().required().messages({
    "string.base": "Description should be a type of text",
    "string.empty": "Description cannot be empty",
    "any.required": "Description is a required field",
  }),
  due_date: Joi.date().required().messages({
    "date.base": "Date should be a valid date",
    "any.required": "Date is a required field",
  }),
});

// Middleware to validate the request body
export const validateNewTask = (
  req: Request,
  res: Response,
  next: () => void
) => {
  const { error } = newTaskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
