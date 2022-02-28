const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity ) {
  const year = 0.693 / HALF_LIFE_PERIOD;
  if(sampleActivity<=0 || typeof sampleActivity != 'string' || isNaN(sampleActivity) || sampleActivity> MODERN_ACTIVITY){
    return false;
  }else{
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / year);
  }
  
}

module.exports = {
  dateSample
};
