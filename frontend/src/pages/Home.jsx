import React from "react";
import { Link } from "react-router-dom";
import "./../styles/App.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-heading">Welcome to Your Task Manager</h1>
      <div className="home-buttons">
        <Link to="/create">
          <button className="button-home">Create Task</button>
        </Link>
        <Link to="/tasks">
          <button className="button-home">View Your Tasks</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
