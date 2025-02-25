const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(n) {
  let digitArray = n.toString().split("").map(Number);
  let prevIndex = -1;
  console.log(digitArray);

  for (let i = 0; i < digitArray.length; i += 1) {
    if (typeof digitArray[prevIndex] !== "undefined") {
      if (digitArray[i] > digitArray[prevIndex]) {
        digitArray.splice(prevIndex, 1);
        return Number(digitArray.join(""));
      }
    }

    prevIndex = i;
  }
  digitArray.splice(digitArray.length - 1, 1);
  return Number(digitArray.join(""));
}

module.exports = {
  deleteDigit,
};
