const User = require("../models/users.models");
const Transfer = require("../models/transfers.models");

exports.createUser = async (req, res) => {
  const { name, password } = req.body;

  const repair = await User.create({
    name,
    password,
  });

  return res.json({
    status: "success",
    message: "The user has been created",
    repair,
  });
};

exports.loginUser = async (req, res) => {
  const { accountNumber, password } = req.body;

  await User.findOne({
    where: {
      accountNumber,
      password,
      status: "available",
    },
  });

  return res.status(200).json({
    status: "success",
    message: "User has been logged",
  });
};

exports.historyUser = async (req, res) => {
  const { user } = req;

  const history = await Transfer.findAll({
    where: {
      senderUserId: user.id,
    },
  });

  return res.status(200).json({
    history,
  });
};
