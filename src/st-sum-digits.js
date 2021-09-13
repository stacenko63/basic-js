import { NotImplementedError } from '../extensions/index.js';

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
export default function getSumOfDigits(digit) {
    let digit_string = String(digit);
    let sum = 0;
    while (digit_string.length != 1)
    {
        for (let i = 0; i < digit_string.length; i++)
        {
            sum += Number(digit_string[i]);
        }
        digit_string = String(sum);
    }
    return digit_string;
}
