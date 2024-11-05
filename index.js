// sequelize connection to database
const sequelize = require("./config");
const express = require("express");
// import mysql
const mysql = require("mysql2");
const app = express();

// connect to database using mysql2
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sequelize_db",
  port: 3307,
});

// test mysql connection
mysqlConnection.connect((err) => {
  if (err) {
    console.log("Error connecting to the database");
    return;
  }

  console.log("Connected to the database using mysql2");
});

// import the Department model
const Department = require("./models/department");

// get all departments
app.get("/departments", (req, res) => {
  // find all departments using mysql2
  mysqlConnection.query("SELECT * FROM departments", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      res.send(err.message);
    }
  });
});

// test sequelize connection
sequelize
  .sync()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
