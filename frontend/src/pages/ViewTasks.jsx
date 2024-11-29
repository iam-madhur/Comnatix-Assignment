import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import api from "../utils/api";
import "./../styles/App.css";

const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        setTasks(response.data);
      } catch (err) {
        console.error("Failed to fetch tasks:", err);
      }
    };
    fetchTasks();
  }, []);

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="view-tasks">
      <h2>Your Tasks</h2>
      <div className="filter-buttons">
        {["All", "Pending", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={filter === status ? "active" : ""}
          >
            {status}
          </button>
        ))}
      </div>
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
};

export default ViewTasks;
