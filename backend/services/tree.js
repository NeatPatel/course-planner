// This module handles all operations with tree objects.

const convertToTree = (str) => {
  return JSON.parse(str);
};

const evalTree = async (treeObj, coursesTaken) => {
    if (!treeObj) {
        return true
    }
    const isAnd = 'AND' in treeObj
    const operator = isAnd ? 'AND' : 'OR';
    
    const reqs = treeObj[operator]
    // and (TRUE): if one is FALSE, return FALSE
    //  or (FALSE): if one is TRUE , return TRUE
    const reqLen = reqs.length
    for (let i = 0; i < reqLen; i++) {
        let req = reqs[i]
        let reqTaken;
        if (typeof req === 'string') {
            reqTaken = _courseInList(req, coursesTaken)
        } else {
            reqTaken = await evalTree(req, coursesTaken)
        }
        if (reqTaken != isAnd) {
            return !isAnd
        }
    }
    return isAnd
};

function _courseInList(course, l) {
    const listLen = l.length
    for (let i = 0; i < listLen; i++) {
        if (_equalIgnoreSpace(course, l[i])) {
            return true;
        }
    }
    return false
}

function _equalIgnoreSpace(input1, input2) {
    let s1 = input1.split(' ').join('')
    let s2 = input2.split(' ').join('')
    return s1 === s2
}

module.exports = { evalTree, convertToTree }
