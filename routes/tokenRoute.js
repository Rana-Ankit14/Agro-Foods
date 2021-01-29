const express = require("express");
const router = express.Router();

const tokenController = require("../controllers/tokenController");
const middleware = require("../middleware/middleware");

router
  .route("/validate")
  .post(middleware.authenticateUserToken, tokenController.validate);

router
  .route("/seller/validate")
  .post(middleware.authenticateSellerToken, tokenController.validate);
module.exports = router;
