import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import TaskForm from "../components/TaskForm";
import "./../styles/App.css";

const CreateTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "Pending",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/tasks", task);
      navigate("/tasks");
    } catch (err) {
      console.error("Failed to create task:", err);
    }
  };

  return (
    <div className="create-task">
      <h2 className="create-task-heading">Create a New Task</h2>
      <div className="form-container">
        <TaskForm
          task={task}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonLabel="Create Task"
        />
      </div>
    </div>
  );
};

export default CreateTask;
