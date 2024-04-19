
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

const Symbols = Object.freeze({
    L_PAREN: "(",
    R_PAREN: ")",
    OR: "or",
    AND: "and",
});

/**
 * Turns a string of prerequisites or corequisites into tokens.
 * @param  {string} str Requisite string to turn into tokens.
 * @returns {list}     
 */
const toRequisiteTokens = (str) => {
    str = str.trim()

    let resultingTokens = [];

    const strlen = str.length;
    let wordStartIndex = 0;     // Words are separated by whitespaces
    let tokenStartIndex = 0;    // Tokens are (, ), and, or, <course>
    for (let i = 0; i < strlen; i++) {
        if (str[i] === ' ') {
            let current_token = str.split(wordStartIndex, i)
            if (symbolExists(current_token)) {    // if symbol exists
                
                tokenStartIndex = i + 1;
            } else {                // if symbol does not exist
                
            }
            wordStartIndex = i + 1;
        } else {

        }
        // "ICS 6B or ( ICS 45C and ICS 51 )  "
    }
}

/**
 * Returns whether a string exists in the symbols enum.
 * @param   {string} str String to check whether it is a symbol.
 * @returns {boolean}    Whether the string is a valid Symbol.
 */
const symbolExists = (str) => {
    str = str.toLowerCase();
    return Object.values(Symbols).includes(str);
}