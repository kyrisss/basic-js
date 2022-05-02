const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// function sortByHeight(arr) {
//   arr.sort((a,b) => {
//     if(b == -1 || a == -1){

//     }else{
//       return a-b
//     }
//   }) 
//   return arr
// }

function sortByHeight(arr) {
  const numbers = arr.filter((number) => number >= 0).sort((a, b) => a - b);

  return arr.map((number) => number >= 0 ? numbers.shift() : number);
}

module.exports = {
  sortByHeight
};
