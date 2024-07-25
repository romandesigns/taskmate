const express = require("express");
const router = express.Router();

// Controllers
const taskController = require("../controllers/tasksControllers.ts");

// Routes
router.get('/tasks',taskController.getTasks);
router.get('/task/:id',taskController.getTask);
router.get('/task/:id/delete',taskController.deleteTask);

module.exports = router;