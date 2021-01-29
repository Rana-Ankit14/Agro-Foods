const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
const sellerController = require("../controllers/sellerController");

router.route("/signup").post(sellerController.signup);
router.route("/login").post(sellerController.login);
router.route("/verifyOtp").post(sellerController.verifyOtp);
router
  .route("/addProduct")
  .post(middleware.authenticateSellerToken, sellerController.addProduct);
router
  .route("/updateProduct")
  .post(middleware.authenticateSellerToken, sellerController.updateProduct);
router
  .route("/orders")
  .get(middleware.authenticateSellerToken, sellerController.orders);

module.exports = router;
