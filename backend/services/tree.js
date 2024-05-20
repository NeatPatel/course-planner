// This module handles all operations with tree objects.

const { fetchPRTree } = require("./api-service.js");
const util = require('util')



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
    #pair;    // operation: list

    constructor(pair = null) {
        this.#pair = null
    }

    initFromStr(str) {
        let operation = getOperation(str);
        let items = getItems(str);
        let result = {}
        result[operation] = items
        this.#pair = result
    }

    get pair() { return this.#pair }
}

function getOperation(str) {
    return str.substring(2, str.indexOf(':')-1)
}

function getItems(str) {
    let itemStr = str.substring(str.indexOf('[')+1, str.lastIndexOf(']'))
    const itemStrLen = itemStr.length
    let termStart = 0;
    let items = []
    let i = 0;
    for ( ; i < itemStrLen; i++) {
        console.log('i: ' + i)
        if (itemStr[i] == ',') {     // If comma, store previous item in list
            let currItem = itemStr.substring(termStart+1, i-1);
            console.log(currItem)
            if (currItem[currItem.length-1] == '}') {
                let e = new Expr()
                e.initFromStr(s.substring(0, exprLen))
                currItem = e.pair
                console.log(true)
            }
            items.push(currItem)
            termStart = i + 1
        } else {              
            if (i == termStart && itemStr[i] == '{') {
                let s = itemStr.substring(i, itemStrLen)
                let exprLen = getExprLen(s)
                
                i += exprLen
            }
        }
    }
    items.push(itemStr.substring(termStart, i))
    return items
}

function getExprLen(str) {
    let count = 1;
    let depth = 1;
    for (let i = 1; depth >= 1; i++) {
        if (str[i] == '{') {
            depth++
        } else if (str[i] == '}') {
            depth--
        }
        count++;
    }
    return count;
}

let e = new Expr()
e.initFromStr("{\"AND\":[\"I&C SCI 51\",\"I&C SCI 6B\",\"I&C SCI 6D\",{\"OR\":[\"CSE 43\",\"I&C SCI 33\",{\"AND\":[\"I&C SCI 51\",\"I&C SCI 6B\",\"I&C SCI 6D\",{\"OR\":[\"CSE 43\",\"I&C SCI 33\"]}]}]}]}")
console.log(e.pair)

let j = JSON.parse("{\"AND\":[\"I&C SCI 51\",\"I&C SCI 6B\",\"I&C SCI 6D\",{\"OR\":[\"CSE 43\",\"I&C SCI 33\",{\"AND\":[\"I&C SCI 51\",\"I&C SCI 6B\",\"I&C SCI 6D\",{\"OR\":[\"CSE 43\",\"I&C SCI 33\"]}]}]}]}")
console.log(util.inspect(j, false, null, true /* enable colors */))