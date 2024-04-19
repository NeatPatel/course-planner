// This class represents the prerequisites for a class. 
class Requisites {
    #reqTree;

    constructor(reqString) {
        this.#reqTree = initReqs(reqString);
    }

    /**
     * Takes a requisite string and returns a tree of requisite Course id's. 
     * @param   {string} str Prerequisite or corequisite text.
     * @returns {list}      Tree of requirements in list format.
     */
    initReqs(str) {

    }

    get reqTree() { return this.#reqTree; }
}

module.exports = Requisites;