const { Sequelize } = require("sequelize");

const DATABASE = process.env.DATABASE;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const PORT = process.env.PORT;

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  port: PORT,
});

// sequelize connection to database
module.exports = sequelize;
