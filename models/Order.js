"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: "userID",
        as: "user",
        onDelete: "CASCADE",
      });
      Order.belongsTo(models.Address, {
        foreignKey: "addressID",
        as: "address",
        onDelete: "CASCADE",
      });
      Order.hasMany(models.OrderDetail, {
        // sourceKey: 'id',
        foreignKey: "orderID",
        as: "orderDetail",
      });
    }
  }
  Order.init(
    {
      userID: DataTypes.INTEGER,
      addressID: DataTypes.INTEGER,
      totalOrderCost: DataTypes.INTEGER,
      status: DataTypes.STRING, // placed, processing, inroute, delivered, rejected
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
