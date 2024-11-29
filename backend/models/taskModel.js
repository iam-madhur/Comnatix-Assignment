const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Set up SQLite DB
const db = new sqlite3.Database(path.join(__dirname, "../db/database.sqlite"));

// Create table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      due_date TEXT,
      status TEXT DEFAULT 'Pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// Get all tasks
const getAllTasks = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM tasks", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

// Create a new task
const createTask = (title, description, due_date, status) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare(
      "INSERT INTO tasks (title, description, due_date, status) VALUES (?, ?, ?, ?)"
    );
    stmt.run(title, description, due_date, status, function (err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, title, description, due_date, status });
    });
    stmt.finalize();
  });
};

// Update an existing task
const updateTask = (id, title, description, due_date, status) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare(`
      UPDATE tasks SET title = ?, description = ?, due_date = ?, status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);
    stmt.run(title, description, due_date, status, id, function (err) {
      if (err) reject(err);
      else resolve({ id, title, description, due_date, status });
    });
    stmt.finalize();
  });
};

// Delete a task
const deleteTask = (id) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare("DELETE FROM tasks WHERE id = ?");
    stmt.run(id, function (err) {
      if (err) reject(err);
      else resolve();
    });
    stmt.finalize();
  });
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
