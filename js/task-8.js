import users from './users.js';
const getUsersWithFriend = (users, friendName) => {
  // твой код
  return users
    .filter(item => item.friends.includes(friendName))
    .map(item => item.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
