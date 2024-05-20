// This module handles all operations with tree objects.

const { fetchPRTree } = require("./api-service.js");



/**
 * 
 * "{\"AND\":[\"I&C SCI 51\",\"I&C SCI 6B\",\"I&C SCI 6D\",{\"OR\":[\"CSE 43\",\"I&C SCI 33\"]}]}"
 * 
 * {
 *     \"AND\": [
 *         \"I&C SCI 51\",
 *         \"I&C SCI 6B\",
 *         \"I&C SCI 6D\",
 *         {
 *             \"OR\": [
 *                 \"CSE 43\",
 *                 \"I&C SCI 33\"
 *             ]
 *         }
 *     ]
 * }
 */

/**
 * pr has a     header ("AND" OR "OR")
 * also has a   list (courses | tree)
 */

// DOES NOT ACCOUNT FOR ITEMS LIKE:
// PLACEMENT EXAM or authorizaiton
// authorization
// ACT MATH
// AP Calculus AB

class Expr {
    #operator;
    #items;     // Can either be a course or another expression

    constructor(operator = null, items = null) {
        this.#operator = operator;
        this.#items = items;
    }

    initFromStr(str) {

    }
}

function getOperation(str) {
    return str.substr(2, str.indexOf(':')-3)
}

function getItems(str) {
    let itemStr = str.substr(str.indexOf('[')+1, str.lastIndexOf(']')-7)
    const itemStrLen = itemStr.length
    let termStart = 0;
    let items = []
    let i = 0;
    for ( ; i < itemStrLen; i++) {
        if (itemStr[i] == ',') {
            items.push(itemStr.substr(termStart, i))
            termStart = i + 1
        } else {
            if (i-1 == termStart && itemStr[i] == '{') {
                // advance to character after the next comma
            }
        }
    }
    items.push(itemStr.substr(termStart, i))
    return items
}

function getExprLen(str) {
    const strlen = str.length
    let i = 1;
    let depth = 1;
    for ( ; depth == 0; i++) {
        if (str[i] == '{') {
            depth++
        } else if (str[i] == '}') {
            depth--
        }
    }
}


let a = getItems("{\"AND\":[\"I&C SCI 51\",\"I&C SCI 6B\",\"I&C SCI 6D\",{\"OR\":[\"CSE 43\",\"I&C SCI 33\", {\"AND\":[\"I&C SCI 51\",\"I&C SCI 6B\",\"I&C SCI 6D\",{\"OR\":[\"CSE 43\",\"I&C SCI 33\"]}]}]}]}")
console.log(a)


console.log(getExprLen("{\"AND\":[\"I&C SCI 51\",\"I&C SCI 6B\",\"I&C SCI 6D\",{\"OR\":[\"CSE 43\",\"I&C SCI 33\"]}]}]}]}"))