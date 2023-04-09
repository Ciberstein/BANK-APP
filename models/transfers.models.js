const { DataTypes } = require("sequelize");
const { db } = require("./../database/config");

const Transfer = db.define("Transfers", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  senderUserId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  reciverUserId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
});

module.exports = Transfer;
