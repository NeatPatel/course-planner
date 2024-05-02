const toTokens = require("./tokenizer.js");

class Node {
  #value;
  #left;
  #right;

  constructor(value) {
    this.#value = value;
  }
}

const createRequisiteTree = (str) => {
    const words = toTokens(str);
    
    let depth = 0;
}

const checkPrerequisites = (prTree, pr) => {

}

const checkCorequisites = (crTree, cr) => {

}

console.log(toTokens("( AC ENG 20A OR PLACEMENT EXAM or authorization )"));

// '(',
// 'AC ENG 20A',
// 'OR',
// 'PLACEMENT EXAM',
// 'or',
// 'authorization',
// ')'

module.exports = createRequisiteTree;
