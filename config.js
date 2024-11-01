const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sequelize_db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
});

// sequelize connection to database
module.exports = sequelize;
