import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  throw new NotImplementedError('Not implemented');
  // if (!Array.isArray(arr)) 
  //   {
  //           throw new Error ('\'arr\' parameter must be an instance of the Array!');
  //   }
  //   let arr2 = [];
  //   for (let i = 0; i < arr.length; i++)
  //   {
  //       if (i < arr.length - 1 && arr[i] == "--double-next" && typeof(arr[i+1]) == "number") arr2.push(arr[i+1]);  
  //       else if (i != 0 && arr[i] == "--double-prev") arr2.push(arr[i-1]);
  //       else if (i <  arr.length - 1 && arr[i] == "--discard-next") i += 2;
  //       else if ((typeof(arr[i]) == "number" && arr[i+1] != "--discard-prev") || ((typeof(arr[i])) == "number" && i == arr.length - 1)) arr2.push(arr[i]);
  //   }
  //   return arr2;
}
