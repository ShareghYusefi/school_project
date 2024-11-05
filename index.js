// sequelize connection to database
const sequelize = require("./config");
const express = require("express");
// import mysql
const mysql = require("mysql2");
const app = express();

// import the Department model
const Department = require("./models/department");

// get all departments
app.get("/departments", (req, res) => {
  // find all departments using the Department model
  Department.findAll()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
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
