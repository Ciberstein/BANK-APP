const Transfer = require("../models/transfers.models");

exports.createTransfer = async (req, res) => {
  const { sender, reciver } = req;
  const { amount } = req.body;

  await sender.update({
    amount: sender.amount - amount,
  });

  await reciver.update({
    amount: reciver.amount + amount,
  });

  const transfer = await Transfer.create({
    amount,
    senderUserId: sender.id,
    reciverUserId: reciver.id,
  });

  return res.json({
    status: "success",
    message: "The transfer has been completed",
    transfer,
  });
};
