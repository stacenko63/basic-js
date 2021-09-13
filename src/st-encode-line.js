import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let s2 = "";
    for (let i = 0; i < str.length; i++)
    {
        let count = 1;
        if (str[i] == str[i+1])
        {
            while(str[i] == str[i+1])
            {
                count++;
                i++;
            }
            s2 += count + str[i];
            count = 0;
        }
        else s2 += str[i];
    }
    return s2;
}
