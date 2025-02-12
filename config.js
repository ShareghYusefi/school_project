const { Sequelize } = require("sequelize");

const HOST = process.env.HOST;
const DATABASE = process.env.DATABASE;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const PORT = 5432;

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: "postgres",
  port: PORT,
});

// sequelize connection to database
module.exports = sequelize;
