"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Mila Bonilla",
        email: "mila@bonilla.co",
        phone: 2345678,
        password: "hardpassword",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Daniels Jackinsson",
        email: "danie@jacks.com",
        phone: 554678,
        password: "agogowhisss",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Monika Jobs ",
        email: "mon@jobs.apple",
        phone: 33445566,
        password: "monmonks",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jello Biafra ",
        email: "jello@punkrock.co",
        phone: 55667788,
        password: "punkrockcrazy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
