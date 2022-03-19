"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoItems", [
      {
        task: "Write the report",
        deadline: "tue evening",
        important: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "cut my hair",
        deadline: "end of this week",
        important: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "compose new punk rock song",
        deadline: "till the end of the month",
        important: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "sell some more boose",
        deadline: "this week",
        important: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "file and lack my nails",
        deadline: "friday",
        important: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "prepair for presentation",
        deadline: "the weekend",
        important: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "send email to Jon",
        deadline: "tomorrow",
        important: false,
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
    await queryInterface.bulkDelete("todoItems", null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
