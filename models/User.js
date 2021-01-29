"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 1 to many with Otp
      User.hasMany(models.Otp, {
        // sourceKey: 'id',
        foreignKey: "userID",
        as: "otp",
      });
      User.hasMany(models.Address, {
        // sourceKey: 'id',
        foreignKey: "userID",
        as: "address",
      });
      User.hasMany(models.Order, {
        // sourceKey: 'id',`
        foreignKey: "userID",
        as: "order",
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phoneNo: DataTypes.BIGINT,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync(8);
          user.password = bcrypt.hashSync(user.password, salt);
        },
      },
    }
  );

  // instance method
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  return User;
};
