const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const index = {};
  const result = Array(names.length);

  for (let i = 0; i < names.length; i += 1) {
    const current = names[i];

    if (!index[current]) index[current] = [i];
    else {
      index[current].push(i);
    }
  }
  Object.entries(index).forEach(([fileName, indexArray]) => {
    if (result.includes(fileName)) {
      for (let i = 1; i <= indexArray.length; i += 1) {
        const index = indexArray[i - 1];
        result[index] = `${fileName}(${i})`;
      }
    } else {
      for (let i = 0; i < indexArray.length; i += 1) {
        const index = indexArray[i];
        result[index] = `${fileName}${i === 0 ? "" : "(" + i + ")"}`;
      }
    }
  });

  return result;
}

module.exports = {
  renameFiles,
};
