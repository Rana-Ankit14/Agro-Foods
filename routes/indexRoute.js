const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoute");
const sellerRoutes = require("./sellerRoute");
const tokenRoutes = require("./tokenRoute");
const productRoutes = require("./productRoute");
// const tokenRoutes = require('./tokenRoute')

router.use("/user", userRoutes);
router.use("/seller", sellerRoutes);
router.use("/token", tokenRoutes);
router.use("/product", productRoutes);
// router.use("/token", tokenRoutes);

module.exports = router;
