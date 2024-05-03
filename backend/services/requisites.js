const [toTokens, isSyntax] = require("./tokenizer.js");
const Symbols = require("./symbols.js");

class Node {
  #value;
  #left;
  #right;

  constructor(value) {
    this.#value = value;
    this.#left = null;
    this.#right = null;
  }

  get value() {
    return this.#value;
  }
  get left() {
    return this.#left;
  }
  get right() {
    return this.#right;
  }

  set value(value) {
    this.#value = value;
  }
  set left(n) {
    this.#left = n;
  }
  set right(n) {
    this.#right = n;
  }
}

class RequisiteTree {
  #head;
  constructor() {
    this.#head = null;
  }

  get head() {
    return this.#head;
  }

  set head(n) {
    this.#head = n;
  }
}

/**
 * Returns whether the courses that have been taken satisfy the requirements in the requisite tree.
 * @param {RequisiteTree} prTree Requisite Tree object representing the prerequisites of a course.
 * @param {list[str]} pr List of strings representing all courses that have been taken.
 */
const checkPrerequisites = (prTree, pr) => {
  if (!prTree.head) {
    return true;
  }
};
const checkCorequisites = (crTree, cr) => {
  if (!crTree.head) {
    return true;
  }
};

const createRequisiteTree = (str) => {
  const words = toTokens(str);

  let parenDepth = 0;
  let treeDepth = 0;
  let rt = new RequisiteTree();
  let currNode;
  words.forEach((token) => {
    currNode = new Node(token);
    switch (token) {
      case Symbols.L_PAREN:
        parenDepth++;
      case Symbols.R_PAREN:
        parenDepth--;
      case Symbols.OR:
      case Symbols.AND:
      default:
        if (!head) {
          head = new Node(token);
        }
    }
  });
};

// TESTED
function _evalTokens(rTokens, coursesTaken) {
  let newTokens = [];
  let newItem;
  rTokens.forEach((token) => {
    newItem = token;
    if (!isSyntax(token)) {
      let taken = coursesTaken.some((course) => {
        return _equalWithoutSpaces(token, course);
      });
      newItem = taken;
    }
    newTokens.push(newItem);
  });
  return newTokens;
}

// TESTED
function _equalWithoutSpaces(input1, input2) {
  let s1 = input1.replace(/\s+/g, "");
  let s2 = input2.replace(/\s+/g, "");
  return s1 === s2;
}

let tokens = toTokens("( AC ENG 20A OR PLACEMENT EXAM or authorization )");
let newTokens = _evalTokens(tokens, ["ACENG20A"]);
console.log(newTokens);

// '(',
// 'AC ENG 20A',
// 'OR',
// 'PLACEMENT EXAM',
// 'OR',
// 'AUTHORIZATION',
// ')'

module.exports = createRequisiteTree;
