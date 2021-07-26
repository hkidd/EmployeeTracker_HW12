// Import and require express, mysql2, and inquirer (maybe for a different file?)
const express = require("express");
const mysql = require("mysql2");
const index = require("./index");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "employees_db",
  },
  console.log(`Connected to the employees database.`)
);

// Query database
db.query("SELECT * FROM employees", function (err, results) {
  console.log(results);
});

db.query("SELECT * FROM departments", function (err, results) {
  console.log(results);
});

db.query("SELECT * FROM roles", function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Logs the port the server is currently listening on
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = db;