// Edge case
// SPANISH 1C or SPANISH S1BC. SPANISH 1C with a grade of C or better. SPANISH S1BC with a grade of C or better. Placement into SPANISH 2A is also accepted.

const [ Symbols ] = require("./symbols.js");
/**
 * Turns a string of prerequisites or corequisites into tokens.
 * @param  {string} str Requisite string to turn into tokens.
 * @returns {array}
 */
const toTokens = (str) => {
  let words = _toWords(str);
  let wordLen = words.length;
  let tokenResult = [];
  let nameWords = [];
  for (let i = 0; i < wordLen; i++) {
    let curWord = words[i];
    let wordIsSyntax = isSyntax(curWord);

    // EDGE CASE: "grade of _ or better"
    // If the next word is "better", then "or" is not considered to be syntax.
    if (
      i + 1 < wordLen &&
      words[i + 1].toUpperCase() === "better".toUpperCase()
    ) {
      wordIsSyntax = false;
    }

    if (wordIsSyntax) {
      tokenResult.push(curWord);
      nameWords = [];
    } else {
      nameWords.push(curWord);
      // If curWord is the last word OR the next word is syntax
      if (i + 1 >= wordLen || isSyntax(words[i + 1])) {
        tokenResult.push(nameWords.join(" ")); // Combine all nameWords and push into result
      }
    }
  }
  return tokenResult;
};

/**
 * Returns whether a string exists in the symbols enum.
 * @param   {string} str String to check whether it is a symbol.
 * @returns {boolean}    Whether the string is a valid Symbol.
 */
const isSyntax = (str) => {
  return Object.values(Symbols).includes(str);
};

/**
 * Turns a prerequisite_text string into an array of tokens.
 * @param   {string} str String to be split into tokens.
 * @returns {array}      Array of tokens.
 */
function _toWords(str) {
  let words = str.toUpperCase().split(" ");
  filteredWords = words.filter((e) => e != "");
  return filteredWords;
};

module.exports = [toTokens, isSyntax];