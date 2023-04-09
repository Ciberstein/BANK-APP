const User = require("../models/users.models");

exports.validLoginUser = async (req, res, next) => {
  const { accountNumber, password } = req.body;

  const user = await User.findOne({
    where: {
      accountNumber,
      password,
      status: "available",
    },
  });

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "The password is not valid",
    });
  }

  req.user = user;
  next();
};

exports.validExistAccount = async (req, res, next) => {
  const { accountNumber } = req.body;

  const user = await User.findOne({
    where: {
      accountNumber,
      status: "available",
    },
  });

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: `User with account number: ${accountNumber} not found`,
    });
  }

  req.user = user;
  next();
};

exports.validExistUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: "available",
    },
  });

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: `User with id: ${id} not found`,
    });
  }

  req.user = user;
  next();
};
