"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Otp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // user association
      Otp.belongsTo(models.User, {
        foreignKey: "userID",
        as: "user",
        onDelete: "CASCADE",
      });
    }
  }
  Otp.init(
    {
      otp: DataTypes.INTEGER,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Otp",
    }
  );
  return Otp;
};
