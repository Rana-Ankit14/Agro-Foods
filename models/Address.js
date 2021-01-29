"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // user association
      Address.belongsTo(models.User, {
        foreignKey: "userID",
        as: "user",
        onDelete: "CASCADE",
      });
      Address.hasMany(models.Order, {
        // sourceKey: 'id',
        foreignKey: "addressID",
        as: "order",
      });
    }
  }
  Address.init(
    {
      street: DataTypes.STRING,
      area: DataTypes.STRING,
      landmark: DataTypes.STRING,
      pincode: DataTypes.INTEGER,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
