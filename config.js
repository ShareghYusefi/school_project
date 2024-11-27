const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("school_db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
  logging: console.log,
});

// sequelize connection to database
module.exports = sequelize;
