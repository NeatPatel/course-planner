const [toTokens, isSyntax] = require("./tokenizer.js");
const [Symbols] = require("./symbols.js");

// Separate strings into array of sentences by periods.
const strToClauses = (str) => {
  const trimmed = str.trim();
  const regex = /(?<!\b(Ph\.D|M\.S|B\.S))\. (?!\d)/;
  const clauses = trimmed.split(regex);
  const cLen = clauses.length;
  for (let i = 0; i < cLen; i++) {
    if (typeof clauses[i] === "undefined") {
      clauses.splice(i, 1);
    }
  }
  return clauses;
};

// TESTED
const evalTokens = (rStr, coursesTaken) => {
  let currToken;
  let taken;
  let rTokens = toTokens(rStr);
  rLen = rTokens.length;

  for (let i = 0; i < rLen; i++) {
    currToken = rTokens[i];
    if (!isSyntax(currToken)) {
      taken = coursesTaken.some((course) => {
        return _equalIgnoreCaseSpace(currToken, course);
      });
      rTokens[i] = taken;
    } else if (currToken === Symbols.OR) {
      rTokens[i] = "||";
    } else if (currToken === Symbols.AND) {
      rTokens[i] = "&&";
    }
  }
  let boolStr = rTokens.join(" ");
  return eval(boolStr);
};

// TESTED
function _equalIgnoreCaseSpace(input1, input2) {
  let s1 = input1.replace(/\s+/g, "");
  let s2 = input2.replace(/\s+/g, "");
  return s1.toLowerCase() === s2.toLowerCase();
}

// let tokens = toTokens("( AC ENG 20A AND PLACEMENT EXAM AND authorization )");
// let result = evalTokens(tokens, ["ACENG20A", 'PLACEMENTEXAM', 'authorization']);
// console.log(tokens);
// console.log("Result: " + result);

module.exports = [evalTokens, strToClauses];
