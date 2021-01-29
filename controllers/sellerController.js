const db = require("../models/index");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    console.log("********* Seller Sign Up *****************");
    console.log(req.body);
    const seller = {
      name: req.body.name.toLowerCase(),
      phoneNo: req.body.phoneNo,
      email: req.body.email.toLowerCase().trim(),
      password: req.body.password,
    };

    // console.log(db.Seller)
    const newSellerInsert = await db.Seller.create(seller);
    // console.log(newUserInsert)
    res.status(200).json({ message: "Seller Created" });
  } catch (err) {
    res.status(400).send({
      Error: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    console.log("********* Seller Login *****************");
    const seller = await db.Seller.findOne({
      where: { phoneNo: req.body.phoneNo },
    });

    if (!seller) {
      res.status(401).json({ message: "Phone Number not Register" });
    } else if (!seller.validPassword(req.body.password)) {
      res.status(401).json({ message: "Invalid Password" });
    } else {
      const loggedSeller = {
        sellerID: seller.dataValues.id,
        userType: "seller",
      };
      const accessToken = jwt.sign(
        loggedSeller,
        process.env.ACCESS_SELLER_TOKEN_SECRET
      );
      res.status(200).json({
        message: "Logged In",
        accessToken,
        userType: "seller",
        userName: seller.dataValues.name,
        isLogin: true,
      });
    }
  } catch (err) {
    console.log(`${err.name} = ${err.message}`);
    res.status(400).send({
      Error: err.message,
    });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    console.log("********* Seller Verify Otp *****************");

    // const user = await db.Seller.findOne({ where: { id: 1 } });
    // const otps = await user.getOtps();
    // const otp = await db.Otp.findOne({where: {id: 1},include: db.User});
    // console.log(user)
    // console.log(otps)

    res.status(200).json({ message: "Verified" });
  } catch (err) {
    console.log(`${err.name} = ${err.message}`);
    res.status(400).send({
      Error: err.message,
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    console.log("********* Seller Add Product *****************");
    // console.log(req.body);
    const product = {
      name: req.body.name.toLowerCase(),
      price: req.body.price,
      weight: req.body.weight,
      weightType: req.body.weightType,
      description: req.body.description,
      sellerID: req.seller.sellerID,
      coverImage: req.body.coverImage,
      images: req.body.images,
    };

    // console.log({ product });
    const newProductInsert = await db.Product.create(product);
    // console.log(newProductInsert);
    res.status(200).json({ message: "Product Saved" });
  } catch (err) {
    res.status(400).send({
      Error: err.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    console.log("********* Seller Update Product *****************");
    const id = req.body.id;
    const product = {
      name: req.body.name.toLowerCase(),
      price: req.body.price,
      weight: req.body.weight,
      weightType: req.body.weightType,
      description: req.body.description,
      sellerID: req.seller.sellerID,
      coverImage: req.body.coverImage,
      images: req.body.images,
    };

    console.log({ product });
    console.log({ id });
    const [numberOfAffectedRows] = await db.Product.update(product, {
      where: { id: id },
    });

    res.status(200).json({ message: "Product Updated" });
  } catch (err) {
    res.status(400).send({
      Error: err.message,
    });
  }
};

exports.orders = async (req, res) => {
  try {
    console.log("********* Seller Orders  List*****************");

    const orders = await db.Order.findAll({
      where: {},
      include: [
        { model: db.OrderDetail, as: "orderDetail" },
        { model: db.Address, as: "address" },
        { model: db.User, as: "user" },
      ],
    });
    console.log(orders);
    res.status(200).json({ message: "My Orders", orders });
  } catch (err) {
    console.log(`${err.name} = ${err.message}`);
    res.status(400).send({
      Error: err.message,
    });
  }
};
