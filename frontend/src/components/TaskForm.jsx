import React from "react";
import "./../styles/App.css";

const TaskForm = ({ task, handleChange, handleSubmit, buttonLabel }) => {
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label htmlFor="title">Enter Task Name</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="description">Enter Task Description</label>
      <textarea
        id="description"
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        required
      ></textarea>

      <label htmlFor="due_date">Enter Due Date</label>
      <input
        type="date"
        id="due_date"
        name="due_date"
        value={task.due_date}
        onChange={handleChange}
        required
      />

      <button type="submit" className="button">
        {buttonLabel}
      </button>
    </form>
  );
};

export default TaskForm;
