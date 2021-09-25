import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != "string") return false;
    for (let i = 0; i < sampleActivity.length; i++)
  {
    if (sampleActivity.charCodeAt(i) == 46) i++;  
    if (sampleActivity.charCodeAt(i) < 48 || sampleActivity.charCodeAt(i) > 57) return false;
  }
  let a = Number(sampleActivity);
  if (a <= 0 || a > 15) return false;
  return Math.ceil(Math.log(15/a)/(0.693/5730));
}
