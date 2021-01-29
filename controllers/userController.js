const db = require("../models/index");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    console.log("********* Sign Up *****************");
    const user = {
      firstName: req.body.firstName.toLowerCase(),
      lastName: req.body.lastName.toLowerCase(),
      phoneNo: req.body.phoneNo,
      email: req.body.email.toLowerCase().trim(),
      password: req.body.password,
    };
    // console.log(user);
    // console.log(db.Seller)
    const newUserInsert = await db.User.create(user);
    // console.log(newUserInsert);
    res.status(200).json({ isRegister: true, message: "User Created" });
  } catch (err) {
    // console.log(err)
    // console.log(JSON.stringify(err, null, 4));
    // console.log(`${err.name} = ${err.errors[0].message}`);
    // console.log(`${err.name} = ${err.message}`); /**/
    res.status(400).send({
      Error: err.message,
      // Error : err.errors[0].message
    });
  }
};

exports.login = async (req, res) => {
  try {
    console.log("********* Login *****************");
    const user = await db.User.findOne({
      where: { phoneNo: req.body.phoneNo },
      attributes: ["id", "firstName", "isVerified", "password"],
    });
    if (!user) {
      res.status(401).json({ message: "Phone Number not Register" });
    } else if (!user.validPassword(req.body.password)) {
      res.status(401).json({ message: "Invalid Password" });
    } else {
      const loggedUser = {
        userID: user.dataValues.id,
        userType: "user",
      };
      // console.log({ loggedUser });
      const accessToken = jwt.sign(loggedUser, process.env.ACCESS_TOKEN_SECRET);
      res.status(200).json({
        message: "Logged In",
        accessToken,
        isVerified: user.dataValues.isVerified,
        userName: user.dataValues.firstName,
        // userType: "user",
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
    console.log("********* Verify Otp *****************");

    const user = await db.User.findOne({ where: { id: 1 } });
    const otps = await user.getOtps();
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

exports.addressList = async (req, res) => {
  try {
    console.log("********* Address List *****************");

    const addressList = await db.Address.findAll({
      where: { userID: req.user.userID },
      // include: db.User,
    });

    res.status(200).json({ message: "Address List", addressList });
  } catch (err) {
    console.log(`${err.name} = ${err.message}`);
    res.status(400).send({
      Error: err.message,
    });
  }
};

exports.saveAddress = async (req, res) => {
  try {
    console.log("********* Save Address  *****************");

    const userID = req.user.userID;

    const address = {
      street: req.body.street,
      landmark: req.body.landmark,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
      area: req.body.area,
      userID: userID,
    };
    // console.log(address);
    const newAddressInsert = await db.Address.create(address);
    // console.log(newAddressInsert);
    res.status(200).json({ message: "Address Saved" });
  } catch (err) {
    // console.log(`${err.name} = ${err.message}`);
    res.status(400).send({
      Error: err.message,
    });
  }
};

exports.placeOrder = async (req, res) => {
  try {
    console.log("********* Place Order  *****************");

    const userID = req.user.userID;
    const cart = req.body.cart;
    const totalOrderCost = req.body.totalOrderCost;
    const selectedAddress = req.body.selectedAddress;
    // console.log({ userID, cart, totalOrderCost, selectedAddress });

    const newOrder = await db.Order.create({
      userID: userID,
      totalOrderCost: parseInt(totalOrderCost),
      addressID: parseInt(selectedAddress),
      status: "placed",
    });
    const newOrderID = newOrder.dataValues.id;

    const orderDetails = [];
    for (const product of cart) {
      orderDetails.push({
        orderID: newOrderID,
        productID: product.id,
        name: product.name,
        coverImage: product.coverImage,
        weight: product.weight,
        weightType: product.weightType,
        price: product.price,
        totalPrice: product.totalPrice,
        quantity: product.quantity,
      });
    }
    const newOrderDetails = await db.OrderDetail.bulkCreate(orderDetails);
    // console.log({ newOrderDetails });
    res.status(200).json({ message: "Order Placed" });
  } catch (err) {
    console.log(`${err.name} = ${err.message}`);
    res.status(400).send({
      Error: err.message,
    });
  }
};

exports.myOrders = async (req, res) => {
  try {
    console.log("********* My Orders *****************");

    const myOrderList = await db.Order.findAll({
      where: {
        userID: req.user.userID,
      },
      order: [["id", "DESC"]],
      include: [{ model: db.OrderDetail, as: "orderDetail" }],
    });
    console.log(myOrderList);
    res.status(200).json({ message: "My Orders", myOrderList });
  } catch (err) {
    console.log(`${err.name} = ${err.message}`);
    res.status(400).send({
      Error: err.message,
    });
  }
};

exports.userInfo = async (req, res) => {
  try {
    console.log("********* User Info *****************");

    const userInfo = await db.User.findAll({
      where: { id: req.user.userID },
      include: { model: db.Address, as: "address" },
      attributes: ["firstName", "lastName", "email", "phoneNo"],
    });
    // console.log(userInfo[0].dataValues);
    res.status(200).json({ message: "User Info", userInfo: userInfo[0] });
  } catch (err) {
    console.log(`${err.name} = ${err.message}`);
    res.status(400).send({
      Error: err.message,
    });
  }
};
