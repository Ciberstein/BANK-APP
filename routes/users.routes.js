const express = require("express");
const fs = require("fs");
const usersController = require("../controllers/users.controller");
const usersMiddleware = require("../middlewares/users.middlewares");

const router = express.Router();

router.route("/signup").post(usersController.createUser);
router
  .route("/login")
  .post(
    usersMiddleware.validExistAccount,
    usersMiddleware.validLoginUser,
    usersController.loginUser
  );
router
  .route("/:id/history")
  .get(usersMiddleware.validExistUser, usersController.historyUser);

module.exports = router;
