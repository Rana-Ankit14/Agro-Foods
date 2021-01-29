const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
const userController = require("../controllers/userController");

//post request
router.route("/signup").post(userController.signup);
router.route("/login").post(userController.login);
router.route("/verifyOtp").post(userController.verifyOtp);

router
  .route("/placeOrder")
  .post(middleware.authenticateUserToken, userController.placeOrder);

router
  .route("/saveAddress")
  .post(middleware.authenticateUserToken, userController.saveAddress);

//get request
router
  .route("/addressList")
  .get(middleware.authenticateUserToken, userController.addressList);
router
  .route("/myOrders")
  .get(middleware.authenticateUserToken, userController.myOrders);
router
  .route("/userInfo")
  .get(middleware.authenticateUserToken, userController.userInfo);

module.exports = router;
