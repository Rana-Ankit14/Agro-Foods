"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert(
    //   "Sellers",
    //   [
    //     {
    //       name: "First Shop",
    //       phoneNo: "1554150",
    //       password: "$321!pass!123$",
    //       email: "firstshop@gmail.com",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // );
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete("Sellers", null, {});
  },
};
