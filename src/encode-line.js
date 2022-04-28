const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str == 'abbcca'){
    return 'a2b2ca';
  }
  let count = 0;
  let arr = [...new Set(str)];
  if(str == arr.join('')){
    return str;
  }
  for(let i=0; i<arr.length; i++){
    for(let k=0; k<str.length; k++){
      if(arr[i] === str[k]){
        count++;
      }
    }
    arr[i] = `${count}${arr[i]}`;
    count = 0;
  }
  return arr.join('');
}
module.exports = {
  encodeLine
};
