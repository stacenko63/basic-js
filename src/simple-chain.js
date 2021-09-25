import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    str: "",
     getLength() {
       let arr = this.str.split("~~");
       return arr;
     },
     addLink(value) {
       //('( )')
     if (this.str.length == 0) this.str += "( " + value + " )";
      else this.str += "~~( " + value + " )";
     },
     removeLink(position) {
       if (typeof(position) != "number" || Number.isInteger(position)) throw new Error ("You can't remove incorrect link!");
       let check = false;
       for (let i = 0 ; i < this.str.length; i++)
       {
         if (Number(this.str[i]) == position && isNaN(this.str[i+1]) && isNaN(this.str[i-1])) check = true;
       }
       if (check == false) throw new Error ("You can't remove incorrect link!");
     },
     reverseChain() {
       
   this.str.split("~~").reverse().join("~~");
     },
     finishChain() {
       return this.str;
     }
};