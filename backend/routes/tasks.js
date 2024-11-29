const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../models/taskModel");

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new task
router.post("/", async (req, res) => {
  const { title, description, due_date, status } = req.body;
  try {
    const task = await createTask(title, description, due_date, status);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing task
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, status } = req.body;
  try {
    const updatedTask = await updateTask(
      id,
      title,
      description,
      due_date,
      status
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteTask(id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
