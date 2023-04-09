const Transfer = require("../models/transfers.models");
const User = require("../models/users.models");

exports.validTransfer = async (req, res, next) => {
  const { senderAccount, reciverAccount, amount } = req.body;

  const sender = await User.findOne({
    where: {
      accountNumber: senderAccount,
      status: "available",
    },
  });

  const reciver = await User.findOne({
    where: {
      accountNumber: reciverAccount,
      status: "available",
    },
  });

  if (!sender) {
    return res.status(404).json({
      status: "error",
      message: `User with account number: ${senderAccount} not found`,
    });
  }

  if (!reciver) {
    return res.status(404).json({
      status: "error",
      message: `User with account number: ${reciverAccount} not found`,
    });
  }

  if (sender.amount < amount) {
    return res.status(400).json({
      status: "error",
      message: `Insuficient funds`,
    });
  }

  req.sender = sender;
  req.reciver = reciver;
  next();
};
