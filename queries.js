// Make a function which searches for all users and logs them
const Users = require("./models").user;

async function showAllUsers() {
  try {
    const allUsers = await Users.findAll({ raw: true });
    return allUsers;
  } catch (e) {
    console.log(e);
  }
}
//showAllUsers().then((user) => console.log(user));

// Function that searches for all todo items and logs them. Use .toJSON() or {raw: true } in the query
const TodoItems = require("./models").todoItem;
async function showAllTodos() {
  try {
    const allItems = await TodoItems.findAll({ raw: true });
    return allItems;
  } catch (e) {
    console.log(e);
  }
}
//showAllTodos().then((item) => console.log(item));

// Searches for a user by Primary Key
async function userByPk() {
  try {
    const thisUser = await Users.findByPk(4, { raw: true });
    return thisUser;
  } catch (e) {
    console.log(e);
  }
}
//userByPk().then((u) => console.log(u));

// Create a new user
async function newGuy() {
  try {
    const newUser1 = await Users.create({
      name: "Rachel Roche",
      email: "rachel@leRochett.com",
      phone: 12345566,
      password: "SuperLarochehard",
    });
    const newUser2 = await Users.create({
      name: "Melina Nosferatta",
      email: "melina@ladolce.com",
      phone: 12885566,
      password: "Sochehard",
    });

    return [newUser1, newUser2].map((user) => user.toJSON());
  } catch (e) {
    console.log(e);
  }
}
//newGuy().then((user) => console.log(user));

// Search only for important Todo Items
async function importantTodos() {
  try {
    const importantOnes = TodoItems.findAll({ where: { important: true } });
    return importantOnes;
  } catch (e) {
    console.log(e);
  }
}
importantTodos().then((item) => console.log(item));
