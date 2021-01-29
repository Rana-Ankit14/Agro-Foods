const db = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const pagination = require("../middleware/pagination");

exports.list = async (req, res) => {
  try {
    console.log("********* Product List *****************");
    const currentPage =
      req.query.page !== null && req.query.page !== undefined
        ? parseInt(req.query.page)
        : 1;
    const perPageLimit =
      req.query.limit !== null && req.query.limit !== undefined
        ? parseInt(req.query.limit)
        : 20;
    // const lastId =
    //   req.query.lastId !== null && req.query.lastId !== undefined
    //     ? parseInt(req.query.lastId)
    //     : 0;

    const condition = {};
    if (req.query.search !== null && req.query.search !== undefined) {
      const letters = /^[A-Za-z0-9_ ]+$/;
      let search = req.query.search.trim();
      if (search.match(letters)) {
        condition["name"] = {
          [Op.iRegexp]: search,
        };
      } else {
        res.status(200).json({ message: "Product List", productList: [] });
        return;
      }
    }

    const paginatedResult = await pagination.pagination(
      currentPage,
      perPageLimit,
      condition,
      db.Product
    );

    // condition["id"] = {
    //   [Op.gt]: lastId,
    // };
    const sort = [
      ["id", "DESC"],
      ["name", "DESC"],
    ];

    if (req.query.sort !== null && req.query.sort !== undefined) {
      sort.unshift(JSON.parse(req.query.sort).sortOption);
    }

    const productList = await db.Product.findAll({
      where: condition,
      order: sort,
      attributes: ["id", "name", "coverImage", "weight", "weightType", "price"],
      limit: perPageLimit,
      offset: paginatedResult.startIndex,
    });

    res.status(200).json({
      message: "Product List",
      productList,
      pagination: {
        // paginatedResult: paginatedResult.results,
        totalNoOfItems: paginatedResult.totalNoOfItems,
        totalPage: paginatedResult.totalPage,
      },
    });
  } catch (err) {
    res.status(400).send({
      Error: err.message,
    });
  }
};

exports.detail = async (req, res) => {
  try {
    console.log("********* Product Detail *****************");
    const productID = req.query.id;
    const productDetail = await db.Product.findOne({
      where: {
        id: productID,
      },
      attributes: [
        "id",
        "name",
        "coverImage",
        "weight",
        "weightType",
        "price",
        "description",
        "images",
      ],
    });

    res.status(200).json({ message: "Product Detail", productDetail });
  } catch (err) {
    res.status(400).send({
      Error: err.message,
    });
  }
};
