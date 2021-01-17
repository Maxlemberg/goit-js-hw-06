import users from './users.js';
const getSortedUniqueSkills = users => {
  const arrSkills = users
    .reduce((acc, item) => {
      return [...acc, acc.includes(!item.skills) ? acc[item.skills] : ''];
    }, [])
    .sort();
  return arrSkills;
};

console.log(getSortedUniqueSkills(users));

//////////// VERSION 2 /////////////
//const getSortedUniqueSkills = users => {
//  const arrSkills = users.reduce((acc, item) => {
//    acc.push(...item.skills);
//    return acc;
//  }, []);
//  return arrSkills
//    .sort()
//    .filter((item, index, array) => item !== array[index + 1]);
//};
//
//console.log(getSortedUniqueSkills(users));

////////// VERSION 3 ////////////////////////////
//const getSortedUniqueSkills = users => {
//
//  const a = [];
//  const skillsArr = [];
//  users.forEach(item => item.skills.forEach(item => a.push(item)));
//
//  a.sort().filter((item, index, array) => {
//    if (!skillsArr.includes(item)) {
//      skillsArr.push(item);
//    }
//  });
//  return skillsArr;
//
//};
//
//console.log(getSortedUniqueSkills(users));
//// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
