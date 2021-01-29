"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Seller, {
        foreignKey: "sellerID",
        as: "seller",
      });
      Product.hasMany(models.OrderDetail, {
        // sourceKey: 'id',
        foreignKey: "productID",
        as: "orderDetail",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      coverImage: DataTypes.STRING,
      images: DataTypes.ARRAY(DataTypes.STRING),
      sellerID: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      weightType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
