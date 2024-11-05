const { Sequelize, DataTypes } = require("sequelize");
// sequelize connection to database
const sequelize = require("../config");
// import employee model
const Employee = require("./employee");

// Use the sequelize instance to define a model
const Department = sequelize.define(
  "Department",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    timestamps: false,
  }
);

// A department can have many employees
Department.hasMany(Employee, {
  foreignKey: { name: "department_Id", allowNull: false },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// An employee belongs to a single department
Employee.belongsTo(Department, {
  foreignKey: { name: "department_Id", allowNull: false },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// export the model
module.exports = Department;
