import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(springDate) {
  if (typeof(springDate) === "undefined") return ("Unable to determine the time of year!");
  if (Object.keys(springDate).length !== 0 ||  typeof(springDate) !== "object") throw Error('Invalid date!');
    if (springDate.getMonth() == 0 || springDate.getMonth() == 1 || springDate.getMonth() == 11) return "winter";
    else if (springDate.getMonth() >= 2 && springDate.getMonth() <= 4) return "spring";
    else if (springDate.getMonth() >= 5 && springDate.getMonth() <= 7) return "summer";
    else if (springDate.getMonth() >= 8 && springDate.getMonth() <= 10) return "autumn";
  }

