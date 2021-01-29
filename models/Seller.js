"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seller.hasMany(models.Product, {
        // sourceKey: 'id',
        foreignKey: "sellerID",
        as: "product",
      });
    }
  }
  Seller.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phoneNo: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "Seller",
      hooks: {
        beforeCreate: (seller) => {
          const salt = bcrypt.genSaltSync(8);
          seller.password = bcrypt.hashSync(seller.password, salt);
        },
      },
    }
  );

  // instance method
  Seller.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  return Seller;
};
