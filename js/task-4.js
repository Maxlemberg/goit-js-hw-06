import users from './users.js';
const getInactiveUsers = users => {
  // твой код
  return users.filter(item => !item.isActive).map(item => item.name);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
