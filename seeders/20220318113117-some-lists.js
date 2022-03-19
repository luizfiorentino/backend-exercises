"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoLists", [
      {
        name: "Monika's personal to-dos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Monika's professional to-dos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Daniels personal todo-list",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jello's afazeres list",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mila todo's",
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
    await queryInterface.bulkDelete("todoLists", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
