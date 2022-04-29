const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let arr = [];
  let res = '';
  let str1 = new String(str);
  let param = new function(){
    this.repeatTimes = options.repeatTimes || 1;
    this.separator = options.separator || '+';
    let a = options.addition;
    if(a === undefined){
      a = '';
    }else{
      a = String(options.addition);
    }
    this.addition = a;
    this.additionRepeatTimes = options.additionRepeatTimes || 1;
    this.additionSeparator = options.additionSeparator || '|';
  };
  console.log(typeof param.addition, param.addition);
  for(let i = 0; i<+param.additionRepeatTimes; i++){
    if(i == +param.additionRepeatTimes-1){
      arr.push(param.addition);
    }else{
      res = `${param.addition}${param.additionSeparator}`;
      arr.push(res);
    }
  }
  res = arr.join('');
  arr=[];
  res = str1 + res;
  resSeparat = res + param.separator;
  for(let i = 0; i<param.repeatTimes; i++){
    if(i == +param.repeatTimes-1){
      arr.push(res);
    }else{
      arr.push(resSeparat);
    }    
  }
  res = arr.join('');
  console.log(res)
  return res;
}
repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })

// repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })
// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })

module.exports = {
  repeater
};
