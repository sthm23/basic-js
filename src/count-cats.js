const { NotImplementedError } = require('../extensions/index.js');


function countCats(matrix) {
  let arr = matrix;
  let counter = 0;
  arr.forEach(element => {
    element.forEach(item=>{
      if(item==='^^'){
        counter++;
      }
    })
  });
  return counter;
}

module.exports = {
  countCats
};
