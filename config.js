const { Sequelize } = require("sequelize");
const { PostgresDialect } = require("@sequelize/postgres");

const HOST = process.env.HOST;
const DATABASE = process.env.DATABASE;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const PORT = process.env.PORT;

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: PostgresDialect,
  port: PORT,
});

// sequelize connection to database
module.exports = sequelize;
