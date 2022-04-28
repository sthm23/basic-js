const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let obj = {};
  


  for(let i=0; i<domains.length; i++){
  //   domains[i] = domains[i].split('.').reverse();
  //   let aa = '';
    
  //   for(let k=0; k<domains[i].length; k++){
  //     let count = 0;
  //     aa = '.' + domains[i][k];
  //     obj[aa] = count;
  //     // count = 0;
  //   }
  }
  // // return obj;
  // console.log(obj)
  // // console.log(domains);
}
getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])
module.exports = {
  getDNSStats
};
