import users from './users.js';
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
  // твой код
};

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
