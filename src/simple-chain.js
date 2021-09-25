import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    arr: [],
     getLength() {
       return this.arr.length;
     },
     addLink(value) {
     this.arr.push("( " + value + " )");
     },
     removeLink(position) {
       
     },
     reverseChain() { 
      return this.arr.reverse();
     },
     finishChain() {
       return this.arr.join("~~");
     }
};