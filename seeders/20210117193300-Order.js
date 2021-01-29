"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert(
    //   "Orders",
    //   [
    //     {
    //       userID: 1,
    //       addressID: 1,
    //       totalOrderCost: 1000,
    //       status: "placed",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // );
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete("Orders", null, {});
  },
};
