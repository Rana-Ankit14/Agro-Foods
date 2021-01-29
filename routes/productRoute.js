const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
const productController = require("../controllers/productController");

router.route("/list").get(productController.list);
router.route("/detail").get(productController.detail);

module.exports = router;
