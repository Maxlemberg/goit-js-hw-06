import users from './users.js';
const getSortedUniqueSkills = users => {
  const arrSkills = users.reduce((acc, item) => {
    acc.push(...item.skills);
    return acc;
  }, []);
  return arrSkills
    .sort()
    .filter((item, index, array) => item !== array[index + 1]);
};

console.log(getSortedUniqueSkills(users));
