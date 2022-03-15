const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

// function getSumOfDigits(n) {
//   // throw new NotImplementedError('Not implemented');
//   let sum = n.toString().split('').reduce((a,b)=>+a+ +b, 0);
//   if(sum<=9){
//     return +sum;
//   }else{
//     return getSumOfDigits(sum);
//   }
// }

function getSumOfDigits(n){
  let sum = n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
  return sum <= 9 ? sum : getSumOfDigits(sum);
}
// getSumOfDigits(91), 
// getSumOfDigits(100),
// getSumOfDigits(35), 
// getSumOfDigits(99), 
// getSumOfDigits(123);

module.exports = {
  getSumOfDigits
};
