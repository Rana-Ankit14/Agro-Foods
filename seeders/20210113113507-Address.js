"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert(
    //   "Addresses",
    //   [
    //     {
    //       street: "Flat no.4",
    //       area: "Viman Nagar",
    //       landmark: "sky view apartment",
    //       pincode: 411014,
    //       state: "Maha",
    //       city: "Pune",
    //       userID: 1,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // );
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete("Addresses", null, {});
  },
};
