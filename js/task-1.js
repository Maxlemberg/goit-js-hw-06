import users from './users.js';
const getUserNames = users => {
  const usersName = users.map(user => user.name);
  return usersName;
  // твой код
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

