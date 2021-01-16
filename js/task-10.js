import users from './users.js';
const getSortedUniqueSkills = users => {
  // твой кодc
  const a = [];
  const skillsArr = [];
  users.forEach(item => item.skills.forEach(item => a.push(item)));

  a.sort().filter((item, index, array) => {
    if (!skillsArr.includes(item)) {
      skillsArr.push(item);
    }
  });
  return skillsArr;
  //console.log(skillsArr);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
