import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(str) {
    let index = 2
    for (let i = 0; i < str.length; i++)
    {
        if (i == index && str[i] == "-" && i != 0) 
        {
            i++;
            index += 3;
        }
        else if (i % 2 == 0 && str[i] == "-" && i != 0) return false;
        if (!((str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) || (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 70))) return false;
    }
    return true;
}
