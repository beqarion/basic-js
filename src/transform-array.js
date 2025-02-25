const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const result = [];
  const source = [...arr];

  for (let i = 0; i < source.length; i += 1) {
    const current = source[i];

    switch (current) {
      case "--discard-next":
        i += 1;
        break;
      case "--discard-prev":
        if (result.length > 0 && source[i - 2] !== "--discard-next") {
          result.pop();
        }
        break;
      case "--double-next":
        if (i + 1 < source.length) {
          result.push(source[i + 1]);
          result.push(source[i + 1]);
        }
        i += 1;
        break;

      case "--double-prev":
        if (result.length > 0 && source[i - 2] !== "--discard-next") {
          result.push(result[result.length - 1]);
        }
        break;
      default:
        result.push(source[i]);
        break;
    }
  }

  return result;
}

module.exports = {
  transform,
};
