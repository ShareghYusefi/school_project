const { Sequelize, DataTypes } = require("sequelize");
// sequelize connection to database
const sequelize = require("../config");

// Use the sequelize instance to define a model
const Student = sequelize.define(
  "Student",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    timestamps: false,
  }
);

// export the model
module.exports = Student;
