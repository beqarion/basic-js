const { NotImplementedError } = require("../extensions/index.js");

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
function isMAC48Address(n) {
  const hexArr = n.split("-");
  if (hexArr.length !== 6) return false;

  return hexArr.every((str) => /^[A-Fa-f0-9]{2}$/.test(str));
}
module.exports = {
  isMAC48Address,
};
