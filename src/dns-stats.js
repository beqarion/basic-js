const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // ingredients
  const reversedUrls = domains.map((domain) => {
    return domain.split(".").reverse().join(".");
  });
  const stringifiedDomains = reversedUrls.join(" ");
  const queries = produceSearchKeywordArray(reversedUrls);

  // main dish
  const dnsObject = {}; // << final Object, which we return.

  queries.forEach((query) => {
    const count = stringifiedDomains.split(query).length - 1;

    if (dnsObject[`.${query}`] === undefined) {
      dnsObject[`.${query}`] = count;
    }
  });

  return dnsObject;

  // Helper
  function produceSearchKeywordArray(reversedUrls) {
    const queries = [];

    reversedUrls.forEach((reversedUrl) => {
      const urlArray = reversedUrl.split(".");
      for (let i = 1; i <= urlArray.length; i += 1) {
        const query = urlArray.slice(0, i).join(".");
        queries.push(query);
      }
    });
    return queries;
  }
}

module.exports = {
  getDNSStats,
};
