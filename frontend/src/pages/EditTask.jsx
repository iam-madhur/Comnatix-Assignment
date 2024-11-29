import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";
import TaskForm from "../components/TaskForm";
import "./../styles/EditTask.css";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "Pending",
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await api.get(`/tasks`);
        const taskToEdit = response.data.find((t) => t.id === parseInt(id));
        if (taskToEdit) setTask(taskToEdit);
      } catch (err) {
        console.error("Failed to fetch task:", err);
      }
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/tasks/${id}`, task);
      navigate("/tasks");
    } catch (err) {
      console.error("Failed to update task:", err);
    }
  };

  return (
    <>
      <h2 className="form-heading">Edit Task</h2>
      <div className="edit-task form-container">
        <TaskForm
          task={task}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonLabel="Update Task"
        />
      </div>
    </>
  );
};

export default EditTask;
