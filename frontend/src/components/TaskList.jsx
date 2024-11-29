import React from "react";
import Task from "./Task";
import "./../styles/TaskList.css";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;
