const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const strObj1 = {};
  const strObj2 = {};

  for (let char of s1) {
    strObj1[char] = (strObj1[char] || 0) + 1;
  }
  for (let char of s2) {
    strObj2[char] = (strObj2[char] || 0) + 1;
  }
  console.log({ strObj1, strObj2 });

  let matchCount = 0;

  for (let char in strObj1) {
    let numOfChar1 = strObj1[char];
    if (char in strObj2) {
      let numOfChar2 = strObj2[char];
      matchCount += Math.min(numOfChar1, numOfChar2);
    }
  }
  return matchCount;
}

module.exports = {
  getCommonCharacterCount,
};
