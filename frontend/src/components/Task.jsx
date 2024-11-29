import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import "./../styles/Task.css";

const Task = ({ task, setTasks }) => {
  const navigate = useNavigate();

  const toggleStatus = async () => {
    const newStatus = task.status === "Pending" ? "Completed" : "Pending";
    try {
      await api.put(`/tasks/${task.id}`, { ...task, status: newStatus });
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, status: newStatus } : t))
      );
    } catch (err) {
      console.error("Failed to toggle status:", err);
    }
  };

  const deleteTask = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      try {
        await api.delete(`/tasks/${task.id}`);
        setTasks((prev) => prev.filter((t) => t.id !== task.id));
      } catch (err) {
        console.error("Failed to delete task:", err);
      }
    }
  };

  const editTask = () => {
    navigate(`/edit/${task.id}`);
  };

  return (
    <div className={`task ${task.status.toLowerCase()}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.due_date}</p>
      <div className="task-status">
        <span className="label pending-label">Pending</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={task.status === "Completed"}
            onChange={toggleStatus}
          />
          <span className="slider"></span>
        </label>
        <span className="label completed-label">Completed</span>
      </div>
      <div className="task-buttons">
        <button onClick={editTask} className="button edit">
          Edit
        </button>
        <button onClick={deleteTask} className="button delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
