const express = require("express");
const router = express.Router();

// Usa el controlador en la ruta
router.get("/tasks", (req, res) => {
  const tasks = [{ name: "task1" }, { name: "task2" }];
  return res.status(200).json(tasks);
});

module.exports = router;
