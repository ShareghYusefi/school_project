const { Sequelize, DataTypes } = require("sequelize");
// sequelize connection to database
const sequelize = require("../config");

// Use the sequelize instance to define a model
const Employee = sequelize.define(
  "Employee",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

// export the model
module.exports = Employee;
