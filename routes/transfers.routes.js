const express = require("express");
const fs = require("fs");
const transfersController = require("../controllers/transfers.controller");
const transfersMiddleware = require("../middlewares/transfers.middlewares");

const router = express.Router();

router
  .route("/")
  .post(transfersMiddleware.validTransfer, transfersController.createTransfer);

module.exports = router;
