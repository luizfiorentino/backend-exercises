const { Op } = require("sequelize");

const User = require("./models").user;

async function getAllUsers() {
  try {
    const allUsers = await User.findAll({ raw: true });
    return allUsers;
  } catch (e) {
    console.log(e);
  }
}
//getAllUsers().then((users) => console.log(users));

// Select all the rows where firstName=Mila but only return the first one
// Resolves with an object or undefined (if no matching rows exist)

async function getUserByName() {
  try {
    const getMila = await User.findOne({ where: { name: "Mila Bonilla" } });
    return getMila;
    console.log(getMila);
  } catch (e) {
    console.log(e);
  }
}
//getUserByName().then((u) => console.log(u));

// Select a row by its primary key. Resolves with an object or undefined (if no mathing rows)

async function findByPk() {
  try {
    const userByPk = await User.findByPk(2);
    return userByPk;
  } catch (e) {
    console.log(e);
  }
}
//findByPk().then((users) => console.log(users));

// A query using a numeric operator
async function getHeight() {
  try {
    const height = await User.findAll({
      where: {
        height: {
          [Op.gte]: 175,
        },
      },
    });
    return height;
  } catch (e) {
    console.log(e);
  }
}
getHeight().then((u) => console.log(u));
