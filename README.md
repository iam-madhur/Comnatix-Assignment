# Task Management System


## Project Overview
The Task Management System is a full-stack application that allows users to manage their tasks efficiently. Users can create, view, update, and delete tasks while also toggling their status between "Pending" and "Completed." The project is designed with a clean and responsive UI and implements a modular backend.


## Installation and Running the Project

### Prerequisites:
    • Node.js (v16 or higher)
    • npm (Node Package Manager)
    • Any modern web browser

### Steps:
    1. Clone the Repository

    2. Backend Setup:
        • Navigate to the backend directory: cd backend
        • Install dependencies: npm install
        • Start the backend server: node server.js
    
    3. Frontend Setup:
        • Navigate to the frontend directory: cd frontend
        • Install dependencies: npm install
        • Start the development server: npm run dev

    4. Access the Application:
        • Open your browser and navigate to http://localhost:5173/


## Technology Stack

### Backend:
    • Node.js: Server-side runtime.
    • Express: Framework for building RESTful APIs.
    • SQLite: Lightweight database for task storage.

### Frontend:
    • React: Component-based user interface.
    • Vite: Development environment for fast builds.
    • Vanilla CSS: Custom styling.


## Features

### Core Functionality:
    • Create Tasks: Add tasks with a title, description, due date, and initial status.
    • View Tasks: Display tasks in a list with filtering by status.
    • Update Tasks: Modify task details and update their status.
    • Delete Tasks: Remove tasks with a confirmation prompt.

### Enhancements:
    • Real-time form validation.
    • Confirmation prompts for deletions.
    • Responsive design for seamless mobile experience.
    • Sorting and filtering options for improved task management.
    • Subtle animations for a visually appealing interface.


## API Endpoints

### Base URL: `http://localhost:5000/api/tasks`

| Method | Endpoint  | Description                |
| ------ | --------- | -------------------------- |
| GET    | `/`       | Fetch all tasks            |
| POST   | `/`       | Create a new task          |
| PUT    | `/:id`    | Update an existing task    |
| DELETE | `/:id`    | Delete a task by ID        |


## Database Schema

### `tasks` Table:

| Field       | Type      | Description                     |
| ----------- | --------- | ------------------------------- |
| id          | INTEGER   | Primary key (Auto-Increment)    |
| title       | TEXT      | Task title                      |
| description | TEXT      | Task description                |
| due_date    | TEXT      | Task due date (YYYY-MM-DD)      |
| status      | TEXT      | Task status ("Pending"/"Completed") |
| created_at  | TIMESTAMP | Task creation timestamp         |
| updated_at  | TIMESTAMP | Task update timestamp           |
