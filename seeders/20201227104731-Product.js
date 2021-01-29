"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Some Other",
          description: "Testing the product creation",
          coverImage:
            "https://images-na.ssl-images-amazon.com/images/I/71CAb58u8TL._SL1313_.jpg",
          images: [
            "https://images-na.ssl-images-amazon.com/images/I/71CAb58u8TL._SL1313_.jpg",
            "https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753",
          ],
          sellerID: 1,
          price: 20,
          weight: 5,
          weightType: "kg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Random Product",
          description: "Testing the product creation",
          coverImage: "https://picsum.photos/200",
          images: ["https://picsum.photos/200", "https://picsum.photos/200"],
          sellerID: 1,
          price: 205,
          weight: 1,
          weightType: "gram",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
