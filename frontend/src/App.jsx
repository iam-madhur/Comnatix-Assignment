import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import ViewTasks from "./pages/ViewTasks";
import EditTask from "./pages/EditTask";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/tasks" element={<ViewTasks />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </div>
  );
};

export default App;
