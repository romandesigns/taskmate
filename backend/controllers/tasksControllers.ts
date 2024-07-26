const { Request, Response } = require("express");

exports.getTasks = (req, res) => {
  try {
    return res.send("Hello from the controller").status(200);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.json({ error: "Internal Server Error" });
  }
};
