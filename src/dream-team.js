import { NotImplementedError } from '../extensions/index.js';


export default function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
{
    let min = "";
    let answer = "";
    let members2 = [];
    if (!Array.isArray(members)) return false;
    for (let i = 0; i < members.length; i++)
    {
        if (typeof(members[i]) == "string") members2.push(members[i]);
    }
    members2 = members2.join(",").replace(/\s/g, "").toUpperCase().split(",");
    for (let i = 0; i < members2.length - 1; i++)
    {
        min = i;
        for (let j = i+1; j < members2.length; j++)
        {
            if (members2[j] < members2[min]) min = j;
        }
        [members2[i], members2[min]] = [members2[min], members2[i]];
    }
    for (let i = 0; i < members2.length; i++)
    {
        answer += members2[i][0];
    }
    return answer;
}
}
