const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if(members === undefined || members === null ||typeof members ==='number'){
    return false;
  }
  let arr = [];
  for(let i=0; i<members.length; i++){
    if(typeof members[i] === 'string'){
      arr.push(members[i].trim().toUpperCase());
    }
  }
  arr.sort();
  for(let i=0; i<arr.length; i++){
    arr[i] = arr[i][0];
  }
  return arr.join('');
}
module.exports = {
  createDreamTeam
};
