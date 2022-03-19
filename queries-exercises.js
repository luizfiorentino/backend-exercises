const User = require("./models").user;
const TodoItem = require("./models").todoItem;

async function showUsers() {
  const allUsers = await User.findAll();
  return allUsers.map((user) => user.get({ plain: true }));
}
//showUsers().then((user) => console.log(user));

async function allItems() {
  const items = await TodoItem.findAll();
  // OBS. it's an ARRAY, so we use .map
  // THEN, we use .get
  return items.map((item) => item.get({ plain: true }));
}
//allItems().then((i) => console.log(i));

async function userPk(pk) {
  const thisGuy = await User.findByPk(pk);
  // OBS. is a single result, so we use .get directly, without .map
  // Use conditional ternary operator, since the pk can be valid or not
  return thisGuy ? thisGuy.get({ plain: true }) : console.log("User not found");
}
//userPk(2).then((guy) => console.log(guy));

// Create a new user
async function createUser({ name, email, phone }) {
  const newOne = await User.create({ name, email, phone });
  return newOne.get({ plain: true });
}
/*
createUser({
  name: "Josephine McChilli",
  email: "j.mc@chilli.com",
  phone: 2345678,
}).then((user) => console.log(user));
*/
// Show all important todos

async function importantItems() {
  const importants = await TodoItem.findAll({ where: { important: true } });
  return importants
    ? // OBS: this is an array, so we use .map
      // and THEN, we use .get
      importants.map((item) => item.get({ plain: true }))
    : console.log("No important items found");
}
importantItems().then((items) => console.log(items));
