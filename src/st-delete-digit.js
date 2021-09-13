import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(digit) {
 let arr = [];
 let string_digit = String(digit); 
 if (string_digit.length == 2) 
 {
     arr.push(Number(string_digit[0]),Number(string_digit[1]));
 }
 else for (let i = 1; i < string_digit.length; i++)
 {
     arr.push(Number(string_digit.slice(0, i-1) + string_digit.slice(i)));
 }  
 let max = arr[0];
 for (let i = 1; i < arr.length; i++)
 {
     if (arr[i] > max) max = arr[i];
 }
 return max;
}
