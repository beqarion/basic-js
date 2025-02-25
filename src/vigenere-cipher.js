const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let i = 0;
    let j = 0;
    let result = "";

    while (i < message.length) {
      const currentKey = j > 0 && j < key.length ? key[j] : key[j % key.length];
      let numberToShift = currentKey.toUpperCase().charCodeAt(0) - 65;

      const currentLetter = message[i].toUpperCase();
      const currentLetterCode = currentLetter.charCodeAt(0);

      let newLetter = message[i];

      if (currentLetterCode > 64 && currentLetterCode < 91) {
        newLetter = String.fromCharCode(
          ((currentLetterCode - 65 + numberToShift) % 26) + 65
        );

        j += 1;
      }
      result += newLetter;
      i += 1;
    }
    result = this.direct ? result : result.split("").reverse().join("");
    console.log(result);

    return result;
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let i = 0;
    let j = 0;
    let result = "";

    while (i < message.length) {
      const currentKey = j > 0 && j < key.length ? key[j] : key[j % key.length];
      let numberToShift = currentKey.toUpperCase().charCodeAt(0) - 65;

      const currentLetter = message[i].toUpperCase();
      const currentLetterCode = currentLetter.charCodeAt(0);

      let newLetter = message[i];

      if (currentLetterCode > 64 && currentLetterCode < 91) {
        newLetter = String.fromCharCode(
          ((currentLetterCode - 65 - numberToShift + 26) % 26) + 65
        );

        j += 1;
      }
      result += newLetter;
      i += 1;
    }
    result = this.direct ? result : result.split("").reverse().join("");
    console.log(result);

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
