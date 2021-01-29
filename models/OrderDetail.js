"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetail.belongsTo(models.Order, {
        foreignKey: "orderID",
        as: "order",
      });
      OrderDetail.belongsTo(models.Product, {
        foreignKey: "productID",
        as: "product",
      });
    }
  }
  OrderDetail.init(
    {
      orderID: DataTypes.INTEGER,
      productID: DataTypes.INTEGER,
      name: DataTypes.STRING,
      coverImage: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      weightType: DataTypes.STRING,
      price: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderDetail",
    }
  );
  return OrderDetail;
};
