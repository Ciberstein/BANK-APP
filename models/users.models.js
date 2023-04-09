const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const User = db.define("Users", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accountNumber: {
    type: DataTypes.INTEGER,
    defaultValue: Math.floor(Math.random() * 90000000) + 10000000,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    defaultValue: 1000,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("available", "disabled"),
    defaultValue: "available",
    allowNull: false,
  },
});

module.exports = User;
