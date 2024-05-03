const toTokens = require("./tokenizer.js");

class Node {
  #value;
  #left;
  #right;

  constructor(value) {
    this.#value = value;
    this.#left = null;
    this.#right = null;
  }

  get value() { return this.#value; }
  get left() { return this.#left; }
  get right() { return this.#right; }

  set value(value) { this.#value = value; }
  set left(n) { this.#left = n; }
  set right(n) { this.#right = n; }
}

class RequisiteTree {
    #head;
    constructor() {
        this.#head = null;
    }

    get head() { return this.#head; }

    set head(n) { this.#head = n; }
}

const createRequisiteTree = (str) => {
    const words = toTokens(str);
    
    let parenDepth = 0;
    let treeDepth = 0;
    let rt = new RequisiteTree();

   
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
