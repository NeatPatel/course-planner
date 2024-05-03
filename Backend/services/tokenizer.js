/*

EXAMPLE PREREQ STRINGS





Prerequisites vary.

Satisfactory completion of the Lower-Division Writing requirement.

PLACEMENT EXAM or authorization



( AC ENG 20A OR PLACEMENT EXAM or authorization )

I&C SCI 6B AND I&C SCI 6D AND ( MATH 2B OR AP CALCULUS BC ) AND ( CSE 46 OR I&C SCI 46 )
AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )

( PSYCH 7A OR ANTHRO 2A OR PSY BEH 9 OR AP PSYCHOLOGY OR ( ( PSYCH 9C OR PSY BEH 11C )
AND ( PSYCH 9B OR PSY BEH 11B ) AND ( PSYCH 9A OR PSY BEH 11A ) ) )




*/

const Symbols = require('./symbols.js');
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
 * Turns a prerequisite_text string into an array of tokens.
 * @param   {string} str String to be split into tokens.
 * @returns {array}      Array of tokens.
 */
const _toWords = (str) => {
  let words = str.toUpperCase().split(" ");
  filteredWords = words.filter((e) => e != "");
  return filteredWords;
};

/**
 * Returns whether a string exists in the symbols enum.
 * @param   {string} str String to check whether it is a symbol.
 * @returns {boolean}    Whether the string is a valid Symbol.
 */
const isSyntax = (str) => {
  return Object.values(Symbols).includes(str);
};

module.exports = [toTokens, isSyntax];