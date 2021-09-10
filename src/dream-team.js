import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  function createDreamTeam(members)
{
    let min = ""
    let answer = ""
    for (let i = 0; i < members.length - 1; i++)
    {
        min = i;
        for (let j = i+1; j < members.length; j++)
        {
            if (members[j] < members[min]) min = j;
        }
        [members[i], members[min]] = [members[min], members[i]];
    }
    for (let i = 0; i < members.length; i++)
    {
        if (typeof(members[i]) == "string") answer += members[i][0];
    }
    return answer;
}
}
