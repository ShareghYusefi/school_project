// sequelize connection to database
const sequelize = require("./config");
const express = require("express");
const app = express();

// import the Department model
const Department = require("./models/department");

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
