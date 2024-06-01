const fs = require('node:fs');

const [evalTokens, strToClauses] = require('../requisites.js')

const data = {
    "data": {
        "allCourses": [
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " AC ENG 23A or AC ENG 23B"
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": "( AC ENG 20A OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( AC ENG 20B OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " AC ENG 20C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " AC ENG 23A or AC ENG 23B"
            },
            {
                "prerequisite_text": " AC ENG 23A or AC ENG 23B or AC ENG 23C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ANATOMY 202A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ANATOMY 203A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ANTHRO 2A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ECON 10A OR PSYCH 10A OR ANTHRO 10A OR SOCIOL 10A OR SOC SCI 10A )"
            },
            {
                "prerequisite_text": "( ECON 10B OR PSYCH 10B OR ANTHRO 10B OR SOCIOL 10B OR SOC SCI 10B ) AND ( ECON 10A OR PSYCH 10A OR ANTHRO 10A OR SOCIOL 10A OR SOC SCI 10A )"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": "( ANTHRO 2A OR ANTHRO 2B )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " One course in general science, anthropology, economics, geography, or sociology."
            },
            {
                "prerequisite_text": " ANTHRO 2A or ANTHRO 2B or ANTHRO 2C"
            },
            {
                "prerequisite_text": " ANTHRO 2A or ANTHRO 2B or ANTHRO 2C or ANTHRO 2D"
            },
            {
                "prerequisite_text": " ANTHRO 2A or ANTHRO 2B or ANTHRO 2D"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ANTHRO 2A OR ANTHRO 2B OR ANTHRO 2C OR ANTHRO 2D )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ANTHRO 2A and (ANTHRO 2B or ANTHRO 2C or ANTHRO 2D)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( PSYCH 7A OR ANTHRO 2A OR PSY BEH 9 OR AP PSYCHOLOGY OR ( ( PSYCH 9C OR PSY BEH 11C ) AND ( PSYCH 9B OR PSY BEH 11B ) AND ( PSYCH 9A OR PSY BEH 11A ) ) )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ANTHRO 2A or ANTHRO 2B or ANTHRO 2D"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ANTHRO 2A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ANTHRO 202A"
            },
            {
                "prerequisite_text": " ANTHRO 202B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ANTHRO 215A"
            },
            {
                "prerequisite_text": " ANTHRO 215A"
            },
            {
                "prerequisite_text": " ANTHRO 215B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ANTHRO 199"
            },
            {
                "prerequisite_text": " ANTHRO 199 and ANTHRO H190A"
            },
            {
                "prerequisite_text": " ANTHRO H190B and ANTHRO 199. Anthropology Honors ONLY."
            },
            {
                "prerequisite_text": " ANTHRO H190C and ANTHRO 199. Anthropology Honors ONLY. Satisfactory completion of the Lower-Division Writing requirement. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": " ARABIC 1A. ARABIC 1A with a grade of C or better. Placement into ARABIC 1B is also accepted."
            },
            {
                "prerequisite_text": " ARABIC 1B or ARABIC S1AB. ARABIC 1B with a grade of C or better. ARABIC S1AB with a grade of C or better. Placement is also accepted."
            },
            {
                "prerequisite_text": " ARABIC 1C or ARABIC S1BC. ARABIC 1C with a grade of C or better. ARABIC S1BC with a grade of C or better. Placement into ARABIC 2A is also accepted."
            },
            {
                "prerequisite_text": " ARABIC 2A. ARABIC 2A with a grade of C or better. Placement into ARABIC 2B is also accepted."
            },
            {
                "prerequisite_text": " ARABIC 2B. ARABIC 2B with a grade of C or better. Placement into ARABIC 2C is also accepted. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Placement into ARMN 1A."
            },
            {
                "prerequisite_text": "( ARMN 1A OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " ARMN 1B. ARMN 1B with a grade of C or better. Placement into ARMN 1C is also accepted."
            },
            {
                "prerequisite_text": "( ARMN 1C OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( ARMN 2A OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( ARMN 2B OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " ART 9A. Lower-division writing strongly recommended."
            },
            {
                "prerequisite_text": "( ART 11A OR ART STU 11A ) AND ( ART 9A OR ART STU 9A ) AND LOWER DIVISION WRITING"
            },
            {
                "prerequisite_text": " ART 65A. Recommended: ART 11B."
            },
            {
                "prerequisite_text": "( ART 65A OR ART STU 65A )"
            },
            {
                "prerequisite_text": "( ART 81A OR ART STU 81A ) AND ( ART 81B OR ART STU 81B )"
            },
            {
                "prerequisite_text": "( ART 1B OR ART 91 OR ART 128 OR ART 81A OR ART STU 1B OR ART STU 91 OR ART STU 128 OR ART STU 81A )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ART 65E OR ART 110A OR ART STU 110A )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ART 9A OR ARTSTU 9A ) AND ( ART 11A OR ARTSTU 11A ) AND LOWER DIVISION WRITING"
            },
            {
                "prerequisite_text": " ART 9A. Recommended: Satisfactory completion of the upper-division writing requirement."
            },
            {
                "prerequisite_text": "( ART 9A OR ART STU 9A )"
            },
            {
                "prerequisite_text": "( ART 9A OR ART STU 9A )"
            },
            {
                "prerequisite_text": "( ART 9A OR ART STU 9A )"
            },
            {
                "prerequisite_text": "( ART 9A OR ART STU 9A )"
            },
            {
                "prerequisite_text": " ART 9A. Satisfactory completion of the Upper-Division Writing requirement is recommended."
            },
            {
                "prerequisite_text": " ART 1A or ART 71A or ART 71B or ART 152A or ART 152B or ART 152C or ART 152D or ART 152E or ART 190B. Recommended: Satisfactory completion of the Upper-Division Writing requirement."
            },
            {
                "prerequisite_text": "( ART 9A OR ART STU 9A )"
            },
            {
                "prerequisite_text": "( ART 9A OR ART STU 9A )"
            },
            {
                "prerequisite_text": " ART 9A. Recommended: Satisfactory completion of the Upper-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ART 65A OR ART STU 65A )"
            },
            {
                "prerequisite_text": " ART 81A and ART 81B"
            },
            {
                "prerequisite_text": "( ART 81A OR ART STU 81A ) AND ( ART 81B OR ART STU 81B )"
            },
            {
                "prerequisite_text": "ART 106C AND ( ART 65A OR ART STU 65A )"
            },
            {
                "prerequisite_text": " ART 40 and ART 9A"
            },
            {
                "prerequisite_text": " ART 81A and ART 81B"
            },
            {
                "prerequisite_text": " (ART 20A or ART 30A or ART 40 or ART 51 or ART 65A or ART 71A or ART 81A or ART 91) and ART 9A"
            },
            {
                "prerequisite_text": "( ART 30B OR ART STU 30B )"
            },
            {
                "prerequisite_text": "( ART 20B OR ART STU 20B ) AND ( ART 20A OR ART STU 20A )"
            },
            {
                "prerequisite_text": "( ART 20B OR ART STU 20B )"
            },
            {
                "prerequisite_text": " ART 150F"
            },
            {
                "prerequisite_text": " ART 40"
            },
            {
                "prerequisite_text": " ART 71B"
            },
            {
                "prerequisite_text": "( ART 71B OR ART STU 71B )"
            },
            {
                "prerequisite_text": " ART 71B"
            },
            {
                "prerequisite_text": "( ART 71B OR ART STU 71B )"
            },
            {
                "prerequisite_text": " ART 71B"
            },
            {
                "prerequisite_text": "( ART 81A OR ART STU 81A ) AND ( ART 81B OR ART STU 81B )"
            },
            {
                "prerequisite_text": " ART 91 or ART 109 or ART 128"
            },
            {
                "prerequisite_text": "( ART 51 OR ART STU 51 )"
            },
            {
                "prerequisite_text": "( ART 81A OR ART STU 81A ) AND ( ART 81B OR ART STU 81B )"
            },
            {
                "prerequisite_text": " ART 150 or ART 150C or ART 151 or ART 152A or ART 152B or ART 152C or ART 152D or ART 152E or ART 152F or ART 153 or ART 166A or ART 190 or ART 190B or ART 190C"
            },
            {
                "prerequisite_text": " ART 1A and ART 1B and ART 1C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ART 1C OR ART STU 1C ) AND ( ART 71A OR ART STU 71A ) AND ( ART 1B OR ART STU 1B ) AND ( ART 71B OR ART STU 71B ) AND ( ART 1A OR ART STU 1A ) AND SENIOR STANDING ONLY"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ART 20A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ART 210"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ART 210 and ART 215 and ART 220"
            },
            {
                "prerequisite_text": " ART 210 and ART 215 and ART 220"
            },
            {
                "prerequisite_text": " ART 210 and ART 215 and ART 220 and ART 230 and ART 240 and ART 261 and ART 262"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ART 280A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ART 30A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ART 12A OR ARTS 11 ) AND ( ART 12B OR ARTS 12 )"
            },
            {
                "prerequisite_text": " ART 50A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ART 65A OR ART STU 65A )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ART 71A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ART 81A OR ART STU 81A )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: ART HIS 190W."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Background in Art History or Legal Studies."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ARTS 11 AND ARTS 12 AND ARTS 50 AND ARTS 60"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Basic familiarity with programming is recommended."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BANA 298A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BATS 209A"
            },
            {
                "prerequisite_text": " BATS 209A"
            },
            {
                "prerequisite_text": " BATS 209A or STAT 250"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MOL BIO 203 or MOL BIO 204 or NEURBIO 206"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 99 or BIO SCI 190. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": "( PHY SCI 5 OR BIO SCI 14 ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " BIO SCI 14 or PHY SCI 5"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 191A or SOCECOL 186A or EARTHSS 190A"
            },
            {
                "prerequisite_text": " BIO SCI 191B or EARTHSS 190B or SOCECOL 186B. BIO SCI 191B or EARTHSS 190B or SOCECOL 186B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 193A"
            },
            {
                "prerequisite_text": " BIO SCI 193B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 94"
            },
            {
                "prerequisite_text": " BIO SCI 94"
            },
            {
                "prerequisite_text": " BIO SCI 94"
            },
            {
                "prerequisite_text": " BIO SCI 199"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 98"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 45 or PUBHLTH 80"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 93 or BIO SCI H93"
            },
            {
                "prerequisite_text": " BIO SCI 94"
            },
            {
                "prerequisite_text": " BIO SCI 97 or BIO SCI H97 and CHEM 51B"
            },
            {
                "prerequisite_text": " BIO SCI 98"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI 97 or BIO SCI H97"
            },
            {
                "prerequisite_text": " (BIO SCI 100 or BIO SCI 108) and (BIO SCI D103 or BIO SCI D104 or BIO SCI D105)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSICS 3C or PHYSICS 7D"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI D103 or BIO SCI D104"
            },
            {
                "prerequisite_text": " BIO SCI D103"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI 97 or BIO SCI H97"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI D103 or BIO SCI D104"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI D103 or BIO SCI D104"
            },
            {
                "prerequisite_text": " BIO SCI E109 or PHRMSCI 120. BIO SCI E109 with a grade of C or better. PHRMSCI 120 with a grade of C or better"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": "( BIO SCI 94 OR BIO SCI H94 ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " (BIO SCI 100 or BIO SCI 108) and BIO SCI E106. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (BIO SCI 93 or BIO SCI H93) and CHEM 1C"
            },
            {
                "prerequisite_text": " (BIO SCI 100 or BIO SCI 108) and (BIO SCI E109 or (BME 120 and BME 121)). "
            },
            {
                "prerequisite_text": " (BIO SCI 100 or BIO SCI 108) and BIO SCI E106. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " (BIO SCI E109 or PHRMSCI 120) and BIO SCI E112L and BIO SCI E183"
            },
            {
                "prerequisite_text": " (BIO SCI E109 or PHRMSCI 120) and BIO SCI E112L and BIO SCI E183"
            },
            {
                "prerequisite_text": " (BIO SCI E109 or PHRMSCI 120) and BIO SCI E112L and BIO SCI E183"
            },
            {
                "prerequisite_text": " BIO SCI E106 or EARTHSS 51 or EARTHSS 60A or CHEM 51C"
            },
            {
                "prerequisite_text": " BIO SCI 94 or BIO SCI 97 or BIO SCI H94 or BIO SCI H97"
            },
            {
                "prerequisite_text": " BIO SCI 94 or BIO SCI H94"
            },
            {
                "prerequisite_text": " BIO SCI E109 or PHRMSCI 120"
            },
            {
                "prerequisite_text": "( BIO SCI 96 OR BIO SCI 97 OR BIO SCI E106 ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " EARTHSS 51 or BIO SCI 94 or (EARTHSS 60A and EARTHSS 60C)"
            },
            {
                "prerequisite_text": " BIO SCI 94 and CHEM 51A. CHEM 51A with a grade of C- or better"
            },
            {
                "prerequisite_text": " (BIO SCI E106 or PHRMSCI 120 or BIO SCI E109) and (BIO SCI 100 or BIO SCI 108)"
            },
            {
                "prerequisite_text": " BIO SCI E106"
            },
            {
                "prerequisite_text": " BIO SCI M122"
            },
            {
                "prerequisite_text": " BIO SCI 98 and (BIO SCI E109 or PHRMSCI 120)"
            },
            {
                "prerequisite_text": " BIO SCI E109 or PHRMSCI 120"
            },
            {
                "prerequisite_text": " BIO SCI E109 or PHRMSCI 120"
            },
            {
                "prerequisite_text": " (BIO SCI 100 or BIO SCI 108) and BIO SCI E106"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " BIO SCI E106"
            },
            {
                "prerequisite_text": " (EARTHSS 70A and EARTHSS 70B) or (EARTHSS 51 and EARTHSS 53 and EARTHSS 55)"
            },
            {
                "prerequisite_text": " BIO SCI E109 or PHRMSCI 120"
            },
            {
                "prerequisite_text": " BIO SCI E106"
            },
            {
                "prerequisite_text": " BIO SCI 93 or BIO SCI H93"
            },
            {
                "prerequisite_text": " BIO SCI 97 or BIO SCI H97"
            },
            {
                "prerequisite_text": " BIO SCI E106"
            },
            {
                "prerequisite_text": " BIO SCI 94 or BIO SCI H94"
            },
            {
                "prerequisite_text": "BIO SCI 94 AND BIO SCI E160L AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": "BIO SCI 194S AND ( BIO SCI 100 OR BIO SCI 108 ) AND SENIOR STANDING ONLY AND LOWER DIVISION WRITING AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " (BIO SCI 100 or BIO SCI 108) and BIO SCI E106. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " BIO SCI E106"
            },
            {
                "prerequisite_text": "( BIO SCI 96 OR BIO SCI E106 ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": "( BIO SCI 94 OR BIO SCI H94 ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " (BIO SCI 100 or BIO SCI 108) and BIO SCI E179"
            },
            {
                "prerequisite_text": " BIO SCI 94"
            },
            {
                "prerequisite_text": " BIO SCI 98 and (BIO SCI E109 or PHRMSCI 120)"
            },
            {
                "prerequisite_text": " BIO SCI E106"
            },
            {
                "prerequisite_text": " BIO SCI E106"
            },
            {
                "prerequisite_text": " BIO SCI E106 and (BIO SCI 100 or BIO SCI 108). Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " BIO SCI E109 or PHRMSCI 120"
            },
            {
                "prerequisite_text": " BIO SCI E109 or PHRMSCI 120"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( BIO SCI 106 OR BIO SCI E106 ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 93 or BIO SCI H93"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI 99 and (BIO SCI 100 or BIO SCI 108)"
            },
            {
                "prerequisite_text": " (BIO SCI 93 or BIO SCI H93) and CHEM 1C. CHEM 1C with a grade of C- or better"
            },
            {
                "prerequisite_text": " BIO SCI 99 and (BIO SCI M114L or BIO SCI M116L)"
            },
            {
                "prerequisite_text": " BIO SCI 99 and (BIO SCI 100 or BIO SCI 108)"
            },
            {
                "prerequisite_text": " BIO SCI 99 and (BIO SCI 100 or BIO SCI 108)"
            },
            {
                "prerequisite_text": " BIO SCI M121"
            },
            {
                "prerequisite_text": " BIO SCI D103"
            },
            {
                "prerequisite_text": " BIO SCI 98"
            },
            {
                "prerequisite_text": " (BIO SCI 100 or BIO SCI 108) and BIO SCI M116L and BIO SCI M121"
            },
            {
                "prerequisite_text": " BIO SCI 98"
            },
            {
                "prerequisite_text": "( MATH 7 OR MATH 2D OR MATH 2J OR STATS 7 OR STATS 8 OR BIO SCI 7 ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI M121 or BIO SCI M124A. Recommended: BIO SCI M122."
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": "BIO SCI 100 AND BIO SCI 194S AND ( BIO SCI D111L OR BIO SCI M114L OR BIO SCI M116L OR BIO SCI M118L ) AND LOWER DIVISION WRITING AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " BIO SCI M121 or BIO SCI M122 or BIO SCI M124A or BIO SCI M124B or BIO SCI M143"
            },
            {
                "prerequisite_text": " MATH 2B or MATH 5B"
            },
            {
                "prerequisite_text": " BIO SCI 98"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " CHEM 51A"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI 98 and BIO SCI 99. BIO SCI 98 with a grade of B or better. BIO SCI 99 with a grade of B or better"
            },
            {
                "prerequisite_text": " BIO SCI 98"
            },
            {
                "prerequisite_text": " BIO SCI 98"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " (BIO SCI 100 or BIO SCI 108) and (BIO SCI N110 or BIO SCI N115A)"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI N115A"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A or PSYCH 9A or PSCI 11A"
            },
            {
                "prerequisite_text": " BIO SCI 35 or BIO SCI N110 or BIO SCI N115A or PSY BEH 115D or (PSYCH 9A and PSYCH 9B and PSYCH 9C)"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": "( BIO SCI 93 OR BIO SCI H93 ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": "( BIO SCI 93 OR BIO SCI H93 ) AND ( BIO SCI 100 OR BIO SCI 108 ) AND LOWER DIVISION WRITING AND SCHOOL OF BIO SCI ONLY AND SENIOR STANDING ONLY AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " BIO SCI M121"
            },
            {
                "prerequisite_text": " BIO SCI 93 or BIO SCI H93"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " PSYCH 160A or BIO SCI 93 or BIO SCI H93"
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A"
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A"
            },
            {
                "prerequisite_text": " BIO SCI 93 or BIO SCI H93"
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A or BIO SCI N152"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " BIO SCI 35 or BIO SCI N110 or BIO SCI N115A"
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A"
            },
            {
                "prerequisite_text": "( PSCI 11B OR PSYCH 9B OR BIO SCI 35 OR PSY BEH 11B OR BIO SCI N110 ) AND ( PSCI 9 OR PSCI 11A OR PSYCH 7A OR PSYCH 9A OR PSY BEH 9 OR PSY BEH 11A ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": "( PSCI 9 OR PSYCH 7A OR PSY BEH 9 OR BIO SCI 35 OR BIO SCI N110 OR ( ( PSYCH 9A OR PSY BEH 11A ) AND ( PSYCH 9B OR PSY BEH 11B OR BIO SCI N115A ) ) ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": "( PSCI 9 OR PSCI 11A OR PSYCH 7A OR PSYCH 9A OR PSY BEH 9 OR BIO SCI 99 OR PSY BEH 11A ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A"
            },
            {
                "prerequisite_text": "( PSCI 11A OR PSYCH 9A OR PSY BEH 11A OR BIO SCI N110 OR BIO SCI N115A ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A"
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "BME 60B AND BME 60C AND MATH 3A AND MATH 3D AND PHYSICS 7C"
            },
            {
                "prerequisite_text": "BME 110A"
            },
            {
                "prerequisite_text": "BME 110B"
            },
            {
                "prerequisite_text": "CHEM 1C AND ( BME 50B OR BIO SCI 99 )"
            },
            {
                "prerequisite_text": "BME 50A AND BME 50B AND MATH 3D AND ( CHEM 1C OR CHEM H2C )"
            },
            {
                "prerequisite_text": "MATH 3D AND PHYSICS 7D AND ( BME 60B OR EECS 10 OR EECS 12 OR ENGRCEE 20 OR ENGRMAE 10 )"
            },
            {
                "prerequisite_text": "MATH 3D AND ( BME 60B OR EECS 10 OR EECS 12 OR ENGRCEE 20 OR ENGRMAE 10 )"
            },
            {
                "prerequisite_text": "BME 60B AND MATH 3D AND STATS 8 AND ( MATH 3A OR I&C SCI 6N )"
            },
            {
                "prerequisite_text": " MATH 2D or MATH 3A or STAT 7 or STAT 8"
            },
            {
                "prerequisite_text": "( PHYSICS 3C OR PHYSICS 7D )"
            },
            {
                "prerequisite_text": "BME 130 AND ( BME 135 OR BIO SCI D130 )"
            },
            {
                "prerequisite_text": "( BME 130 OR EECS 50 OR EECS 150 )"
            },
            {
                "prerequisite_text": "MATH 3D AND STATS 8 AND ( MATH 3A OR I&C SCI 6N )"
            },
            {
                "prerequisite_text": "BME 130 AND BME 60A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "BME 110C"
            },
            {
                "prerequisite_text": "BME 111"
            },
            {
                "prerequisite_text": "MATH 3D AND ( BME 60B OR ENGRCEE 20 ) AND ( MATH 3A OR I&C SCI 6N )"
            },
            {
                "prerequisite_text": "BME 111 AND BME 121 AND BME 150 AND ( BME 50B OR BIO SCI 99 )"
            },
            {
                "prerequisite_text": " (BME 50A and BME 50B) or (BIOL 97 and BIOL 98 and BIOL 99)"
            },
            {
                "prerequisite_text": "BME 120 AND BME 130 AND BME 50B"
            },
            {
                "prerequisite_text": "BME 160"
            },
            {
                "prerequisite_text": " (BME 60B or MAE 10 or EECS 10) and (BME 60C or MAE 52 or EECS 31L) and (BME 140 or MAE 106 or EECS 170B)"
            },
            {
                "prerequisite_text": "( BME 60C OR EECS 31L OR ENGRMAE 52 ) AND ( BME 60B OR EECS 10 OR ENGRMAE 10 ) AND ( BME 140 OR EECS 170B OR ENGRMAE 106 )"
            },
            {
                "prerequisite_text": "BME 180A"
            },
            {
                "prerequisite_text": "BME 180B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BME 220 and BME 221"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BME 224 or BME 225"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "BME 1 AND ( CHEM 1C OR CHEM H2C )"
            },
            {
                "prerequisite_text": "BME 50A"
            },
            {
                "prerequisite_text": "PHYSICS 7D"
            },
            {
                "prerequisite_text": "MATH 3A"
            },
            {
                "prerequisite_text": "BME 1"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CBE 40C"
            },
            {
                "prerequisite_text": " CHEM 1C and CBE 40C and (PHYS 7D or PHYS 7E)"
            },
            {
                "prerequisite_text": " CHEM 1C and MATH 3D and CBE 40B and CBE 40C and CBE 100. CBE 40B with a grade of C- or better. CBE 40C with a grade of C- or better"
            },
            {
                "prerequisite_text": " CBE 40C and MATH 3D. CBE 40C with a grade of C- or better"
            },
            {
                "prerequisite_text": " CBE 120A. CBE 120A with a grade of C- or better"
            },
            {
                "prerequisite_text": " CBE 120B and CBE 100"
            },
            {
                "prerequisite_text": " CBE 40B and CBE 40C. CBE 40B with a grade of C- or better. CBE 40C with a grade of C- or better"
            },
            {
                "prerequisite_text": " CBE 110 and CBE 120C"
            },
            {
                "prerequisite_text": " CBE 130 and CBE 145 and CBE 140A"
            },
            {
                "prerequisite_text": " CBE 110 and CBE 120B and CBE 120C"
            },
            {
                "prerequisite_text": " CBE 110 and CBE 120C and CBE 130"
            },
            {
                "prerequisite_text": " CBE 150A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CBE 110 and CBE 160 and (CHEM 1C or CHEM H2C) and MATH 3D"
            },
            {
                "prerequisite_text": " CBE 120A and CBE 160"
            },
            {
                "prerequisite_text": " CBE 40C and CBE 105 and MATH 3D"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (CHEM M3C or CHEM 1C or CHEM H2C or CHEM M2C) and MATH 2D"
            },
            {
                "prerequisite_text": " ENGR 54 and (CBE 110 or MSE 165)"
            },
            {
                "prerequisite_text": " (CBE 110 or MSE 165C) and (MSE 141 or MSE 69)"
            },
            {
                "prerequisite_text": " CBE 40B"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CBE 220A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHEM 233 or CBE 276"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PHYSICS 7C AND ( CHEM 1B OR CHEM H2B ) AND ( MATH 2B OR AP CALCULUS BC )"
            },
            {
                "prerequisite_text": " CBE 40A and (MATH 3A or ICS 6N). CBE 40A with a grade of C- or better"
            },
            {
                "prerequisite_text": " MAE 10 and MATH 2D and CBE 40B. CBE 40B with a grade of C- or better"
            },
            {
                "prerequisite_text": " Two courses from CHC/LAT 61 or CHC/LAT 62 or CHC/LAT 63 and two courses from CHC/LAT 110-189."
            },
            {
                "prerequisite_text": "( CHLT 101 OR CHC/LAT 101 ) AND LOWER DIVISION WRITING"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 1 or PUBHLTH 2 or CHC/LAT 61 or CHC/LAT 62 or CHC/LAT 63"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHC/LAT 210A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHC/LAT 211A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHC/LAT 200A or PUBHLTH 246"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHC/LAT H190A"
            },
            {
                "prerequisite_text": " CHC/LAT H190A and CHC/LAT H190B"
            },
            {
                "prerequisite_text": " CHC/LAT H190A and CHC/LAT H190B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (CHEM 51C or CHEM H52C) and (CHEM M3C or CHEM M2C or CHEM 1C or CHEM H2C)"
            },
            {
                "prerequisite_text": " CHEM 51C"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " CHEM 51C or CHEM H52C"
            },
            {
                "prerequisite_text": " CHEM 107 and CHEM 100S"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHEM 51C"
            },
            {
                "prerequisite_text": " CHEM 107"
            },
            {
                "prerequisite_text": " (CHEM 51C or CHEM H52C)"
            },
            {
                "prerequisite_text": "CHEM 128 AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " MATH 2D and (PHYS 7D or PHYS 7E) and (CHEM 5 or (MATH 3D and (EECS 10 or EECS 12 or MAE 10 or ICS 31)) )"
            },
            {
                "prerequisite_text": " (CHEM 132A or CBE 40C) and (PHYS 7D or PHYS 7E). CHEM 132A with a grade of C- or better"
            },
            {
                "prerequisite_text": " CHEM 132B"
            },
            {
                "prerequisite_text": " (CHEM M3C or CHEM 1C or CHEM H2C or CHEM M2C) and MATH 2D"
            },
            {
                "prerequisite_text": " CHEM 133"
            },
            {
                "prerequisite_text": "CHEM 51C AND CHEM 132C AND ( CHEM 131A OR CHEM 132B ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": "( CHEM 51C OR CHEM H52C ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (CHEM 51C or CHEM H52C) and (MATH 2B or AP Calculus BC). AP Calculus BC with a minimum score of 4"
            },
            {
                "prerequisite_text": " CHEM 132A and CHEM 132B and CHEM 132C"
            },
            {
                "prerequisite_text": " CHEM 145A"
            },
            {
                "prerequisite_text": " MATH 3A and (CHEM 132A or PHYS 113A)"
            },
            {
                "prerequisite_text": " CHEM 150 and (CHEM 5 or PHYS 50 or EECS 12)"
            },
            {
                "prerequisite_text": " (CHEM 1C or CHEM M3C or CHEM H2C or CHEM M2C) and (CHEM M3LC or CHEM H2LC)"
            },
            {
                "prerequisite_text": "CHEM 132C AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " (CHEM 51C or CHEM H52C) and (CHEM 51LC or CHEM H52LC or CHEM M52LC) and (CHEM 131A or CHEM 132B or PHMS 171)"
            },
            {
                "prerequisite_text": " CHEM 51C and CHEM 100S and (CHEM 51LC or CHEM H52LC or CHEM M52LC)"
            },
            {
                "prerequisite_text": " CHEM 51A and CHEM 51B and CHEM 51C and (BIOL 98 or CHEM 128)"
            },
            {
                "prerequisite_text": " CHEM 51A and CHEM 51B and CHEM 51C and BIOL 100 and (BIOL 98 or CHEM 128)"
            },
            {
                "prerequisite_text": " CHEM 100S"
            },
            {
                "prerequisite_text": " CHEM 180 or CHEM 199 or PHYS 195 or ESS 199 or CEMS 199 or CEE 199 or MAE 199 or BIOL 199 or PUBH 199. CHEM 180 with a grade of A or better. CHEM 199 with a grade of A or better. PHYS 195 with a grade of A or better. ESS 199 with a grade of A or better. CEMS 199 with a grade of A or better. CEE 199 with a grade of A or better. MAE 199 with a grade of A or better. BIOL 199 with a grade of A or better. PUBH 199 with a grade of A or better. Consent of the instructor is also accepted. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIOL 14 or PS 5"
            },
            {
                "prerequisite_text": " Enrollment requires completion of an application form. Student selection is made by a selection committee. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 5A or MATH 2A or PHYS 7C or CHEM 1X or CHEM 1P or SAT Mathematics or ACT Mathematics or SAT Subject Chemistry or AP Chemistry or AP Calculus AB or AP Calculus BC. CHEM 1P with a grade of C- or better. SAT Mathematics with a minimum score of 600. ACT Mathematics with a minimum score of 27. SAT Subject Chemistry with a minimum score of 700. AP Chemistry with a minimum score of 3. AP Calculus AB with a minimum score of 4. AP Calculus BC with a minimum score of 3"
            },
            {
                "prerequisite_text": " CHEM 1A or ENGR 1A or CHEM H2A or AP Chemistry or CHEM M2A. CHEM 1A with a grade of C- or better. ENGR 1A with a grade of C- or better. CHEM H2A with a grade of C- or better. AP Chemistry with a minimum score of 4. CHEM M2A with a grade of C- or better"
            },
            {
                "prerequisite_text": " CHEM 1B. CHEM 1B with a grade of C- or better"
            },
            {
                "prerequisite_text": "CHEM 1A AND ( CHEM 1P OR PLACEMENT EXAM or authorization ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": "CHEM 1C AND ( CHEM 1B OR CHEM H2B ) AND NO CHEM H2LB AND NO CHEM M2LB AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " (CHEM 1C and CHEM 1LC) or CHEM 1LE. CHEM 1C with a grade of C- or better. CHEM 1LC with a grade of C- or better. CHEM 1LE with a grade of C- or better"
            },
            {
                "prerequisite_text": " CHEM 1A or ENGR 1A or AP Chemistry. CHEM 1A with a grade of C- or better. ENGR 1A with a grade of C- or better. AP Chemistry with a minimum score of 3"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Students who meet the requirements for taking Chem 1A through their SAT, ACT, or AP test scores are not eligible for enrollment in Chem 1X. Specifically, the students must have ALL of the following advisory prerequisites (the inverse of the Chem 1A prerequisites): S02<600 (score below 600 on the SAT Mathematics Reasoning test) A02<27 (score below 27 on the ACT Mathematics test) Z43<700 (score below 700 on the SAT Chemistry subject exam) AP25<3 (score below 3 on the AP Chemistry exam) AP66<4 (score below 4 on the AP Calculus AB Exam) AP68<3 (score below 3 on the AP Calculus BC Exam) Students who meet Chem 1A eligibility through ALEKS-based training are permitted to enroll in Chem 1X. Chem 1X is open to interested BioEASE students. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHEM 132A and CHEM 132B and CHEM 132C"
            },
            {
                "prerequisite_text": " CHEM 201"
            },
            {
                "prerequisite_text": " (CHEM 51A and CHEM 51B and CHEM 51C) or (CHEM H52A and CHEM H52B and CHEM H52C)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHEM 204"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHEM 132A and CHEM 132B and CHEM 132C"
            },
            {
                "prerequisite_text": " CHEM 107 and CHEM 132A and CHEM 132B and CHEM 132C"
            },
            {
                "prerequisite_text": " CHEM 107 or CHEM 215"
            },
            {
                "prerequisite_text": " CHEM 215"
            },
            {
                "prerequisite_text": " CHEM 131C or CHEM 132C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Undergraduate courses in physical chemistry and biochemistry."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Undergraduate courses in organic and physical chemistry."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHEM 132A and CHEM 132B and CHEM 132C"
            },
            {
                "prerequisite_text": " CHEM 131A and CHEM 131B and CHEM 131C"
            },
            {
                "prerequisite_text": " CHEM 231A"
            },
            {
                "prerequisite_text": " CHEM 231B"
            },
            {
                "prerequisite_text": "CHEM 131A AND CHEM 131B AND CHEM 131C AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " CHEM 232A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MAE 261 or CHEM 245 or ESS 240"
            },
            {
                "prerequisite_text": " CHEM 152 and CHEM 132C. CHEM 152 with a grade of B or better. CHEM 132C with a grade of B or better"
            },
            {
                "prerequisite_text": " CHEM 233 or CBE 276"
            },
            {
                "prerequisite_text": " CHEM 132A and CHEM 132B and CHEM 132C"
            },
            {
                "prerequisite_text": " CHEM 245A"
            },
            {
                "prerequisite_text": " CHEM 245B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHEM 250"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHEM 231A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (CHEM 1C or CHEM H2C or CHEM M3C or CHEM M2C) and MATH 2D. CHEM 1C with a grade of C- or better. CHEM H2C with a grade of C- or better. CHEM M3C with a grade of C- or better. CHEM M2C with a grade of C- or better"
            },
            {
                "prerequisite_text": " (CHEM 1C or CHEM H2C or CHEM M2C or CHEM M3C) and (CHEM 1LD or CHEM H2LB or CHEM M2LB). CHEM 1C with a grade of C- or better. CHEM H2C with a grade of C- or better. CHEM M2C with a grade of C- or better. CHEM M3C with a grade of C- or better. CHEM 1LD with a grade of C- or better. CHEM H2LB with a grade of C- or better. CHEM M2LB with a grade of C- or better"
            },
            {
                "prerequisite_text": " CHEM 51A and (CHEM 1LD or CHEM M52LA or CHEM H52LA). CHEM 51A with a grade of C- or better. CHEM 1LD with a grade of C- or better. CHEM M52LA with a grade of C- or better. CHEM H52LA with a grade of C- or better"
            },
            {
                "prerequisite_text": " CHEM 51B and (CHEM 51LB or CHEM M52LB or CHEM H52LB). CHEM 51B with a grade of C- or better. CHEM 51LB with a grade of C- or better. CHEM M52LB with a grade of C- or better. CHEM H52LB with a grade of C- or better"
            },
            {
                "prerequisite_text": "CHEM 51A AND CHEM 51B AND ( CHEM 1LD OR CHEM H2LB OR CHEM M2LB ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": "CHEM 51B AND CHEM 51C AND ( CHEM 51LB OR CHEM H52LB OR CHEM M52LB ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " CHEM 51C and CHEM 51LC. CHEM 51C with a grade of C- or better. CHEM 51LC with a grade of C- or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHEM H180A"
            },
            {
                "prerequisite_text": " CHEM H180B"
            },
            {
                "prerequisite_text": "CHEM H180A AND CHEM H180B AND CHEM H180C AND LOWER DIVISION WRITING AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " AP Chemistry or SAT Subject Chemistry. AP Chemistry with a minimum score of 4. SAT Subject Chemistry with a minimum score of 700"
            },
            {
                "prerequisite_text": " CHEM H2A and (CHEM H2LA or CHEM M2LA). CHEM H2A with a grade of C- or better. CHEM H2LA with a grade of C- or better. CHEM M2LA with a grade of C- or better"
            },
            {
                "prerequisite_text": " CHEM H2B and (CHEM H2LB or CHEM M2LB). CHEM H2B with a grade of C- or better. CHEM H2LB with a grade of C- or better. CHEM M2LB with a grade of C- or better"
            },
            {
                "prerequisite_text": " AP Chemistry or SAT Subject Chemistry. AP Chemistry with a minimum score of 4. SAT Subject Chemistry with a minimum score of 700"
            },
            {
                "prerequisite_text": "CHEM H2A AND CHEM H2B AND ( CHEM H2LA OR CHEM M2LA ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": "CHEM H2B AND CHEM H2C AND ( CHEM H2LB OR CHEM M2LB ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " (CHEM 1C or CHEM H2C or CHEM M2C or CHEM M3C) and (CHEM M2LB or CHEM H2LB or CHEM 1LD). CHEM 1C with a grade of C- or better. CHEM H2C with a grade of C- or better. CHEM M2C with a grade of C- or better. CHEM M3C with a grade of C- or better. CHEM M2LB with a grade of C- or better. CHEM H2LB with a grade of C- or better. CHEM 1LD with a grade of C- or better"
            },
            {
                "prerequisite_text": "CHEM 51A AND CHEM 51B AND ( CHEM H52LA OR CHEM M52LA ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": "CHEM 51B AND CHEM 51C AND ( CHEM 51LC OR CHEM H52LB OR CHEM M52LB ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 5A or MATH 2A or PHYS 7C or CHEM 1X or CHEM 1P or SAT Mathematics or ACT Mathematics or SAT Subject Chemistry or AP Chemistry or AP Calculus AB or AP Calculus BC. CHEM 1P with a grade of C- or better. SAT Mathematics with a minimum score of 600. ACT Mathematics with a minimum score of 27. SAT Subject Chemistry with a minimum score of 700. AP Chemistry with a minimum score of 3. AP Calculus AB with a minimum score of 4. AP Calculus BC with a minimum score of 3. Placement via a passing score on the ALEKS placement exam is also accepted."
            },
            {
                "prerequisite_text": " CHEM M2A and CHEM M2LA. CHEM M2A with a grade of C- or better. CHEM M2LA with a grade of C- or better"
            },
            {
                "prerequisite_text": " CHEM M2B and CHEM M2LB. CHEM M2B with a grade of C- or better. CHEM M2LB with a grade of C- or better"
            },
            {
                "prerequisite_text": "( CHEM 1A OR CHEM H2A OR CHEM M2A OR AP CHEMISTRY ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " (CHEM 1B or CHEM H2B or CHEM M2B) and (CHEM M2A or CHEM H2A) and (CHEM M2LA or CHEM H2LA). CHEM 1B with a grade of C- or better. CHEM H2B with a grade of C- or better. CHEM M2B with a grade of C- or better. CHEM M2A with a grade of C- or better. CHEM H2A with a grade of C- or better. CHEM M2LA with a grade of C- or better. CHEM H2LA with a grade of C- or better"
            },
            {
                "prerequisite_text": " (CHEM 1B or CHEM H2B or CHEM M2B) and (CHEM M2LB or CHEM H2LB). CHEM 1B with a grade of C- or better. CHEM H2B with a grade of C- or better. CHEM M2B with a grade of C- or better. CHEM M2LB with a grade of C- or better. CHEM H2LB with a grade of C- or better"
            },
            {
                "prerequisite_text": " (CHEM 1B or CHEM H2B or CHEM M2B) and (CHEM M2LB or CHEM H2LB). CHEM 1B with a grade of C- or better. CHEM H2B with a grade of C- or better. CHEM M2B with a grade of C- or better. CHEM M2LB with a grade of C- or better. CHEM H2LB with a grade of C- or better"
            },
            {
                "prerequisite_text": "CHEM 51A AND ( CHEM 1LD OR CHEM H2LB OR CHEM M2LB ) AND ( CHEM 1C OR CHEM H2C OR CHEM M2C OR CHEM M3C ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": "CHEM 51A AND CHEM 51B AND ( CHEM H52LA OR CHEM M52LA ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": "CHEM 51B AND CHEM 51C AND ( CHEM H52LB OR CHEM M52LB ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHINESE 3C or JAPANSE 3C or KOREAN 3C"
            },
            {
                "prerequisite_text": " CHINESE 3C or JAPANSE 3C or KOREAN 3C"
            },
            {
                "prerequisite_text": " CHINESE 3C or JAPANSE 3C or KOREAN 3C"
            },
            {
                "prerequisite_text": " CHINESE 3C"
            },
            {
                "prerequisite_text": " CHINESE 3C"
            },
            {
                "prerequisite_text": " CHINESE 3C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": "( CHINESE 1A OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " CHINESE 1B or CHINESE S1AB. CHINESE 1B with a grade of C or better. CHINESE S1AB with a grade of C or better. Placement into CHINESE 1C is also accepted."
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": "( CHINESE 1MA OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( CHINESE 1MB OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " CHINESE 101C"
            },
            {
                "prerequisite_text": " CHINESE 100C"
            },
            {
                "prerequisite_text": " CHINESE 101C"
            },
            {
                "prerequisite_text": " CHINESE 100C"
            },
            {
                "prerequisite_text": " CHINESE 100C"
            },
            {
                "prerequisite_text": " CHINESE 211A"
            },
            {
                "prerequisite_text": " CHINESE 100C"
            },
            {
                "prerequisite_text": " CHINESE 212A"
            },
            {
                "prerequisite_text": " CHINESE 100C"
            },
            {
                "prerequisite_text": " CHINESE 213A"
            },
            {
                "prerequisite_text": " CHINESE 100C or CHINESE 101C"
            },
            {
                "prerequisite_text": " CHINESE 100C or CHINESE 101A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Advancement to Ph.D. candidacy."
            },
            {
                "prerequisite_text": "( CHINESE 1C OR CHINESE 1MC OR CHINESE S1BC OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( CHINESE 2A OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( CHINESE 2B OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( CHINESE 1MC OR CHINESE S1BC OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( CHINESE 2MA OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( CHINESE 2MB OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( CHINESE 2C OR CHINESE 2DC OR CHINESE 2MC OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " CHINESE 3A. CHINESE 3A with a grade of C or better"
            },
            {
                "prerequisite_text": " CHINESE 3B. CHINESE 3B with a grade of C or better"
            },
            {
                "prerequisite_text": " CHINESE 3C. CHINESE 3C with a grade of C or better. Native speakers also accepted."
            },
            {
                "prerequisite_text": "( CHINESE 1A OR CHINESE 1B OR CHINESE 1MA OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( CHINESE 1B OR CHINESE 1C OR CHINESE 1MA OR CHINESE 1MB OR CHINESE 1MC OR CHINESE S1AB OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " CLASSIC 192A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Completion of the M.A. degree."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (PSYC 14M or PSYC 114M or COGS 14P or ICS 31) and (PSYC 10C or STAT 7 or STAT 110)"
            },
            {
                "prerequisite_text": " (PSYC 14M or PSYC 114M or COGS 14P or ICS 31 or MATH 9) and (PSYC 10C or STAT 7 or STAT 110) and (MATH 2B or MATH 5B or MATH 7B)"
            },
            {
                "prerequisite_text": "( MATH 2B OR MATH 5B OR MATH 7B ) AND ( STATS 7 OR PSYCH 10C OR STATS 110 OR AP STATISTICS ) AND ( MATH 0 OR COGS 14P OR PSYCH 14M OR I&C SCI 31 OR PSYCH 114M )"
            },
            {
                "prerequisite_text": " PSYC 9A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PSYC 10A or COGS 10A"
            },
            {
                "prerequisite_text": " PSYC 10A or COGS 10A"
            },
            {
                "prerequisite_text": "( I&C SCI 31 OR PSYCH 114M ) AND ( MATH 2B OR AP CALCULUS BC ) AND ( STATS 7 OR AP STATISTICS )"
            },
            {
                "prerequisite_text": " ((PSYC 9A and PSYC 9B and PSYC 9C) or (PSCI 11A and PSCI 11B and PSCI 11C)) and ((PSYC 10A and PSYC 10B and PSYC 10C) or (MATH 2A and MATH 2B and (MATH 7 or STAT 7)) )"
            },
            {
                "prerequisite_text": " PSYC 112A and PSYC 112LA. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " PSYC 112B and PSYC 112LB"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "COGS 112P"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( PSCI 11B OR PSYCH 9B ) AND ( PSCI 11C OR PSYCH 9C ) AND ( PSCI 11A OR PSYCH 9A ) AND ( PSYCH 10C OR ANTHRO 10C OR SOCIOL 10C OR POL SCI 10C OR SOC SCI 10C OR ( STATS 7 AND ( MATH 2B OR AP CALCULUS BC ) ) )"
            },
            {
                "prerequisite_text": " (PSYC 9A and PSYC 9B and PSYC 9C) or (PSCI 11A and PSCI 11B and PSCI 11C) and (PSYC 10C or SSCI 10C or ANTH 10C or PLSC 10C or SOCL 10C) or (MATH 2B and STAT 7)"
            },
            {
                "prerequisite_text": " (PSYC 7A or PSCI 9) or (PSYC 9A or PSCI 11A)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (PSYC 9A or PSCI 11A) and (PSYC 9B or PSCI 11B)"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " PSYC 9A and PSYC 9B"
            },
            {
                "prerequisite_text": " (PSYC 7A or PSCI 9) or (PSYC 9A or PSCI 11A)"
            },
            {
                "prerequisite_text": " (PSYC 7A or PSCI 9) or (PSYC 9B or PSCI 11B)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (PSYC 7A or PSCI 9) or ((PSYC 9A or PSCI 11A) and (PSYC 9B or PSCI 11B))"
            },
            {
                "prerequisite_text": " (PSYC 7A or PSCI 9) or ((PSYC 9A or PSCI 11A) and (PSYC 9B or PSCI 11B)) or BIOL 35 or BIOL N110 or BIOL N115A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " COGS 201A"
            },
            {
                "prerequisite_text": " COGS 201B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " COGS 214"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PSYC H101A"
            },
            {
                "prerequisite_text": " PSYC H101B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement. Working knowledge of at least one foreign language."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " COM LIT 280A. COM LIT 280A with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " I&C SCI 45C"
            },
            {
                "prerequisite_text": " (I&C SCI 46 or CSE 46) and I&C SCI 6D and (MATH 3A or I&C SCI 6N). I&C SCI 46 with a grade of C or better. CSE 46 with a grade of C or better. I&C SCI 6D with a grade of C or better. MATH 3A with a grade of C or better. I&C SCI 6N with a grade of C or better"
            },
            {
                "prerequisite_text": " I&C SCI 46 and (MATH 3A or I&C SCI 6N). I&C SCI 46 with a grade of C or better. MATH 3A with a grade of C or better. I&C SCI 6N with a grade of C or better"
            },
            {
                "prerequisite_text": " COMPSCI 112 or COMPSCI 171 or IN4MATX 121 or ART 106B or I&C SCI 163 or I&C SCI 166"
            },
            {
                "prerequisite_text": "CSE 161 AND COMPSCI 112 AND COMPSCI 161 AND COMPSCI 164 AND COMPSCI 165 AND ( CSE 45C OR I&C SCI 45C )"
            },
            {
                "prerequisite_text": "I&C SCI 51 AND I&C SCI 6B AND IN4MATX 43 AND ( MATH 3A OR I&C SCI 6N ) AND ( STATS 67 OR ( STATS 120A AND ( STATS 7 OR AP STATISTICS ) ) ) AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )"
            },
            {
                "prerequisite_text": "I&C SCI 6D AND ( CSE 46 OR I&C SCI 46 ) AND ( MATH 3A OR MATH 6G OR I&C SCI 6N ) AND ( MATH 2B OR AP CALCULUS BC OR AP CALCULUS AB SUB )"
            },
            {
                "prerequisite_text": "I&C SCI 6D AND ( MATH 3A OR I&C SCI 6N ) AND ( MATH 2B OR AP CALCULUS BC ) AND ( CSE 46 OR I&C SCI 46 ) AND ( COMPSCI 112 OR COMPSCI 116 OR COMPSCI 171 OR COMPSCI 178 ) AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )"
            },
            {
                "prerequisite_text": " (I&C SCI 6N or MATH 3A) and I&C SCI 33"
            },
            {
                "prerequisite_text": "( I&C SCI 45C OR I&C SCI 45J ) AND ( STATS 7 OR STATS 67 OR AP STATISTICS )"
            },
            {
                "prerequisite_text": " I&C SCI 33 or EECS 114. I&C SCI 33 with a grade of C or better"
            },
            {
                "prerequisite_text": " (COMPSCI 122A or EECS 116) and (I&C SCI 45J or AP Computer Science A). AP Computer Science A with a minimum score of 4"
            },
            {
                "prerequisite_text": " COMPSCI 122A and (I&C SCI 53 or COMPSCI 143A)"
            },
            {
                "prerequisite_text": " I&C SCI 46 and I&C SCI 51 and (COMPSCI 122A or EECS 116)"
            },
            {
                "prerequisite_text": "( CSE 41 OR I&C SCI 31 OR I&C SCI 32A OR AP COMP SCI A OR AP COMP SCI AB ) AND UPPER DIVISION STANDING ONLY"
            },
            {
                "prerequisite_text": " (I&C SCI 53 and I&C SCI 53L) or COMPSCI 143A"
            },
            {
                "prerequisite_text": " EECS 55 or STATS 67"
            },
            {
                "prerequisite_text": " COMPSCI 132 or EECS 148"
            },
            {
                "prerequisite_text": " I&C SCI 6D and (I&C SCI 33 or CSE 43) and (COMPSCI 122A or EECS 116 or COMPSCI 132 or COMPSCI 143A)"
            },
            {
                "prerequisite_text": " (COMPSCI 132 or EECS 148) and I&C SCI 45J"
            },
            {
                "prerequisite_text": " (I&C SCI 51 or CSE 31 or EECS 31) and (I&C SCI 46 or CSE 46). I&C SCI 51 with a grade of C or better. CSE 31 with a grade of C or better. EECS 31 with a grade of C or better. I&C SCI 46 with a grade of C or better. CSE 46 with a grade of C or better"
            },
            {
                "prerequisite_text": " CSE 141 or COMPSCI 141 or IN4MATX 101"
            },
            {
                "prerequisite_text": " COMPSCI 142A or CSE 142"
            },
            {
                "prerequisite_text": " (I&C SCI 46 or CSE 46) and (I&C SCI 51 or EECS 31 or CSE 31)"
            },
            {
                "prerequisite_text": " COMPSCI 143A"
            },
            {
                "prerequisite_text": " (CSE 46 or I&C SCI 46) and (I&C SCI 51 or EECS 31 or CSE 31)"
            },
            {
                "prerequisite_text": "( CSE 145 OR COMPSCI 145 )"
            },
            {
                "prerequisite_text": "I&C SCI 51 AND COMPSCI 143A AND ( CSE 46 OR I&C SCI 46 )"
            },
            {
                "prerequisite_text": " I&C SCI 33 or CSE 43"
            },
            {
                "prerequisite_text": " (I&C SCI 33 or CSE 43) and I&C SCI 51 and I&C SCI 6B and I&C SCI 6D. I&C SCI 33 with a grade of C or better. CSE 43 with a grade of C or better. I&C SCI 51 with a grade of C or better"
            },
            {
                "prerequisite_text": " COMPSCI 151"
            },
            {
                "prerequisite_text": " COMPSCI 151"
            },
            {
                "prerequisite_text": " COMPSCI 151"
            },
            {
                "prerequisite_text": "I&C SCI 6B AND I&C SCI 6D AND ( MATH 2B OR AP CALCULUS BC ) AND ( CSE 46 OR I&C SCI 46 ) AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )"
            },
            {
                "prerequisite_text": "I&C SCI 6B AND I&C SCI 6D AND ( MATH 2B OR AP CALCULUS BC ) AND ( CSE 46 OR I&C SCI 46 )"
            },
            {
                "prerequisite_text": " COMPSCI 161 or CSE 161"
            },
            {
                "prerequisite_text": " I&C SCI 46 or CSE 46. I&C SCI 46 with a grade of C or better. CSE 46 with a grade of C or better"
            },
            {
                "prerequisite_text": "CSE 45C AND I&C SCI 45C AND ( CSE 161 OR COMPSCI 161 )"
            },
            {
                "prerequisite_text": " (I&C SCI 6N or MATH 3A) and (COMPSCI 161 or PHYSICS 113A). I&C SCI 6N with a grade of C+ or better. MATH 3A with a grade of C+ or better"
            },
            {
                "prerequisite_text": " COMPSCI 161 or CSE 161"
            },
            {
                "prerequisite_text": "( MATH 3A OR I&C SCI 6N ) AND ( STATS 67 OR ( STATS 120A AND ( STATS 7 OR AP STATISTICS ) ) ) AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )"
            },
            {
                "prerequisite_text": "( CSE 46 OR I&C SCI 46 ) AND ( MATH 2B OR AP CALCULUS BC ) AND ( STATS 67 OR ( STATS 120A AND ( STATS 7 OR AP STATISTICS ) ) ) AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )"
            },
            {
                "prerequisite_text": " (STATS 120A and STATS 120B) or MATH 121A or COMPSCI 178 or COMPSCI 273A"
            },
            {
                "prerequisite_text": " COMPSCI 171 and COMPSCI 172B. Recommended: COMPSCI 178"
            },
            {
                "prerequisite_text": " COMPSCI 171 and COMPSCI 178"
            },
            {
                "prerequisite_text": "STATS 67 AND I&C SCI 6B AND I&C SCI 6D AND ( MATH 2B OR AP CALCULUS BC ) AND ( MATH 3A OR I&C SCI 6N )"
            },
            {
                "prerequisite_text": "I&C SCI 6B AND I&C SCI 6D AND ( MATH 3A OR I&C SCI 6N ) AND ( MATH 2B OR AP CALCULUS BC ) AND ( STATS 67 OR ( STATS 120A AND ( STATS 7 OR AP STATISTICS ) ) ) AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )"
            },
            {
                "prerequisite_text": " COMPSCI 171"
            },
            {
                "prerequisite_text": " I&C SCI 46"
            },
            {
                "prerequisite_text": " I&C SCI 46"
            },
            {
                "prerequisite_text": " MATH 2D or MATH 3A or STATS 7 or STATS 8"
            },
            {
                "prerequisite_text": " I&C SCI 6N or MATH 3A"
            },
            {
                "prerequisite_text": " COMPSCI 184A"
            },
            {
                "prerequisite_text": "I&C SCI 51 AND ( EECS 116 OR COMPSCI 122A ) AND ( CSE 46 OR I&C SCI 46 )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " COMPSCI 260 or COMPSCI 263"
            },
            {
                "prerequisite_text": " Knowledge of Python or C++ programming is required."
            },
            {
                "prerequisite_text": " COMPSCI 260 and COMPSCI 263"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EECS 148 or COMPSCI 132"
            },
            {
                "prerequisite_text": " COMPSCI 201P or COMPSCI 202P"
            },
            {
                "prerequisite_text": " COMPSCI 134 and COMPSCI 142A and COMPSCI 143A"
            },
            {
                "prerequisite_text": " Basic courses in multivariate calculus, linear algebra, and probability."
            },
            {
                "prerequisite_text": " Basic knowledge of multivariate calculus, linear algebra, and familiarity with MATLAB. "
            },
            {
                "prerequisite_text": " Familiarity with linear algebra is required."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " COMPSCI 211A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "COMPSCI 131 AND COMPSCI 132 AND COMPSCI 133 AND COMPSCI 161 AND COMPSCI 143A"
            },
            {
                "prerequisite_text": " MATH 121A"
            },
            {
                "prerequisite_text": "MATH 2B AND I&C SCI 6D AND ( CSE 46 OR I&C SCI 46 ) AND ( MATH 3A OR MATH 6G OR I&C SCI 6N )"
            },
            {
                "prerequisite_text": "I&C SCI 46 AND I&C SCI 6D AND COMPSCI 211A AND ( MATH 2B OR AP CALCULUS BC ) AND ( MATH 3A OR MATH 6G OR I&C SCI 6N )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " COMPSCI 161 and COMPSCI 171 and (I&C SCI 6N or MATH 3A or MATH 6G)"
            },
            {
                "prerequisite_text": " COMPSCI 122A and (I&C SCI 53 or COMPSCI 143A)"
            },
            {
                "prerequisite_text": " Required: C++ programming skills, understanding of data structures and algorithms."
            },
            {
                "prerequisite_text": " COMPSCI 222 and COMPSCI 131"
            },
            {
                "prerequisite_text": " COMPSCI 222P or COMPSCI 222. COMPSCI 222P with a grade of B or better. COMPSCI 222 with a grade of B or better"
            },
            {
                "prerequisite_text": " COMPSCI 220P or COMPSCI 122A. COMPSCI 220P with a grade of B or better. COMPSCI 122A with a grade of C or better"
            },
            {
                "prerequisite_text": " I&C SCI 21 or CSE 21 or IN4MATX 41 or I&C SCI 31 or CSE 41"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EECS 148 or COMPSCI 132"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EECS 148 or COMPSCI 132"
            },
            {
                "prerequisite_text": " NET SYS 201 or COMPSCI 232 or EECS 248A"
            },
            {
                "prerequisite_text": " EECS 148 or COMPSCI 132"
            },
            {
                "prerequisite_text": " An undergraduate-level course in operating systems and networks."
            },
            {
                "prerequisite_text": " COMPSCI 143A"
            },
            {
                "prerequisite_text": " Working knowledge of C and the Linux environment."
            },
            {
                "prerequisite_text": " COMPSCI 142A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Knowledge of C++ programming is required."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " I&C SCI 51 and COMPSCI 152 and COMPSCI 161 and (I&C SCI 6N or MATH 3A or MATH 6G or I&C SCI 6D). B.S. degree in Computer Science is also accepted."
            },
            {
                "prerequisite_text": " Undergraduate-level familiarity with fundamentals of integrated circuit blocks, processors, optimization/algorithm design, and some programming experience."
            },
            {
                "prerequisite_text": " I&C SCI 51 and COMPSCI 152 and COMPSCI 161 and (I&C SCI 6N or MATH 3A or MATH 6G or I&C SCI 6D). B.S. degree in Computer Science is also accepted."
            },
            {
                "prerequisite_text": " COMPSCI 222 or COMPSCI 238 or COMPSCI 241"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " IN4MATX 231 and IN4MATX 241"
            },
            {
                "prerequisite_text": " COMPSCI 152"
            },
            {
                "prerequisite_text": "COMPSCI 250A"
            },
            {
                "prerequisite_text": " Undergraduate-level familiarity with fundamentals of integrated circuit blocks, processors, and optimization/algorithm design, and some programming experience."
            },
            {
                "prerequisite_text": " COMPSCI 151 and COMPSCI 152"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "COMPSCI 260P"
            },
            {
                "prerequisite_text": " Recommended: An undergraduate machine-learning course and an undergraduate course in one of the following areas: networking, distributed systems, or operating systems. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " COMPSCI 161"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " I&C SCI 46 and COMPSCI 161"
            },
            {
                "prerequisite_text": "COMPSCI 260P"
            },
            {
                "prerequisite_text": " COMPSCI 162"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " COMPSCI 161 and COMPSCI 261"
            },
            {
                "prerequisite_text": " Basic courses in linear algebra and algorithms."
            },
            {
                "prerequisite_text": " COMPSCI 161 and COMPSCI 261"
            },
            {
                "prerequisite_text": " COMPSCI 161 and COMPSCI 261"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( MATH 3A OR I&C SCI 6N ) AND ( STATS 67 OR ( STATS 120A AND ( STATS 7 OR AP STATISTICS ) ) )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " COMPSCI 171 and COMPSCI 178"
            },
            {
                "prerequisite_text": " COMPSCI 271 and COMPSCI 206"
            },
            {
                "prerequisite_text": " Required: Python programming knowledge."
            },
            {
                "prerequisite_text": " COMPSCI 206"
            },
            {
                "prerequisite_text": " COMPSCI 274A"
            },
            {
                "prerequisite_text": " (STATS 120A and STATS 120B) or MATH 121A or COMPSCI 178 or COMPSCI 273A"
            },
            {
                "prerequisite_text": "COMPSCI 178 AND COMPSCI 172B"
            },
            {
                "prerequisite_text": " COMPSCI 178 or COMPSCI 273A or STATS 120B. Recommended: Advanced machine learning or graphical models courses such as COMPSCI 274A or COMPSCI 274B or CS 273C or COMPSCI 276."
            },
            {
                "prerequisite_text": " COMPSCI 271P. COMPSCI 271P with a grade of B or better. Required: Knowledge of Python programming. "
            },
            {
                "prerequisite_text": " Basic course in algorithm design and analysis."
            },
            {
                "prerequisite_text": " COMPSCI 273P. Required: Python programming experience."
            },
            {
                "prerequisite_text": " A basic course in probability."
            },
            {
                "prerequisite_text": " COMPSCI 178 or COMPSCI 273A. Recommended: COMPSCI 274A and CS 275B and CS 275C and COMPSCI 276."
            },
            {
                "prerequisite_text": " STATS 120A"
            },
            {
                "prerequisite_text": " A Basic course in algorithms or a basic course in molecular biology."
            },
            {
                "prerequisite_text": " COMPSCI 284A or (BIO SCI 99 and MATH 2D)"
            },
            {
                "prerequisite_text": " MATH 227A"
            },
            {
                "prerequisite_text": " Recommended: COMPSCI 263 and COMPSCI 295 (when the topic title is Game Theory), or a course on linear programming, or working knowledge of LP-duality theory. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "COMPSCI 297P"
            },
            {
                "prerequisite_text": "COMPSCI 296P"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (PSCI 9 or PSCI 11C or PSYCH 7A or PSYCH 9C) and PSCI 102C and (PSCI 178S or CRM/LAW C149)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11C or PSYCH 7A or PSYCH 9C."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11B or PSCI 11C."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: CRM/LAW C109."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOCECOL 10 and SOCECOL 13. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PSCI 193G AND SOCECOL 10"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 122A or ECON 123A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOCECOL 13"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CRM/LAW C201. CRM/LAW C201 with a grade of B or better"
            },
            {
                "prerequisite_text": " CRM/LAW C202. CRM/LAW C202 with a grade of B or better"
            },
            {
                "prerequisite_text": " CRM/LAW C202. CRM/LAW C202 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CRM/LAW C239A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CRM/LAW C240A"
            },
            {
                "prerequisite_text": " CRM/LAW C240B. CRM/LAW C240B with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CRM/LAW C260A"
            },
            {
                "prerequisite_text": " CRM/LAW C260B"
            },
            {
                "prerequisite_text": " CRM/LAW C260C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CRM/LAW C280A"
            },
            {
                "prerequisite_text": " CRM/LAW C280B"
            },
            {
                "prerequisite_text": " Advancement to candidacy."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PHYSICS 7D AND ( CSE 70A OR EECS 70A )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 103"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 133A and DANCE 133B and DANCE 133C and DANCE 143A and DANCE 143B and DANCE 143C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 132A and DANCE 132B and DANCE 132C"
            },
            {
                "prerequisite_text": "DANCE 30A AND DANCE 30B AND DANCE 30C"
            },
            {
                "prerequisite_text": " DANCE 132A"
            },
            {
                "prerequisite_text": " DANCE 132A and DANCE 132B"
            },
            {
                "prerequisite_text": " DANCE 132C. DANCE 132C with a grade of B+ or better. Placement by audition is also accepted."
            },
            {
                "prerequisite_text": " DANCE 133A"
            },
            {
                "prerequisite_text": " DANCE 133A and DANCE 133B"
            },
            {
                "prerequisite_text": " DANCE 133A and DANCE 133B and DANCE 133C. DANCE 133C with a grade of B+ or better. Placement by audition is also accepted."
            },
            {
                "prerequisite_text": " DANCE 134A"
            },
            {
                "prerequisite_text": " DANCE 134A and DANCE 134B"
            },
            {
                "prerequisite_text": " DANCE 134A and DANCE 134B and DANCE 134C. DANCE 134C with a grade of B+ or better. Placement by audition is also accepted. "
            },
            {
                "prerequisite_text": " DANCE 135A"
            },
            {
                "prerequisite_text": " DANCE 135A and DANCE 135B"
            },
            {
                "prerequisite_text": " (DANCE 133A and DANCE 133B and DANCE 133C) or (DANCE 143A and DANCE 143B and DANCE 143C)"
            },
            {
                "prerequisite_text": " DANCE 133A and DANCE 133B and DANCE 133C and DANCE 143A and DANCE 143B and DANCE 143C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 40A and DANCE 40B and DANCE 40C. Prerequisites are for non-Dance majors only."
            },
            {
                "prerequisite_text": " DANCE 142A"
            },
            {
                "prerequisite_text": " DANCE 142A and DANCE 142B"
            },
            {
                "prerequisite_text": "DANCE 142A AND DANCE 142B AND DANCE 142C"
            },
            {
                "prerequisite_text": " DANCE 143A"
            },
            {
                "prerequisite_text": " DANCE 143A and DANCE 143B"
            },
            {
                "prerequisite_text": "DANCE 143A AND DANCE 143B AND DANCE 143C"
            },
            {
                "prerequisite_text": " DANCE 144A"
            },
            {
                "prerequisite_text": " DANCE 144A and DANCE 144B"
            },
            {
                "prerequisite_text": "DANCE 50A AND DANCE 50B AND DANCE 50C"
            },
            {
                "prerequisite_text": " DANCE 152A"
            },
            {
                "prerequisite_text": " DANCE 152A and DANCE 152B"
            },
            {
                "prerequisite_text": "DANCE 152A AND DANCE 152B AND DANCE 152C"
            },
            {
                "prerequisite_text": " DANCE 153A"
            },
            {
                "prerequisite_text": " DANCE 153A and DANCE 153B"
            },
            {
                "prerequisite_text": "DANCE 153A AND DANCE 153B AND DANCE 153C"
            },
            {
                "prerequisite_text": " DANCE 154A"
            },
            {
                "prerequisite_text": " DANCE 154A and DANCE 154B"
            },
            {
                "prerequisite_text": " DANCE 53A and DANCE 53B and DANCE 53C. Audition is also accepted. Prerequisites are for non-Dance Majors only."
            },
            {
                "prerequisite_text": " DANCE 155A"
            },
            {
                "prerequisite_text": " DANCE 155B"
            },
            {
                "prerequisite_text": " DANCE 155C. DANCE 155C with a grade of B+ or better"
            },
            {
                "prerequisite_text": " DANCE 156A"
            },
            {
                "prerequisite_text": " DANCE 156A and DANCE 156B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 60A and DANCE 60B and DANCE 60C. Audition required. "
            },
            {
                "prerequisite_text": "DANCE 60A AND DANCE 60B AND DANCE 60C AND DANCE 162A"
            },
            {
                "prerequisite_text": " DANCE 60A"
            },
            {
                "prerequisite_text": " DANCE 163"
            },
            {
                "prerequisite_text": " Audition required. "
            },
            {
                "prerequisite_text": " Audition required. "
            },
            {
                "prerequisite_text": " Audition required. "
            },
            {
                "prerequisite_text": " Audition required. "
            },
            {
                "prerequisite_text": " DANCE 152A and DANCE 152B and DANCE 152C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Audition required."
            },
            {
                "prerequisite_text": " DANCE 21A"
            },
            {
                "prerequisite_text": " DANCE 90A and DANCE 90B and DANCE 90C. Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 100"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "DANCE 21A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 231A"
            },
            {
                "prerequisite_text": " DANCE 231B"
            },
            {
                "prerequisite_text": " Audition required."
            },
            {
                "prerequisite_text": " DANCE 241A. Audition required."
            },
            {
                "prerequisite_text": " DANCE 241B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 251A"
            },
            {
                "prerequisite_text": " DANCE 251B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 252B"
            },
            {
                "prerequisite_text": " Audition required."
            },
            {
                "prerequisite_text": " DANCE 255A. Audition required."
            },
            {
                "prerequisite_text": " DANCE 255A and DANCE 255B. Audition required."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 261A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 284"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 30A"
            },
            {
                "prerequisite_text": " DANCE 30A and DANCE 30B"
            },
            {
                "prerequisite_text": " DANCE 30A and DANCE 30B and DANCE 30C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "DANCE 40A"
            },
            {
                "prerequisite_text": "DANCE 40B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 50A"
            },
            {
                "prerequisite_text": " DANCE 50B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 52A"
            },
            {
                "prerequisite_text": " DANCE 52B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 60A"
            },
            {
                "prerequisite_text": " DANCE 60A and DANCE 60B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DANCE 90A"
            },
            {
                "prerequisite_text": " DANCE 90B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Required: Completion of at least 24 units in the Master of Data Science program."
            },
            {
                "prerequisite_text": "DATA 296P"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DEV BIO 200A"
            },
            {
                "prerequisite_text": " DEV BIO 200B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DEV BIO 203A"
            },
            {
                "prerequisite_text": " DEV BIO 203B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DEV BIO 206A"
            },
            {
                "prerequisite_text": " DEV BIO 206B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DEV BIO 290A"
            },
            {
                "prerequisite_text": " DEV BIO 290B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DEV BIO 292A"
            },
            {
                "prerequisite_text": " DEV BIO 292B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Audition required."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DRAMA 40A and DRAMA 40B and DRAMA 40C. Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": " DRAMA 40A or DRAMA 40B or DRAMA 40C. Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": " DRAMA 40A and DRAMA 40B and DRAMA 40C. Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": " DRAMA 40A and DRAMA 40B and DRAMA 40C. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " DRAMA 40A and DRAMA 40B and DRAMA 40C. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " DRAMA 40A and DRAMA 40B and DRAMA 40C. Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DRAMA 40A and DRAMA 40B and DRAMA 40C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement. "
            },
            {
                "prerequisite_text": "DRAMA 30A AND DRAMA 30B AND DRAMA 30C"
            },
            {
                "prerequisite_text": " Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": " DRAMA 34. DRAMA 34 with a grade of B or better"
            },
            {
                "prerequisite_text": " DRAMA 130. DRAMA 130 with a grade of B or better"
            },
            {
                "prerequisite_text": " DRAMA 30A and DRAMA 30B and DRAMA 30C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Audition required."
            },
            {
                "prerequisite_text": " DRAMA 142. Audition required."
            },
            {
                "prerequisite_text": " DRAMA 142. Audition required."
            },
            {
                "prerequisite_text": " DRAMA 142. Audition required."
            },
            {
                "prerequisite_text": "DRAMA 143A AND DRAMA 143B AND DRAMA 143C"
            },
            {
                "prerequisite_text": "( DRAMA 143 OR DRAMA 144 )"
            },
            {
                "prerequisite_text": " Admission is by audition and the following prerequisites: DRAMA 30C and two quarters of DRAMA 148A, DRAMA 148B, or DRAMA 148C (if the 148 prerequisite is not complete at the time of auditions, student must enroll during the fall and winter quarters in the same year as the trip to New York); senior Drama majors must have successfully completed DRAMA 40C and DRAMA 120C; non-Drama majors must have sophomore standing or higher and must carefully plan their course schedule as many spring quarter classes cannot be taken while part of the NYSP."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DRAMA 50A"
            },
            {
                "prerequisite_text": " DRAMA 50C"
            },
            {
                "prerequisite_text": " DRAMA 50A or DRAMA 50B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DRAMA 50A"
            },
            {
                "prerequisite_text": " DRAMA 50A"
            },
            {
                "prerequisite_text": "( DRAMA 148B OR DRAMA 148C ) AND ( DRAMA 148A OR ( DRAMA 148B AND DRAMA 148C ) )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": " DRAMA 65 or DRAMA 142. Audition required."
            },
            {
                "prerequisite_text": " (DRAMA 65 or DRAMA 142) and DRAMA 182A. Audition required."
            },
            {
                "prerequisite_text": " DRAMA 65 or DRAMA 142. Audition required."
            },
            {
                "prerequisite_text": " (DRAMA 65 or DRAMA 142) and DRAMA 183A. Audition required."
            },
            {
                "prerequisite_text": "DRAMA 80 AND DRAMA 30A AND DRAMA 30B AND DRAMA 30C AND DRAMA 40A AND DRAMA 40B AND DRAMA 40C"
            },
            {
                "prerequisite_text": " DRAMA 184"
            },
            {
                "prerequisite_text": " DRAMA 146"
            },
            {
                "prerequisite_text": " DRAMA 146"
            },
            {
                "prerequisite_text": " DRAMA 146"
            },
            {
                "prerequisite_text": " DRAMA 146"
            },
            {
                "prerequisite_text": " DRAMA 146"
            },
            {
                "prerequisite_text": "( DRAMA 182A OR DRAMA 182B OR DRAMA 182C OR DRAMA 183A OR DRAMA 183B OR DRAMA 183C )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "DRAMA 201 AND DRAMA 202 AND DRAMA 203"
            },
            {
                "prerequisite_text": "DRAMA 200 AND DRAMA 202 AND DRAMA 203"
            },
            {
                "prerequisite_text": "DRAMA 200 AND DRAMA 201 AND DRAMA 203"
            },
            {
                "prerequisite_text": "DRAMA 200 AND DRAMA 201 AND DRAMA 202 AND DRAMA 206"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DRAMA 240"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " 12 units of DRAMA 254."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DRAMA 262"
            },
            {
                "prerequisite_text": " DRAMA 262"
            },
            {
                "prerequisite_text": " DRAMA 262"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DRAMA 266"
            },
            {
                "prerequisite_text": " DRAMA 266"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DRAMA 266"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DRAMA 30A"
            },
            {
                "prerequisite_text": " DRAMA 30A and DRAMA 30B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " DRAMA 10"
            },
            {
                "prerequisite_text": " DRAMA 10"
            },
            {
                "prerequisite_text": " DRAMA 10"
            },
            {
                "prerequisite_text": " DRAMA 10"
            },
            {
                "prerequisite_text": " DRAMA 10"
            },
            {
                "prerequisite_text": " DRAMA 10"
            },
            {
                "prerequisite_text": " DRAMA 10"
            },
            {
                "prerequisite_text": " DRAMA 10"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Audition required."
            },
            {
                "prerequisite_text": " DRAMA 30A and DRAMA 30B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 53 and EARTHSS 55) or (EARTHSS 70A and EARTHSS 70B)"
            },
            {
                "prerequisite_text": "( EARTHSS 53 OR EARTHSS 60B ) AND ( EARTHSS 55 OR EARTHSS 60C ) AND ( EARTHSS 51 OR EARTHSS 60A )"
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 53 and EARTHSS 55) or (EARTHSS 70A and EARTHSS 70B)"
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 53 and EARTHSS 55) or (EARTHSS 70A and EARTHSS 70B)"
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 53 and EARTHSS 55) or (EARTHSS 70A and EARTHSS 70B)"
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 53 and EARTHSS 55) or (EARTHSS 70A and EARTHSS 70B)"
            },
            {
                "prerequisite_text": " I&C SCI 31 or EARTHSS 116"
            },
            {
                "prerequisite_text": " EARTHSS 55 and (PHYSICS 7C or PHYSICS 3B)"
            },
            {
                "prerequisite_text": " EARTHSS 55"
            },
            {
                "prerequisite_text": "MATH 2D AND ( EARTHSS 53 OR EARTHSS 60A ) AND ( PHYSICS 7B OR PHYSICS 7C )"
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 55) or (EARTHSS 40C and EARTHSS 70B)"
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 53 and EARTHSS 55) or (EARTHSS 70A and EARTHSS 70B)"
            },
            {
                "prerequisite_text": "( EARTHSS 53 OR EARTHSS 70B ) AND ( EARTHSS 70A OR ( EARTHSS 51 AND ( EARTHSS 55 OR EARTHSS 70B ) ) )"
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 53) or (EARTHSS 70A and EARTHSS 70B)"
            },
            {
                "prerequisite_text": " EARTHSS 51 or EARTHSS 70B"
            },
            {
                "prerequisite_text": " EARTHSS 40A and EARTHSS 40B and EARTHSS 40C"
            },
            {
                "prerequisite_text": " (CHEM 1C or CHEM H2C or CHEM M3C) and (PHYSICS 3C or PHYSICS 7E) and (MATH 2B or MATH 5B or AP Calculus BC). AP Calculus BC with a minimum score of 4"
            },
            {
                "prerequisite_text": " EARTHSS 53 or CHEM 51C"
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 53 and EARTHSS 55) or (EARTHSS 40C and EARTHSS 70A)"
            },
            {
                "prerequisite_text": " EARTHSS 53 or (EARTHSS 70A and EARTHSS 70B)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (EARTHSS 70A and EARTHSS 70B) or (EARTHSS 51 and EARTHSS 53 and EARTHSS 55)"
            },
            {
                "prerequisite_text": " (EARTHSS 70A and EARTHSS 70B) or (EARTHSS 51 and EARTHSS 53 and EARTHSS 55)"
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 53 and EARTHSS 55) or (EARTHSS 70A and EARTHSS 70B). Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 53 and EARTHSS 55) or (EARTHSS 70A and EARTHSS 70B)"
            },
            {
                "prerequisite_text": " BIO SCI E106 or EARTHSS 51 or EARTHSS 60A or CHEM 51C"
            },
            {
                "prerequisite_text": " EARTHSS 51 or BIO SCI 94 or (EARTHSS 60A and EARTHSS 60C)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 53 and EARTHSS 55) or (EARTHSS 70A and EARTHSS 70B)"
            },
            {
                "prerequisite_text": "( EARTHSS 70A OR ( ( EARTHSS 55 OR EARTHSS 60C ) AND ( EARTHSS 70B OR ( ( EARTHSS 51 OR EARTHSS 60A ) AND ( EARTHSS 53 OR EARTHSS 60B ) ) ) ) ) AND LOWER DIVISION WRITING"
            },
            {
                "prerequisite_text": " (EARTHSS 51 and EARTHSS 53 and EARTHSS 55) or (EARTHSS 70A and EARTHSS 70B). Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 191A or SOCECOL 186A or EARTHSS 190A"
            },
            {
                "prerequisite_text": " BIO SCI 191B or EARTHSS 190B or SOCECOL 186B. BIO SCI 191B or EARTHSS 190B or SOCECOL 186B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " (EARTHSS 60A and EARTHSS 60B) or (EARTHSS 51 and EARTHSS 53)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Two quarters of EARTHSS 199. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 2D and PHYSICS 7A and PHYSICS 7B and PHYSICS 7E"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EARTHSS 224"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHEM 51C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EARTHSS 280A"
            },
            {
                "prerequisite_text": " EARTHSS 280B"
            },
            {
                "prerequisite_text": " EARTHSS 282B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EARTHSS 286A"
            },
            {
                "prerequisite_text": " EARTHSS 286B"
            },
            {
                "prerequisite_text": " EARTHSS 288B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( CHEM 1C OR CHEM H2C OR CHEM M3C OR EARTHSS 40A )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "CHEM 1C"
            },
            {
                "prerequisite_text": " CHEM 1C"
            },
            {
                "prerequisite_text": "( PHYSICS 3B OR PHYSICS 7C OR AP PHYSICS C:E/M ) AND ( MATH 2B OR MATH 5B OR AP CALCULUS BC )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EARTHSS 40C or PHYSICS 3C or PHYSICS 7E"
            },
            {
                "prerequisite_text": " EARTHSS 40B or (BIO SCI 93 and BIO SCI 94)"
            },
            {
                "prerequisite_text": " ESS 199A and ESS 199B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( EAS 190 OR E ASIAN 190 ) AND LOWER DIVISION WRITING"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EAS 160"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Completion of at least one quarter of statistics including regression and analysis of variance."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECO EVO 207. ECO EVO 207 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI E106"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECO EVO 282"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECO EVO 287"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ECON 20B OR AP ECONOMICS:MACRO ) AND ( ECON 20A OR AP ECONOMICS:MICRO ) AND ( AP CALCULUS BC OR ( MATH 2B AND ( MATH 2A OR AP CALCULUS AB OR AP CALCULUS AB SUB ) ) ) AND NO ECON 105A"
            },
            {
                "prerequisite_text": "( ECON 100A OR ECON 105A ) AND NO ECON 105B"
            },
            {
                "prerequisite_text": "( ECON 100B OR ECON 105B ) AND NO ECON 105C"
            },
            {
                "prerequisite_text": "MATH 3A AND ( ECON 20B OR AP ECONOMICS:MACRO ) AND ( ECON 20A OR AP ECONOMICS:MICRO ) AND ( AP CALCULUS BC OR ( MATH 2B AND ( MATH 2A OR AP CALCULUS AB OR AP CALCULUS AB SUB ) ) ) AND NO ECON 100A"
            },
            {
                "prerequisite_text": " ECON 105A"
            },
            {
                "prerequisite_text": " ECON 105B"
            },
            {
                "prerequisite_text": " ECON 100A or ECON 105A"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ECON 20B OR AP ECONOMICS:MACRO ) AND ( ECON 20A OR AP ECONOMICS:MICRO )"
            },
            {
                "prerequisite_text": " (ECON 15B or STAT 120B) and (ECON 100A or ECON 105A)"
            },
            {
                "prerequisite_text": " ECON 116A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 100A or ECON 105A and (ECON 15B or MATH 130B or MATH 133A or STAT 120C)"
            },
            {
                "prerequisite_text": " ECON 122A"
            },
            {
                "prerequisite_text": " ECON 15A and ECON 15B and ECON 122A and ECON 122B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": "MATH 3A AND ( MATH 130C OR STATS 120C ) AND ( ECON 100A OR ECON 105A ) AND ( ECON 100B OR ECON 105B ) AND ( ECON 100C OR ECON 105C ) AND ( AP CALCULUS BC OR ( MATH 2B AND ( MATH 2A OR AP CALCULUS AB OR AP CALCULUS AB SUB ) ) ) AND NO ECON 122B AND NO ECON 122A"
            },
            {
                "prerequisite_text": " ECON 123A"
            },
            {
                "prerequisite_text": " ECON 123B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " ECON 122A"
            },
            {
                "prerequisite_text": " (ECON 100C or ECON 105C) and (ECON 122A or ECON 123A)"
            },
            {
                "prerequisite_text": " ECON 15B and ECON 100B"
            },
            {
                "prerequisite_text": " ECON 123A"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (ECON 15B or MATH 130B or STAT 120B) and (ECON 100B or ECON 105B)"
            },
            {
                "prerequisite_text": " ECON 15A and ECON 15B and (ECON 122A or ECON 123A) and (ECON 100A and ECON 100B and ECON 100C) or (ECON 105A and ECON 105B and ECON 105C) or (MATH 130A and STAT 120A and STAT 120B and STAT 120C) or MATH 130B or MATH 133A"
            },
            {
                "prerequisite_text": " ECON 100A or ECON 105A"
            },
            {
                "prerequisite_text": " (ECON 100A and ECON 100B and ECON 100C) or (ECON 105A and ECON 105B and ECON 105C) and (ECON 15A or MATH 130A or STAT 120A) and (ECON 15B or MATH 130B or STAT 120B)"
            },
            {
                "prerequisite_text": " ECON 134A or MGMT 109"
            },
            {
                "prerequisite_text": " MATH 3A or MATH H3A"
            },
            {
                "prerequisite_text": " ECON 122A or ECON 123A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": "( AP CALCULUS BC OR ( MATH 2B AND ( MATH 2A OR AP CALCULUS AB ) ) )"
            },
            {
                "prerequisite_text": " (ECON 100A and ECON 100B) or (ECON 105A and ECON 105B)"
            },
            {
                "prerequisite_text": " (ECON 122A or ECON 123A) and (ECON 100B or ECON 105B)"
            },
            {
                "prerequisite_text": " (ECON 100A and ECON 100B) or (ECON 105A and ECON 105B)"
            },
            {
                "prerequisite_text": " (ECON 100A and ECON 100B) or (ECON 105A and ECON 105B)"
            },
            {
                "prerequisite_text": " (ECON 15A and ECON 15B) and (ECON 100A and ECON 100B) or (ECON 105A and ECON 105B)"
            },
            {
                "prerequisite_text": " (ECON 100A and ECON 100B) or (ECON 105A and ECON 105B). Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " ECON 15A and (ECON 100A or ECON 105A)"
            },
            {
                "prerequisite_text": "ECON 20A AND ECON 100A AND ( ECON 20B OR AP ECONOMICS:MACRO )"
            },
            {
                "prerequisite_text": "ECON 100A AND ( ECON 20B OR AP ECONOMICS:MACRO ) AND ( ECON 20A OR AP ECONOMICS:MICRO )"
            },
            {
                "prerequisite_text": " ECON 100A or ECON 105A"
            },
            {
                "prerequisite_text": " (ECON 15A or STAT 120A) and (ECON 15B or STAT 120B) and (ECON 122A or ECON 123A) and (ECON 100A or ECON 105A) and (ECON 100B or ECON 105B) and (ECON 100C or ECON 105C). Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " (ECON 100A and ECON 100B) or (ECON 105A and ECON 105B)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 122A or ECON 123A"
            },
            {
                "prerequisite_text": " (ECON 100A or ECON 105A) and (ECON 100B or ECON 105B)"
            },
            {
                "prerequisite_text": " ECON 100A"
            },
            {
                "prerequisite_text": " (ECON 100A and ECON 100B) or (ECON 105A and ECON 105B)"
            },
            {
                "prerequisite_text": " (ANTH 10A and ANTH 10B and ANTH 10C) or (SOCL 10A and SOCL 10B and SOCL 10C) or (SSCI 10A and SSCI 10B and SSCI 10C) or (MATH 2A and MATH 2B and (STAT 7 or MGMT 7)) or (STAT 120A and STAT 120B and STAT 120C) or (ECON 15A and ECON 15B)"
            },
            {
                "prerequisite_text": "ECON 100A"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " (ECON 15A and ECON 15B) and (ECON 100A and ECON 100B) or (ECON 105A and ECON 105B)"
            },
            {
                "prerequisite_text": "( ECON 20B OR AP ECONOMICS:MACRO )"
            },
            {
                "prerequisite_text": " ECON 15A and ECON 15B and ECON 100A and ECON 100B and ECON 100C and ECON 122A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 20A or ECON 20B or ECON 13 or IS 13"
            },
            {
                "prerequisite_text": "( ECON 20B OR AP ECONOMICS:MACRO ) AND ( ECON 20A OR AP ECONOMICS:MICRO )"
            },
            {
                "prerequisite_text": " ECON 15A and ECON 100A"
            },
            {
                "prerequisite_text": "( AP CALCULUS BC OR ( MATH 2B AND ( MATH 2A OR AP CALCULUS AB OR AP CALCULUS AB SUB ) ) )"
            },
            {
                "prerequisite_text": " ECON 15A"
            },
            {
                "prerequisite_text": " (ECON 100A and ECON 100B) or (ECON 105A and ECON 105B) and (ECON 100C or ECON 105C)"
            },
            {
                "prerequisite_text": " (ECON 100A and ECON 100B) or (ECON 105A and ECON 105B) and (ECON 100C or ECON 105C)"
            },
            {
                "prerequisite_text": " ECON 161A and (ECON 100C or ECON 105C)"
            },
            {
                "prerequisite_text": " (ECON 15A or STAT 120A) and (ECON 15B or STAT 120B) and (ECON 100A and ECON 100B and ECON 100C) or (ECON 105A and ECON 105B and ECON 105C)"
            },
            {
                "prerequisite_text": " ECON 100C or ECON 105C. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " ECON 20A and ECON 20B"
            },
            {
                "prerequisite_text": " ECON 100C or ECON 105C"
            },
            {
                "prerequisite_text": " (ECON 15A or STAT 120A) and (ECON 15B or STAT 120B) and (ECON 122A or ECON 123A) and (ECON 100A or ECON 105A) and (ECON 100B or ECON 105B) and (ECON 100C or ECON 105C)"
            },
            {
                "prerequisite_text": " ECON 100A or ECON 105A"
            },
            {
                "prerequisite_text": "ECON 100C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON H190A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 200A"
            },
            {
                "prerequisite_text": " ECON 200B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ECON 13 OR ECON 23 OR ECON 20A OR INTL ST 13 OR AP ECONOMICS:MICRO ) AND NO AP ECONOMICS:MACRO score of 4 or greater AND NO MGMT 4B AND ( BUSINESS ECONOMICS MAJORS ONLY OR ECONOMICS MAJORS ONLY OR QUANTITATIVE ECON MAJORS ONLY OR INTERNATIONL STUDIES MAJORS ONLY OR CIVIL ENGINEERING MAJORS ONLY OR ENVIRONMENTAL ENGR MAJORS ONLY OR MECHANICAL ENGR MAJORS ONLY OR AEROSPACE ENGR MAJORS ONLY OR BUSINESS INFO MGMT MAJORS ONLY OR BUSINESS ADMIN MAJORS ONLY OR UNDECLARED MAJORS ONLY )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 210A"
            },
            {
                "prerequisite_text": " ECON 210B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 210D"
            },
            {
                "prerequisite_text": " ECON 210E"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 220A"
            },
            {
                "prerequisite_text": " ECON 220B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 220A and ECON 220B and ECON 220C"
            },
            {
                "prerequisite_text": " ECON 220A and ECON 220B and ECON 220C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 210A and ECON 210B and ECON 210C and ECON 210D and ECON 210E and ECON 210F"
            },
            {
                "prerequisite_text": " ECON 210A and ECON 210B and ECON 210C and ECON 210D and ECON 210E and ECON 210F"
            },
            {
                "prerequisite_text": " ECON 210A and ECON 210B and ECON 210C and ECON 220A and ECON 220B"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " ECON 100B and ECON 203A"
            },
            {
                "prerequisite_text": " ECON 241A and ECON 100B and ECON 203A"
            },
            {
                "prerequisite_text": " ECON 210A and ECON 210B and ECON 210C and ECON 220A and ECON 220B"
            },
            {
                "prerequisite_text": " ECON 210A and ECON 210B and ECON 210C"
            },
            {
                "prerequisite_text": " ECON 243A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": "( ECON 20A OR AP ECONOMICS:MICRO ) AND NO MGMT 30A"
            },
            {
                "prerequisite_text": " ECON 203A"
            },
            {
                "prerequisite_text": " ECON 203A"
            },
            {
                "prerequisite_text": " ECON 203A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 210A and ECON 210B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 270A"
            },
            {
                "prerequisite_text": " ECON 270B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 210A and ECON 210B and ECON 210C"
            },
            {
                "prerequisite_text": " ECON 210A and ECON 210B and ECON 210C"
            },
            {
                "prerequisite_text": " ECON 210A and ECON 210B and ECON 210C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " ECON 210A"
            },
            {
                "prerequisite_text": " ECON 210A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECON 282A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ECPS 202 or ECPS 203 or ECPS 216"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Must be able to communicate in Spanish."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 120A or PSCI 192X or PSCI 184S"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 122A"
            },
            {
                "prerequisite_text": " EDUC 122B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 50"
            },
            {
                "prerequisite_text": " EDUC 126"
            },
            {
                "prerequisite_text": " EDUC 126 and EDUC 127A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (PS 105 or BIOL 101) and EDUC 55. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " (PS 105 or BIOL 101) and EDUC 55 and EDUC 143AW and EDUC 148. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (PS 105 or BIOL 101) and EDUC 55 and EDUC 143AW"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 10 or SE 10"
            },
            {
                "prerequisite_text": " Recommended: 1 unit of EDUC 199."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 10"
            },
            {
                "prerequisite_text": " EDUC 10 and EDUC 15"
            },
            {
                "prerequisite_text": " (PS 105 or BIOL 101) and EDUC 55 and EDUC 143AW and EDUC 143BW and EDUC 148"
            },
            {
                "prerequisite_text": " EDUC 10 and EDUC 15"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( PSCI 9 OR PSCI 11A OR PSCI 11B OR PSCI 11C OR PSYCH 7A OR PSY BEH 9 OR PSY BEH 11A OR PSY BEH 11B OR PSY BEH 11C )"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 160"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: EDUC 288B."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 288A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 246"
            },
            {
                "prerequisite_text": " EDUC 246"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 288A. EDUC 288A with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 222"
            },
            {
                "prerequisite_text": " EDUC 283A or EDUC 283B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 222"
            },
            {
                "prerequisite_text": " EDUC 283A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 281"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 288A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EDUC 323A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PS 5 or BIOL 14"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( MATH 2A OR AP CALCULUS AB OR AP CALCULUS BC OR AP CALCULUS AB SUB )"
            },
            {
                "prerequisite_text": "( EECS 50 OR EECS 150 )"
            },
            {
                "prerequisite_text": "EECS 112 AND ( EECS 114 OR I&C SCI 46 )"
            },
            {
                "prerequisite_text": "EECS 31L"
            },
            {
                "prerequisite_text": "EECS 112"
            },
            {
                "prerequisite_text": "EECS 112"
            },
            {
                "prerequisite_text": "EECS 40"
            },
            {
                "prerequisite_text": "( EECS 114 OR I&C SCI 33 )"
            },
            {
                "prerequisite_text": "EECS 20 AND EECS 112 AND EECS 114"
            },
            {
                "prerequisite_text": "EECS 114"
            },
            {
                "prerequisite_text": "EECS 112 AND EECS 170B"
            },
            {
                "prerequisite_text": "( MATH 2A OR AP CALCULUS AB OR AP CALCULUS BC OR AP CALCULUS AB SUB )"
            },
            {
                "prerequisite_text": " (EECS 12 or CS 152) and EECS 114"
            },
            {
                "prerequisite_text": " EECS 22 or ICS 45C"
            },
            {
                "prerequisite_text": "EECS 55 AND EECS 150"
            },
            {
                "prerequisite_text": "EECS 141A"
            },
            {
                "prerequisite_text": "EECS 180A"
            },
            {
                "prerequisite_text": "MATH 3D"
            },
            {
                "prerequisite_text": "( EECS 55 OR STATS 67 )"
            },
            {
                "prerequisite_text": "EECS 145 AND EECS 70A"
            },
            {
                "prerequisite_text": "EECS 50"
            },
            {
                "prerequisite_text": "EECS 152A"
            },
            {
                "prerequisite_text": "( EECS 113 OR EECS 170C OR COMPSCI 145 )"
            },
            {
                "prerequisite_text": "EECS 159A"
            },
            {
                "prerequisite_text": "EECS 150 AND EECS 170B AND EECS 170LB AND ( BME 60B OR EECS 10 OR EECS 12 OR ENGRCEE 20 OR ENGRMAE 10 )"
            },
            {
                "prerequisite_text": "EECS 160A"
            },
            {
                "prerequisite_text": "EECS 70B"
            },
            {
                "prerequisite_text": "EECS 163"
            },
            {
                "prerequisite_text": "EECS 160A AND EECS 170C"
            },
            {
                "prerequisite_text": "EECS 70B AND PHYSICS 7D AND PHYSICS 7E"
            },
            {
                "prerequisite_text": "EECS 70B AND EECS 170A AND EECS 170LA AND EECS 170LB"
            },
            {
                "prerequisite_text": "EECS 170B AND EECS 170LB"
            },
            {
                "prerequisite_text": "EECS 170C AND EECS 170LC"
            },
            {
                "prerequisite_text": "EECS 170C"
            },
            {
                "prerequisite_text": "EECS 70B AND EECS 170A AND PHYSICS 7D AND PHYSICS 7E"
            },
            {
                "prerequisite_text": "EECS 170A AND EECS 170LA"
            },
            {
                "prerequisite_text": "EECS 170B AND EECS 170C AND EECS 170LB"
            },
            {
                "prerequisite_text": "EECS 170A"
            },
            {
                "prerequisite_text": "EECS 170A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "EECS 145 AND PHYSICS 7E"
            },
            {
                "prerequisite_text": "EECS 180A"
            },
            {
                "prerequisite_text": "EECS 180B"
            },
            {
                "prerequisite_text": "EECS 180A"
            },
            {
                "prerequisite_text": "EECS 180A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "EECS 12"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: Undergraduate-level knowledge of system software (e.g. EECS 111) and organization of digital computers (e.g. UCI EECS 112)."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: Undergraduate-level knowledge of organization of digital computers (e.g. EECS 112 and EECS 112L)."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: Undergraduate course work in engineering data structures and algorithms."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: Undergraduate-level knowledge of organization of digital computers (e.g. EECS 112)."
            },
            {
                "prerequisite_text": "( EECS 10 OR EECS 20 )"
            },
            {
                "prerequisite_text": " EECS 213"
            },
            {
                "prerequisite_text": " EECS 213P"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EECS 211 and EECS 213"
            },
            {
                "prerequisite_text": " EECS 211P and EECS 213P"
            },
            {
                "prerequisite_text": " EECS 215 or CS 260"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "EECS 119 AND EECS 217"
            },
            {
                "prerequisite_text": "EECS 22"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: Knowledge of engineering probability (e.g. EECS 55)."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EECS 241A"
            },
            {
                "prerequisite_text": " EECS 241AP"
            },
            {
                "prerequisite_text": " EECS 240"
            },
            {
                "prerequisite_text": " EECS 240"
            },
            {
                "prerequisite_text": " EECS 241B"
            },
            {
                "prerequisite_text": " EECS 241BP"
            },
            {
                "prerequisite_text": " EECS 242"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EECS 148 or CS 132"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: Knowledge of digital signal processing (e.g. EECS 152A)."
            },
            {
                "prerequisite_text": " EECS 240"
            },
            {
                "prerequisite_text": " EECS 240"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EECS 267A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: Introductory knowledge of control systems (e.g. EECS 160A) and electronics (e.g. EECS 170C)."
            },
            {
                "prerequisite_text": " EECS 270A"
            },
            {
                "prerequisite_text": " EECS 270AP"
            },
            {
                "prerequisite_text": " EECS 270A"
            },
            {
                "prerequisite_text": " EECS 270A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EECS 270AP. EECS 270AP with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EECS 280A"
            },
            {
                "prerequisite_text": " Recommended: Knowledge of engineering electromagnetics (e.g. EECS 180A)."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EECS 280AP"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Undergraduate course work in electromagnetic theory and atomic physics."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Undergraduate-level Engineering Electromagnetics I (e.g. EECS E80A)."
            },
            {
                "prerequisite_text": " Required: Knowledge of undergraduate-level basic physics."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( EECS 10 OR EECS 12 OR ENGRMAE 10 OR I&C SCI 31 )"
            },
            {
                "prerequisite_text": "EECS 31 AND ( EECS 10 OR EECS 12 OR I&C SCI 32 )"
            },
            {
                "prerequisite_text": "EECS 22L"
            },
            {
                "prerequisite_text": "EECS 70A"
            },
            {
                "prerequisite_text": "MATH 2D"
            },
            {
                "prerequisite_text": "MATH 3D AND PHYSICS 7D AND ( EECS 10 OR EECS 12 OR ENGRCEE 20 OR ENGRMAE 10 OR I&C SCI 31 OR AP COMP SCI A OR AP COMP SCI AB )"
            },
            {
                "prerequisite_text": "EECS 70A AND ( BME 60B OR EECS 10 OR EECS 12 OR ENGRCEE 20 OR ENGRMAE 10 OR I&C SCI 31 )"
            },
            {
                "prerequisite_text": "EECS 70A AND PHYSICS 7D AND ( BME 60B OR EECS 10 OR EECS 12 OR ENGRCEE 20 OR ENGRMAE 10 )"
            },
            {
                "prerequisite_text": "EECS 70A AND EECS 70B AND ( BME 60B OR EECS 10 OR EECS 12 OR ENGRCEE 20 OR ENGRMAE 10 OR I&C SCI 31 )"
            },
            {
                "prerequisite_text": " EHS 206B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBH 277A or EHS 206A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBH 277B or EHS 206B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 2A and STAT 7"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ENGLISH 15 AND ( ENGLISH 8 OR ENGLISH 9 OR ENGLISH 10 OR ENGLISH 11 OR ENGLISH 12 OR ENGLISH 16 OR ENGLISH 17 OR LIT JRN 20 OR LIT JRN 21 )"
            },
            {
                "prerequisite_text": "ENGLISH 15 AND ( ENGLISH 8 OR ENGLISH 9 OR ENGLISH 10 OR ENGLISH 11 OR ENGLISH 12 OR ENGLISH 16 OR ENGLISH 17 OR LIT JRN 20 OR LIT JRN 21 )"
            },
            {
                "prerequisite_text": "ENGLISH 15 AND ( ENGLISH 8 OR ENGLISH 9 OR ENGLISH 10 OR ENGLISH 11 OR ENGLISH 12 OR ENGLISH 16 OR ENGLISH 17 OR LIT JRN 20 OR LIT JRN 21 )"
            },
            {
                "prerequisite_text": "ENGLISH 15 AND ( ENGLISH 8 OR ENGLISH 9 OR ENGLISH 10 OR ENGLISH 11 OR ENGLISH 12 OR ENGLISH 16 OR ENGLISH 17 OR LIT JRN 20 OR LIT JRN 21 )"
            },
            {
                "prerequisite_text": "ENGLISH 15 AND ( ENGLISH 8 OR ENGLISH 9 OR ENGLISH 10 OR ENGLISH 11 OR ENGLISH 12 OR ENGLISH 16 OR ENGLISH 17 OR LIT JRN 20 OR LIT JRN 21 )"
            },
            {
                "prerequisite_text": "ENGLISH 15 AND ( ENGLISH 8 OR ENGLISH 9 OR ENGLISH 10 OR ENGLISH 11 OR ENGLISH 12 OR ENGLISH 16 OR ENGLISH 17 OR LIT JRN 20 OR LIT JRN 21 )"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": "( ENGLISH 101W OR WRITING 101W ) AND ( ENGLISH 100 OR ENGLISH 103 OR ENGLISH 105 OR ENGLISH 102A OR ENGLISH 102B OR ENGLISH 102C OR ENGLISH 102D )"
            },
            {
                "prerequisite_text": "( WRITING 50 OR WRITING 39B )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MATH 3A AND ( ENGR 30 OR ENGRCEE 30 OR ENGRMAE 30 )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ENGR 199 AND LOWER DIVISION WRITING"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MATH 2D AND PHYSICS 7C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PHYSICS 7C AND ( CHEM 1A OR ENGR 1A OR CHEM H2A OR AP CHEMISTRY )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ENGR 7A"
            },
            {
                "prerequisite_text": "MATH 2D AND PHYSICS 7C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MATH 3A AND ( EECS 10 OR EECS 12 OR ENGRCEE 20 OR ENGRMAE 10 OR I&C SCI 31 OR AP COMP SCI A OR AP COMP SCI AB )"
            },
            {
                "prerequisite_text": "ENGRCEE 11"
            },
            {
                "prerequisite_text": "MATH 3D AND ( MATH 3A OR I&C SCI 6N )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ENGRCEE 11 AND ENGRCEE 81A"
            },
            {
                "prerequisite_text": "ENGRCEE 11 AND ENGRCEE 121"
            },
            {
                "prerequisite_text": "ENGRCEE 110 AND ENGRCEE 121"
            },
            {
                "prerequisite_text": "ENGRCEE 121"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ENGRCEE 150 AND ENGRCEE 170"
            },
            {
                "prerequisite_text": "ENGRCEE 130"
            },
            {
                "prerequisite_text": "ENGRCEE 11 AND ENGRCEE 20 AND ENGRCEE 151A"
            },
            {
                "prerequisite_text": "( ENGR 30 OR ENGRCEE 30 OR ENGRMAE 30 )"
            },
            {
                "prerequisite_text": "ENGRCEE 150 AND ( ENGR 30 OR ENGRCEE 30 OR ENGRMAE 30 )"
            },
            {
                "prerequisite_text": "( ENGRCEE 150 OR ENGRMAE 150 )"
            },
            {
                "prerequisite_text": "ENGRCEE 151A"
            },
            {
                "prerequisite_text": "ENGRCEE 151A"
            },
            {
                "prerequisite_text": "ENGRCEE 151C"
            },
            {
                "prerequisite_text": "ENGRCEE 151A"
            },
            {
                "prerequisite_text": "ENGRCEE 130 AND ENGRCEE 151C"
            },
            {
                "prerequisite_text": "ENGRCEE 170 AND ( CHEM 1B OR CHEM H2B )"
            },
            {
                "prerequisite_text": "( CHEM 51A OR CHEM H52A ) AND ( CHEM 1B OR CHEM H2B ) AND ( CHEM 1LC OR CHEM 1LE OR CHEM H2LB OR CHEM M2LB ) AND ( CHEM 1A OR ENGR 1A OR CHEM H2A OR AP CHEMISTRY )"
            },
            {
                "prerequisite_text": "ENGRCEE 160"
            },
            {
                "prerequisite_text": "ENGRCEE 160"
            },
            {
                "prerequisite_text": "ENGRCEE 160 AND ( CBE 40C OR ENGRMAE 91 )"
            },
            {
                "prerequisite_text": "ENGRCEE 160"
            },
            {
                "prerequisite_text": "MATH 2E AND ENGRCEE 20 AND PHYSICS 7C"
            },
            {
                "prerequisite_text": "ENGRCEE 170"
            },
            {
                "prerequisite_text": "( CBE 120A OR ENGRCEE 170 OR ENGRMAE 130A )"
            },
            {
                "prerequisite_text": "ENGRCEE 170 AND ENGRCEE 176"
            },
            {
                "prerequisite_text": "( ENGRCEE 170 OR ENGRMAE 130A )"
            },
            {
                "prerequisite_text": "( CBE 120A OR ENGRCEE 170 OR ENGRMAE 130A ) AND ( BME 60B OR ENGRCEE 20 OR ENGRMAE 10 )"
            },
            {
                "prerequisite_text": "ENGRCEE 110 AND ENGRCEE 81A AND ENGRCEE 81B AND ( ENGRCEE 121 OR ENGRCEE 162 OR ENGRCEE 171 OR ENGRCEE 151C )"
            },
            {
                "prerequisite_text": "ENGRCEE 130 AND ENGRCEE 181A"
            },
            {
                "prerequisite_text": "ENGRCEE 181B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MATH 3A"
            },
            {
                "prerequisite_text": "MATH 3D AND ( BME 60B OR ENGRCEE 20 ) AND ( MATH 3A OR I&C SCI 6N )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRCEE 220A"
            },
            {
                "prerequisite_text": " ENGRCEE 220A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRCEE 221A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRCEE 223"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRCEE 226A"
            },
            {
                "prerequisite_text": " ENGRCEE 220A"
            },
            {
                "prerequisite_text": " ENGRCEE 221A and ENGRCEE 228A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRCEE 229A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ENGR 80 OR ENGRCEE 80 OR ENGRMAE 80 )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRCEE 247 and ENGRCEE 249"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ENGRCEE 263 OR ENGRCEE 265 )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ENGRMAE 278"
            },
            {
                "prerequisite_text": "ENGRCEE 272 AND ENGRCEE 277 AND ENGRCEE 278"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRCEE 276"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MATH 2D AND PHYSICS 7C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MATH 2D AND PHYSICS 7C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ENGR H199 AND LOWER DIVISION WRITING AND CAMPUSWIDE HONORS ONLY"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( MATH 2A OR MATH 5A OR AP CALCULUS AB OR AP CALCULUS BC OR AP CALCULUS AB SUB )"
            },
            {
                "prerequisite_text": "( EECS 70A OR ENGRMAE 60 )"
            },
            {
                "prerequisite_text": "ENGRMAE 120"
            },
            {
                "prerequisite_text": "ENGRMAE 130B"
            },
            {
                "prerequisite_text": "ENGRMAE 115"
            },
            {
                "prerequisite_text": "ENGRMAE 135"
            },
            {
                "prerequisite_text": "ENGRMAE 112"
            },
            {
                "prerequisite_text": "ENGRMAE 115"
            },
            {
                "prerequisite_text": "( CBE 40B OR MSE 65A OR ENGRMAE 91 )"
            },
            {
                "prerequisite_text": "( CBE 40B OR ENGRMAE 91 )"
            },
            {
                "prerequisite_text": "ENGRMAE 115"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ENGRMAE 130B"
            },
            {
                "prerequisite_text": "MATH 2D AND MATH 2E AND MATH 3D AND ENGRMAE 91 AND PHYSICS 7C AND ( ENGR 80 OR ENGRCEE 80 OR ENGRMAE 80 ) AND ( ENGR 30 OR ENGRCEE 30 OR ENGRMAE 30 )"
            },
            {
                "prerequisite_text": "ENGRMAE 130A"
            },
            {
                "prerequisite_text": " ENGRMAE 130B"
            },
            {
                "prerequisite_text": "ENGRMAE 130B"
            },
            {
                "prerequisite_text": "ENGRMAE 130A"
            },
            {
                "prerequisite_text": "ENGRMAE 130B"
            },
            {
                "prerequisite_text": "ENGRMAE 52 AND ( MATH 3A OR I&C SCI 6N ) AND ( ENGR 80 OR ENGRCEE 80 OR ENGRMAE 80 )"
            },
            {
                "prerequisite_text": "( ENGR 80 OR ENGRCEE 80 OR ENGRMAE 80 )"
            },
            {
                "prerequisite_text": "MATH 2E AND MATH 3D AND ( ENGR 80 OR ENGRCEE 80 OR ENGRMAE 80 )"
            },
            {
                "prerequisite_text": " ENGRMAE 150"
            },
            {
                "prerequisite_text": "MATH 3A AND ( ENGR 30 OR ENGRCEE 30 OR ENGRMAE 30 )"
            },
            {
                "prerequisite_text": "( ENGR 150 OR ENGRMAE 150 ) AND ( ENGR 30 OR ENGRCEE 30 OR ENGRMAE 30 )"
            },
            {
                "prerequisite_text": "ENGRMAE 120 AND ENGRMAE 145 AND ENGRMAE 170"
            },
            {
                "prerequisite_text": "ENGRMAE 120 AND ( ENGR 150 OR ENGRMAE 150 )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ENGR 54 AND ( ENGR 150 OR ENGRCEE 150 OR ENGRMAE 150 )"
            },
            {
                "prerequisite_text": "ENGR 54"
            },
            {
                "prerequisite_text": "( ENGR 150 OR ENGRCEE 150 OR ENGRMAE 150 )"
            },
            {
                "prerequisite_text": "ENGRMAE 130A"
            },
            {
                "prerequisite_text": "ENGRMAE 112 AND ENGRMAE 136 AND ENGRMAE 158"
            },
            {
                "prerequisite_text": " ENGRMAE 80 or ENGRMAE 91 or ENGRMAE 107"
            },
            {
                "prerequisite_text": "ENGRMAE 91 AND ( ENGRCEE 170 OR ENGRMAE 130A )"
            },
            {
                "prerequisite_text": "( ENGR 80 OR ENGRCEE 80 OR ENGRMAE 80 )"
            },
            {
                "prerequisite_text": "ENGRMAE 170"
            },
            {
                "prerequisite_text": "ENGRMAE 60 AND ENGRMAE 170"
            },
            {
                "prerequisite_text": "ENGRMAE 106"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( MATH 2J OR MATH 3A )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MATH 2E AND MATH 3D AND ( EECS 10 OR EECS 12 OR ENGRMAE 10 )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRMAE 200A and ENGRMAE 200B. Knowledge of linear differential equations."
            },
            {
                "prerequisite_text": " ENGRMAE 200A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRMAE 224 or ENGRMAE 230B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Required: Undergraduate-level knowledge of applied engineering thermodynamics."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRMAE 214A"
            },
            {
                "prerequisite_text": " ENGRMAE 214A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRMAE 200A and (ENGRMAE 230A or ENGRMAE 270A)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Required: Knowledge of applied engineering thermodynamics."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRMAE 230B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRMAE 230A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Undergraduate-level heat transfer is recommended."
            },
            {
                "prerequisite_text": " Required: Undergraduate-level knowledge of heat transfer."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRMAE 230A or ENGRMAE 230B"
            },
            {
                "prerequisite_text": " ENGRMAE 230A and ENGRMAE 230B"
            },
            {
                "prerequisite_text": " ENGRMAE 200B and ENGRMAE 230A and ENGRMAE 230B"
            },
            {
                "prerequisite_text": " ENGRMAE 230C"
            },
            {
                "prerequisite_text": "ENGRMAE 203 AND ENGRMAE 230C"
            },
            {
                "prerequisite_text": " ENGRMAE 230A is recommended."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRMAE 254"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRMAE 261 or CHEM 245 or EARTHSS 240"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ENGRMAE 270A"
            },
            {
                "prerequisite_text": " ENGRMAE 270A"
            },
            {
                "prerequisite_text": "ENGRMAE 241 AND ENGRMAE 270A"
            },
            {
                "prerequisite_text": " ENGRMAE 200A and ENGRMAE 270A"
            },
            {
                "prerequisite_text": "ENGRMAE 270B"
            },
            {
                "prerequisite_text": " ENGRMAE 200A and ENGRMAE 270A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGRMAE 200A and ENGRMAE 270A"
            },
            {
                "prerequisite_text": " ENGRMAE 270A and ENGRMAE 241"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MATH 2D AND PHYSICS 7C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MATH 3D AND PHYSICS 7D AND PHYSICS 7LD"
            },
            {
                "prerequisite_text": "MATH 2D AND PHYSICS 7C"
            },
            {
                "prerequisite_text": "MATH 2D AND PHYSICS 7C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 206A. PUBHLTH 206A with a grade of B or better"
            },
            {
                "prerequisite_text": " EPIDEM 200A and EPIDEM 200B. EPIDEM 200A with a grade of B or better. EPIDEM 200B with a grade of B or better"
            },
            {
                "prerequisite_text": " EPIDEM 203 or PUBHLTH 203 or PUBH 206"
            },
            {
                "prerequisite_text": " PUBHLTH 203 or EPIDEM 203 or PUBH 206"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EPIDEM 204. EPIDEM 204 with a grade of B or better"
            },
            {
                "prerequisite_text": " EPIDEM 204B. EPIDEM 204B with a grade of B or better"
            },
            {
                "prerequisite_text": " EPIDEM 200 and EPIDEM 204"
            },
            {
                "prerequisite_text": " EPIDEM 200A and EPIDEM 204A. EPIDEM 200A with a grade of B or better. EPIDEM 204A with a grade of B or better"
            },
            {
                "prerequisite_text": " Two quarters of upper-division or graduate training in statistical methods."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Medical degree."
            },
            {
                "prerequisite_text": " Advancement to candidacy."
            },
            {
                "prerequisite_text": " Advancement to candidacy."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " FIN 249. FIN 249 with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " FIN 210. FIN 210 with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " FIN 249. FIN 249 with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement. "
            },
            {
                "prerequisite_text": " FLM&MDA 85A and FLM&MDA 101B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A and FLM&MDA 85B and FLM&MDA 85C and (FLM&MDA 101A or FLM&MDA 101B or FLM&MDA 101C). Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A and FLM&MDA 85B and FLM&MDA 85C and FLM&MDA 120A and (FLM&MDA 101A or FLM&MDA 101B or FLM&MDA 101C). Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 117A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 117B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 118A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 120A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 120B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A or FLM&MDA 85B or FLM&MDA 85C. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85C. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85B or FLM&MDA 85C. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 85A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 120A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FLM&MDA 117A or FLM&MDA 118A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (FLM&MDA 85A and FLM&MDA 117A and FLM&MDA 117B and FLM&MDA 117C) or (FLM&MDA 120A and FLM&MDA 120B and FLM&MDA 120C). Satisfactory completion of the Lower-Division Writing requirement. Recommended: FLM&MDA 101A."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " FLM&MDA 285A and FLM&MDA 285B and FLM&MDA 285C and FLM&MDA 286A and FLM&MDA 286B and FLM&MDA 286C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " FLM&MDA 285A and FLM&MDA 285B and FLM&MDA 285C and FLM&MDA 286A and FLM&MDA 286B and FLM&MDA 286C"
            },
            {
                "prerequisite_text": " FLM&MDA 298"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfaction of the UC Entry Level Writing requirement."
            },
            {
                "prerequisite_text": " Satisfaction of the UC Entry Level Writing requirement. "
            },
            {
                "prerequisite_text": " Satisfaction of the UC Entry Level Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH S2BC"
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH S2BC"
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH S2BC"
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH 2BC or FRENCH S2BC. FRENCH 2C with a grade of C or better. FRENCH 2BC with a grade of C or better. FRENCH S2BC with a grade of C or better"
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH 2BC or FRENCH S2BC. FRENCH 2C with a grade of C or better. FRENCH 2BC with a grade of C or better. FRENCH S2BC with a grade of C or better"
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH 2BC or FRENCH S2BC. FRENCH 2C with a grade of C or better. FRENCH 2BC with a grade of C or better. FRENCH S2BC with a grade of C or better"
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH 2BC or FRENCH S2BC. FRENCH 2C with a grade of C or better. FRENCH 2BC with a grade of C or better. FRENCH S2BC with a grade of C or better"
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH 2BC or FRENCH S2BC. FRENCH 2C with a grade of C or better. FRENCH 2BC with a grade of C or better. FRENCH S2BC with a grade of C or better"
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH 2BC or FRENCH S2BC. FRENCH 2C with a grade of C or better. FRENCH 2BC with a grade of C or better. FRENCH S2BC with a grade of C or better"
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH 2BC or FRENCH S2BC. FRENCH 2C with a grade of C or better. FRENCH 2BC with a grade of C or better. FRENCH S2BC with a grade of C or better"
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH 2BC or FRENCH S2BC. FRENCH 2C with a grade of C or better. FRENCH 2BC with a grade of C or better. FRENCH S2BC with a grade of C or better"
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH 2BC or FRENCH S2BC. FRENCH 2C with a grade of C or better. FRENCH 2BC with a grade of C or better. FRENCH S2BC with a grade of C or better"
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH 2BC or FRENCH S2BC. FRENCH 2C with a grade of C or better. FRENCH 2BC with a grade of C or better. FRENCH S2BC with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " FRENCH 2C or FRENCH 2BC or FRENCH S2BC. FRENCH 2C with a grade of C or better. FRENCH 2BC with a grade of C or better. FRENCH S2BC with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " FRENCH 100A and FRENCH 100B and FRENCH 101A and FRENCH 101B and FRENCH 101C. One course from FRENCH 101A, FRENCH 101B, or FRENCH 101C may be taken as a corequisite."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Two years of high school Spanish, one semester of college Spanish, or heritage speaker of Spanish. "
            },
            {
                "prerequisite_text": " FRENCH 1A. FRENCH 1A with a grade of C or better"
            },
            {
                "prerequisite_text": " FRENCH 1AB or FRENCH 1B or FRENCH S1AB. FRENCH 1AB with a grade of C or better. FRENCH 1B with a grade of C or better. FRENCH S1AB with a grade of C or better. Placement into FRENCH 1BC is also accepted."
            },
            {
                "prerequisite_text": " FRENCH 1ABSP or FRENCH 1AB or FRENCH S1AB or FRENCH 1B. FRENCH 1ABSP with a grade of C or better. FRENCH 1AB with a grade of C or better. FRENCH S1AB with a grade of C or better. FRENCH 1B with a grade of C or better. Two years of high school Spanish, one semester of college Spanish, or heritage speaker of Spanish. "
            },
            {
                "prerequisite_text": " FRENCH 1B. FRENCH 1B with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( FRENCH 1C OR FRENCH 1BC OR FRENCH S1BC OR FRENCH 1BCSP OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " FRENCH 1C or FRENCH 1BC or FRENCH S1BC. FRENCH 1C with a grade of C or better. FRENCH 1BC with a grade of C or better. FRENCH S1BC with a grade of C or better. Prior high school or college French is recommended. Placement into French 2AB is also accepted."
            },
            {
                "prerequisite_text": " FRENCH 2A. FRENCH 2A with a grade of C or better"
            },
            {
                "prerequisite_text": " FRENCH S2AB or FRENCH 2AB. FRENCH S2AB with a grade of C or better. FRENCH 2AB with a grade of C or better. Prior high school or college French is recommended. Placement into French 2BC is also accepted."
            },
            {
                "prerequisite_text": "( FRENCH 2B OR FRENCH S2AB )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " FRENCH S1AB or FRENCH 1B or FRENCH 1AB or FRENCH 1ABSP. FRENCH S1AB with a grade of C or better. FRENCH 1B with a grade of C or better. FRENCH 1AB with a grade of C or better. FRENCH 1ABSP with a grade of C or better"
            },
            {
                "prerequisite_text": " FRENCH 1C or FRENCH 1BC or FRENCH S1BC. FRENCH 1C with a grade of C or better. FRENCH 1BC with a grade of C or better. FRENCH S1BC with a grade of C or better. Placement into FRENCH S2AB is also accepted."
            },
            {
                "prerequisite_text": " FRENCH S2AB or FRENCH 2B. FRENCH S2AB with a grade of C or better. FRENCH 2B with a grade of C or better"
            },
            {
                "prerequisite_text": " GDIM 161. GDIM 161 with a grade of C or better"
            },
            {
                "prerequisite_text": " GDIM 27. GDIM 27 with a grade of C or better"
            },
            {
                "prerequisite_text": " GDIM 27 and GDIM 33"
            },
            {
                "prerequisite_text": " GDIM 33"
            },
            {
                "prerequisite_text": " GDIM 41"
            },
            {
                "prerequisite_text": " GDIM 27 and GDIM 33 and GDIM 51 and GDIM 61. GDIM 27 with a grade of C or better. GDIM 33 with a grade of C or better"
            },
            {
                "prerequisite_text": " GDIM 27 and GDIM 33 and GDIM 51 and GDIM 61. GDIM 27 with a grade of C or better. GDIM 33 with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ICS 168 or (GDIM 131 and GDIM 161). GDIM 161 with a grade of C or better"
            },
            {
                "prerequisite_text": " GDIM 167A or ICS 169A. GDIM 167A with a grade of C or better. ICS 169A with a grade of C or better. In Progress grade for GDIM 167A or ICS 169A also accepted."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " GDIM 25"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " GDIM 31"
            },
            {
                "prerequisite_text": " GDIM 32. GDIM 32 with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " GDIM 41 or ICS 60"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( AC ENG 139W OR ART HIS 190W OR ASIANAM 100W OR COM LIT 102W OR ENGLISH 101W OR FLM&MDA 139W OR GEN&SEX 139W OR HISTORY 100W OR WOMN ST 139W OR WRITING 101W OR WRITING 139W OR LIT JRN 101BW )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "GEN&SEX 200A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " GERMAN 2C. GERMAN 2C with a grade of C or better"
            },
            {
                "prerequisite_text": " GERMAN 2C. GERMAN 2C with a grade of C or better"
            },
            {
                "prerequisite_text": " GERMAN 2C. GERMAN 2C with a grade of C or better"
            },
            {
                "prerequisite_text": " GERMAN 2C. GERMAN 2C with a grade of C or better"
            },
            {
                "prerequisite_text": " GERMAN 2C. GERMAN 2C with a grade of C or better"
            },
            {
                "prerequisite_text": " GERMAN 101 or GERMAN 102 or GERMAN 103 or GERMAN 104 or GERMAN 105"
            },
            {
                "prerequisite_text": " GERMAN 101 or GERMAN 102 or GERMAN 103 or GERMAN 104 or GERMAN 105"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " GERMAN 2C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Placement into GERMAN 1AB."
            },
            {
                "prerequisite_text": " GERMAN 1A. GERMAN 1A with a grade of C or better. Placement into GERMAN 1B is also accepted."
            },
            {
                "prerequisite_text": " GERMAN 1AB or GERMAN 1B or GERMAN S1AB. GERMAN 1AB with a grade of C or better. GERMAN 1B with a grade of C or better. GERMAN S1AB with a grade of C or better. Placement into GERMAN 1BC is also accepted."
            },
            {
                "prerequisite_text": "( GERMAN 1B OR GERMAN 1SAB )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " GERMAN 1BC or GERMAN 1C or GERMAN S1BC. GERMAN 1BC with a grade of C or better. GERMAN 1C with a grade of C or better. GERMAN S1BC with a grade of C or better. Placement into GERMAN 2A is also accepted."
            },
            {
                "prerequisite_text": " GERMAN 2A. GERMAN 2A with a grade of C or better. Placement into GERMAN 2B is also accepted."
            },
            {
                "prerequisite_text": "( GERMAN 2B OR GERMAN S2AB )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " GERMAN 2C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " GERMAN 1AB or GERMAN 1B or GERMAN S1AB. GERMAN 1AB with a grade of C or better. GERMAN 1B with a grade of C or better. GERMAN S1AB with a grade of C or better. Placement into GERMAN S1BC is also accepted."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "GLBLCLT 103A AND GLBLCLT 103B AND UPPER DIVISION STANDING ONLY"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " GLBL ME 60A or GLBL ME 60B or GLBL ME 60C. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( GREEK 1C OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( GREEK 100 OR GREEK 100A OR GREEK 100B )"
            },
            {
                "prerequisite_text": " GREEK 100"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " GREEK 1A. GREEK 1A with a grade of C or better"
            },
            {
                "prerequisite_text": " GREEK 1B. GREEK 1B with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " HISTORY 12 or HISTORY 15A or HISTORY 15C or HISTORY 15D or HISTORY 16A or HISTORY 16B or HISTORY 16C or HISTORY 18A or HISTORY 21A or HISTORY 21B or HISTORY 21C or HISTORY 40A or HISTORY 40B or HISTORY 40C or HISTORY 60 or HISTORY 70A or HISTORY 70B or HISTORY 70C or HISTORY 70D or HISTORY 70E or HISTORY 70F. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " HISTORY 193. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " HISTORY 202A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " HISTORY 204A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfaction of the UC Entry Level Writing requirement."
            },
            {
                "prerequisite_text": " Satisfaction of the UC Entry Level Writing requirement."
            },
            {
                "prerequisite_text": " Satisfaction of the UC Entry Level Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "HUMAN 1A AND LOWER DIVISION STANDING ONLY"
            },
            {
                "prerequisite_text": "HUMAN 1A AND ( ENTRY LEVEL WRITING OR PLACEMENT EXAM or authorization ) AND LOWER DIVISION STANDING ONLY"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "HUMAN 1B AND HUMAN 1AES AND LOWER DIVISION STANDING ONLY"
            },
            {
                "prerequisite_text": "HUMAN 1B AND ( ENTRY LEVEL WRITING OR PLACEMENT EXAM or authorization ) AND LOWER DIVISION STANDING ONLY"
            },
            {
                "prerequisite_text": " HUMAN 1A or HUMAN 1B"
            },
            {
                "prerequisite_text": "HUMAN 1C AND ( HUMAN 1AS OR HUMAN 1BS OR HUMAN 1AES OR HUMAN 1BES OR HUMAN H1AS OR HUMAN H1BS ) AND LOWER DIVISION STANDING ONLY"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CRM/LAW C260C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " HUMAN 265A"
            },
            {
                "prerequisite_text": " HUMAN 265B"
            },
            {
                "prerequisite_text": " Students should have taken introductory courses before enrolling in these seminars."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " HUMAN H140"
            },
            {
                "prerequisite_text": " HUMAN H141"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "HUMAN 1A AND ( ENTRY LEVEL WRITING OR PLACEMENT EXAM or authorization ) AND LOWER DIVISION STANDING ONLY AND CAMPUSWIDE HONORS ONLY"
            },
            {
                "prerequisite_text": "HUMAN 1B AND ( ENTRY LEVEL WRITING OR PLACEMENT EXAM or authorization ) AND LOWER DIVISION STANDING ONLY AND CAMPUSWIDE HONORS ONLY"
            },
            {
                "prerequisite_text": " HUMAN 1AS or HUMAN H1AS or HUMAN 1AES or HUMAN 1BS or HUMAN H1BS or HUMAN 1BES. HUMAN 1AS with a grade of C or better. HUMAN H1AS with a grade of C or better. HUMAN 1AES with a grade of C or better. HUMAN 1BS with a grade of C or better. HUMAN H1BS with a grade of C or better. HUMAN 1BES with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " I&C SCI 45C or CSE 45C or GDIM 32"
            },
            {
                "prerequisite_text": " I&C SCI 33 and (I&C SCI 6N or MATH 3A) and I&C SCI 61"
            },
            {
                "prerequisite_text": " I&C SCI 61 and (I&C SCI 10 or I&C SCI 31 or I&C SCI 32A)"
            },
            {
                "prerequisite_text": " I&C SCI 61 or GDIM 25"
            },
            {
                "prerequisite_text": " I&C SCI 51 or GDIM 31"
            },
            {
                "prerequisite_text": " GDIM 27 and GDIM 33 and GDIM 51 and GDIM 61. GDIM 27 with a grade of C or better. GDIM 33 with a grade of C or better"
            },
            {
                "prerequisite_text": " I&C SCI 168 or (GDIM 131 and GDIM 161). GDIM 161 with a grade of C or better"
            },
            {
                "prerequisite_text": " GDIM 167A or I&C SCI 169A. GDIM 167A with a grade of C or better. I&C SCI 169A with a grade of C or better. In Progress grade for GDIM 167A or I&C SCI 169A also accepted."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( CSE 41 OR I&C SCI 31 ) AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )"
            },
            {
                "prerequisite_text": "AP COMP SCI A AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )"
            },
            {
                "prerequisite_text": " I&C SCI 32 or CSE 42 or I&C SCI 32A. I&C SCI 32 with a grade of C or better. CSE 42 with a grade of C or better. I&C SCI 32A with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " I&C SCI 398A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " I&C SCI 33 or CSE 43 or EECS 40. I&C SCI 33 with a grade of C or better. CSE 43 with a grade of C or better. EECS 40 with a grade of C or better"
            },
            {
                "prerequisite_text": " I&C SCI 33 or CSE 43. I&C SCI 33 with a grade of C or better. CSE 43 with a grade of C or better"
            },
            {
                "prerequisite_text": " CSE 45C or I&C SCI 45C. CSE 45C with a grade of C or better. I&C SCI 45C with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " I&C SCI 33 and I&C SCI 6B"
            },
            {
                "prerequisite_text": " I&C SCI 46 and I&C SCI 51. I&C SCI 46 with a grade of C or better. I&C SCI 51 with a grade of C or better"
            },
            {
                "prerequisite_text": "I&C SCI 51 AND I&C SCI 53"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( CSE 41 OR I&C SCI 31 OR I&C SCI 32A )"
            },
            {
                "prerequisite_text": " High school mathematics through trigonometry."
            },
            {
                "prerequisite_text": "I&C SCI 6B AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )"
            },
            {
                "prerequisite_text": " I&C SCI 31 or I&C SCI 32A or AP Computer Science A. AP Computer Science A with a minimum score of 3"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary. "
            },
            {
                "prerequisite_text": " MATH 2A or AP Calculus AB or AP Calculus BC. AP Calculus AB with a minimum score of 4. AP Calculus BC with a minimum score of 3"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (I&C SCI 51 or CSE 31 or EECS 31) and (I&C SCI 46 or CSE 46). I&C SCI 51 with a grade of C or better. CSE 31 with a grade of C or better. EECS 31 with a grade of C or better. I&C SCI 46 with a grade of C or better. CSE 46 with a grade of C or better"
            },
            {
                "prerequisite_text": " IN4MATX 101 or COMPSCI 141 or CSE 141"
            },
            {
                "prerequisite_text": " (I&C SCI 33 or CSE 43) and IN4MATX 43. I&C SCI 33 with a grade of C or better. CSE 43 with a grade of C or better. IN4MATX 43 with a grade of C or better"
            },
            {
                "prerequisite_text": " (I&C SCI 45J or I&C SCI 45C or I&C SCI 46 or CSE 46) and IN4MATX 43. I&C SCI 45J with a grade of C or better. I&C SCI 45C with a grade of C or better. I&C SCI 46 with a grade of C or better. CSE 46 with a grade of C or better. IN4MATX 43 with a grade of C or better"
            },
            {
                "prerequisite_text": " (IN4MATX 43 and I&C SCI 33) or CSE 43"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " I&C SCI 33 or CSE 43. I&C SCI 33 with a grade of C or better. CSE 43 with a grade of C or better"
            },
            {
                "prerequisite_text": " (I&C SCI 45J or I&C SCI 46 or IN4MATX 45) and (IN4MATX 101 or COMPSCI 141 or CSE 141)"
            },
            {
                "prerequisite_text": " (COMPSCI 132 or EECS 148) and I&C SCI 45J"
            },
            {
                "prerequisite_text": " COMPSCI 112 or COMPSCI 171 or IN4MATX 121 or ART 106B or I&C SCI 163 or I&C SCI 166"
            },
            {
                "prerequisite_text": " I&C SCI 10 or I&C SCI 31 or I&C SCI 32A or CSE 41 or ENGR 10 or ENGRMAE 10 or EECS 10. I&C SCI 10 with a grade of C or better. I&C SCI 31 with a grade of C or better. I&C SCI 32A with a grade of C or better. CSE 41 with a grade of C or better. ENGR 10 with a grade of C or better. ENGRMAE 10 with a grade of C or better. EECS 10 with a grade of C or better"
            },
            {
                "prerequisite_text": " IN4MATX 131"
            },
            {
                "prerequisite_text": " I&C SCI 45J or I&C SCI 45C. I&C SCI 45J with a grade of C or better. I&C SCI 45C with a grade of C or better"
            },
            {
                "prerequisite_text": " IN4MATX 131 and IN4MATX 133"
            },
            {
                "prerequisite_text": "( I&C SCI 45C OR I&C SCI 45J ) AND ( STATS 7 OR STATS 67 OR AP STATISTICS )"
            },
            {
                "prerequisite_text": " (IN4MATX 131 or IN4MATX 43) and (I&C SCI 31 or I&C SCI 32A or CSE 41). IN4MATX 131 with a grade of C or better. IN4MATX 43 with a grade of C or better. I&C SCI 31 with a grade of C or better. I&C SCI 32A with a grade of C or better. CSE 41 with a grade of C or better"
            },
            {
                "prerequisite_text": " I&C SCI 10 or I&C SCI 31 or CSE 41 or I&C SCI 32A. I&C SCI 10 with a grade of C or better. I&C SCI 31 with a grade of C or better. CSE 41 with a grade of C or better. I&C SCI 32A with a grade of C or better"
            },
            {
                "prerequisite_text": " IN4MATX 43"
            },
            {
                "prerequisite_text": " (IN4MATX 161 or IN4MATX 43) and (I&C SCI 31 or I&C SCI 32A or CSE 41). I&C SCI 31 with a grade of C or better. I&C SCI 32A with a grade of C or better. CSE 41 with a grade of C or better"
            },
            {
                "prerequisite_text": " I&C SCI 10 or I&C SCI 31 or I&C SCI 32A or CSE 41 or ENGR 10 or EECS 10 or ENGRMAE 10. I&C SCI 10 with a grade of C or better. I&C SCI 31 with a grade of C or better. I&C SCI 32A with a grade of C or better. CSE 41 with a grade of C or better. ENGR 10 with a grade of C or better. EECS 10 with a grade of C or better. ENGRMAE 10 with a grade of C or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " IN4MATX 161. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " IN4MATX 162W"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( HUMAN 1C OR HUMAN H1C OR WRITING 30 OR WRITING 31 OR WRITING 60 OR WRITING 39C ) AND UPPER DIVISION STANDING ONLY"
            },
            {
                "prerequisite_text": " PUBHLTH 105 or IN4MATX 171"
            },
            {
                "prerequisite_text": " IN4MATX 171. IN4MATX 171 with a grade of C or better"
            },
            {
                "prerequisite_text": " IN4MATX 171. IN4MATX 171 with a grade of C or better"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " IN4MATX 113 and IN4MATX 121 and IN4MATX 131 and IN4MATX 151"
            },
            {
                "prerequisite_text": " IN4MATX 191A. In Progress (IP) grade for IN4MATX 191A is also accepted."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " IN4MATX 261 or IN4MATX 251"
            },
            {
                "prerequisite_text": " IN4MATX 251 or IN4MATX 261. Basic knowledge of elementary statistics is also required."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Some familiarity with HCI principles."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " IN4MATX 231 and IN4MATX 241"
            },
            {
                "prerequisite_text": " I&C SCI 51 and COMPSCI 152 and COMPSCI 161 and (I&C SCI 6N or MATH 3A or MATH 6G or I&C SCI 6D). B.S. degree in Computer Science is also accepted."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " IN4MATX 251 or IN4MATX 261"
            },
            {
                "prerequisite_text": " IN4MATX 251 or IN4MATX 261"
            },
            {
                "prerequisite_text": " IN4MATX 251 or IN4MATX 261"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " IN4MATX 280"
            },
            {
                "prerequisite_text": " IN4MATX 280"
            },
            {
                "prerequisite_text": " IN4MATX 280"
            },
            {
                "prerequisite_text": " IN4MATX 282"
            },
            {
                "prerequisite_text": " IN4MATX 280"
            },
            {
                "prerequisite_text": " IN4MATX 280"
            },
            {
                "prerequisite_text": " IN4MATX 283 and IN4MATX 284"
            },
            {
                "prerequisite_text": " IN4MATX 287"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( CSE 42 OR I&C SCI 32 OR I&C SCI 32A ) AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " POL SCI 71A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " POL SCI 41A or INTL ST 11 or INTL ST 12 or REL STD 5A or REL STD 5B or REL STD 5C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Background in Art History or Legal Studies."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Two years of high school Spanish, one semester of college Spanish, or heritage speaker of Spanish."
            },
            {
                "prerequisite_text": "( ITALIAN 1A OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " ITALIAN 1AB or ITALIAN S1AB or ITALIAN 1B. ITALIAN 1AB with a grade of C or better. ITALIAN S1AB with a grade of C or better. ITALIAN 1B with a grade of C or better. Placement into ITALIAN 1BC is also accepted."
            },
            {
                "prerequisite_text": " ITALIAN 1ABSP or ITALIAN 1AB or ITALIAN S1AB or ITALIAN 1B. ITALIAN 1ABSP with a grade of C or better. ITALIAN 1AB with a grade of C or better. ITALIAN S1AB with a grade of C or better. ITALIAN 1B with a grade of C or better. Two years of high school Spanish, one semester of college Spanish, or heritage speaker of Spanish."
            },
            {
                "prerequisite_text": "( ITALIAN 1B OR ITALIAN 1AB OR ITALIAN S1AB OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( ITALIAN 1C OR ITALIAN 1BC OR ITALIAN S1BC OR ITALIAN 1BCSP OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " ITALIAN 2A. ITALIAN 2A with a grade of C or better. Placement into ITALIAN 2B is also accepted."
            },
            {
                "prerequisite_text": "( ITALIAN 2B OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " JAPANSE 3C. JAPANSE 3C with a grade of C or better"
            },
            {
                "prerequisite_text": " JAPANSE 100A. JAPANSE 100A with a grade of C or better"
            },
            {
                "prerequisite_text": " JAPANSE 3C"
            },
            {
                "prerequisite_text": " JAPANSE 3C"
            },
            {
                "prerequisite_text": " JAPANSE 101A or JAPANSE 101B or JAPANSE 101C"
            },
            {
                "prerequisite_text": " JAPANSE 3C. JAPANSE 3C with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": "( JAPANSE 1A OR JAPANSE S1AB OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " JAPANSE 1B or JAPANSE S1AB. JAPANSE 1B with a grade of C or better. JAPANSE S1AB with a grade of C or better. Placement into JAPANSE 1C is also accepted."
            },
            {
                "prerequisite_text": " JAPANSE 100B"
            },
            {
                "prerequisite_text": " JAPANSE 100B"
            },
            {
                "prerequisite_text": " JAPANSE 101C"
            },
            {
                "prerequisite_text": " JAPANSE 100B"
            },
            {
                "prerequisite_text": " JAPANSE 101C"
            },
            {
                "prerequisite_text": " JAPANSE 100B"
            },
            {
                "prerequisite_text": " JAPANSE 100B and JAPANSE 211A"
            },
            {
                "prerequisite_text": " JAPANSE 100B"
            },
            {
                "prerequisite_text": " JAPANSE 212A"
            },
            {
                "prerequisite_text": " JAPANSE 203"
            },
            {
                "prerequisite_text": " JAPANSE 203 and JAPANSE 213A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " JAPANSE 101C"
            },
            {
                "prerequisite_text": " JAPANSE 203"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " JAPANSE 1C or JAPANSE S1BC. JAPANSE 1C with a grade of C or better. JAPANSE S1BC with a grade of C or better. Placement into JAPANSE 2A is also accepted."
            },
            {
                "prerequisite_text": "( JAPANSE 2A OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " JAPANSE 2B or JAPANSE S2AB. JAPANSE 2B with a grade of C or better. JAPANSE S2AB with a grade of C or better. Placement into JAPANSE 2C is also accepted."
            },
            {
                "prerequisite_text": "( JAPANSE 2C OR JAPANSE S2BC )"
            },
            {
                "prerequisite_text": "( JAPANSE 3A OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " JAPANSE 3B. JAPANSE 3B with a grade of C or better. Placement into JAPANSE 3C is also accepted."
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": " JAPANSE S1AB or JAPANSE 1B. JAPANSE S1AB with a grade of C or better. JAPANSE 1B with a grade of C or better. Placement into JAPANSE 1C is also accepted."
            },
            {
                "prerequisite_text": " JAPANSE 1C or JAPANSE S1BC. JAPANSE 1C with a grade of C or better. JAPANSE S1BC with a grade of C or better. Placement into JAPANSE 2A is also accepted."
            },
            {
                "prerequisite_text": " JAPANSE S2AB or JAPANSE 2B. JAPANSE S2AB with a grade of C or better. JAPANSE 2B with a grade of C or better. Placement into JAPANSE 2C is also accepted."
            },
            {
                "prerequisite_text": " KOREAN 3A or KOREAN 3B or KOREAN 3C. KOREAN 3A with a grade of C or better. KOREAN 3B with a grade of C or better. KOREAN 3C with a grade of C or better"
            },
            {
                "prerequisite_text": " KOREAN 101A or KOREAN 101B or KOREAN 101C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": "( KOREAN 1A OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " KOREAN 1B or KOREAN S1AB. KOREAN 1B with a grade of C or better. KOREAN S1AB with a grade of C or better. Placement into KOREAN 1C is also accepted."
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": "( KOREAN 1KA OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( KOREAN 1KB OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( KOREAN 1C OR KOREAN S1BC OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( KOREAN 2A OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( KOREAN 2B OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( KOREAN 1KC OR KOREAN S1BC OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( KOREAN 2KA OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( KOREAN 2KB OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( KOREAN 2C OR KOREAN 2KC OR KOREAN S2BC OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( KOREAN 2C OR KOREAN 3A OR KOREAN 2KC OR KOREAN S2BC OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": " KOREAN 2C or KOREAN 2KC or KOREAN S2BC or KOREAN 3A or KOREAN 3B. KOREAN 2C with a grade of C or better. KOREAN 2KC with a grade of C or better. KOREAN S2BC with a grade of C or better. KOREAN 3A with a grade of C or better. KOREAN 3B with a grade of C or better. Placement into KOREAN 3C is also accepted."
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": "( KOREAN 1B OR KOREAN 1KB OR KOREAN S1AB OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( LATIN 1C OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( LATIN 100 OR LATIN 100A OR LATIN 100B )"
            },
            {
                "prerequisite_text": " LATIN 100"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " LATIN 1A. LATIN 1A with a grade of C or better"
            },
            {
                "prerequisite_text": " LATIN 1B. LATIN 1B with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PSYCH 56L or LINGUIS 51"
            },
            {
                "prerequisite_text": " LIT JRN 21"
            },
            {
                "prerequisite_text": " LIT JRN 21 and LIT JRN 20 and (COM LIT 60A or COM LIT 60C or ENGLISH 8 or ENGLISH 9 or ENGLISH 10 or ENGLISH 11 or ENGLISH 12 or ENGLISH 15 or ENGLISH 16 or ENGLISH 17)"
            },
            {
                "prerequisite_text": " LIT JRN 101A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of lower-division writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " LSCI 145A or LPS 105A or PHIL 105A"
            },
            {
                "prerequisite_text": " LSCI 145B or LPS 105B or PHIL 105B"
            },
            {
                "prerequisite_text": " PHIL 105B or LPS 105B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 2D and (MATH 3A or MATH 6G)"
            },
            {
                "prerequisite_text": " MATH 2D and (MATH 3A or MATH 6G)"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHIL 205A or LPS 205A"
            },
            {
                "prerequisite_text": " PHIL 205B or LPS 205B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "LPS 205C AND PHILOS 205C AND SOC SCI 205C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( LING 3 OR LSCI 3 )"
            },
            {
                "prerequisite_text": " (ICS 46 or CSE 46) and MATH 2B and ICS 6B and ICS 6D. ICS 46 with a grade of C or better. CSE 46 with a grade of C or better"
            },
            {
                "prerequisite_text": " LSCI 151. LSCI 151 with a grade of A- or better"
            },
            {
                "prerequisite_text": " PSYC 150 or LSCI 155 or PSYC 156A or LSCI 151"
            },
            {
                "prerequisite_text": "LSCI 3"
            },
            {
                "prerequisite_text": "LSCI 10"
            },
            {
                "prerequisite_text": " LSCI 3"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " LSCI 20"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " LPS 30 or PHIL 30 or LPS 104 or PHIL 104. LPS 30 with a grade of A- or better. PHIL 30 with a grade of A- or better. LPS 104 with a grade of A- or better. PHIL 104 with a grade of A- or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " LSCI 145A or LPS 105A or PHIL 105A"
            },
            {
                "prerequisite_text": " LSCI 145B or LPS 105B or PHIL 105B"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " LSCI 151 or PSYC 156A. Placement via consent of the instructor is also accepted."
            },
            {
                "prerequisite_text": " LSCI 3 or SPAN 113B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PSYC 7A or PSCI 9 or PSYC 9B or PSCI 11B or LSCI 3"
            },
            {
                "prerequisite_text": " (PSYC 7A or PSB 9 or PSYC 9A or PSB 11A) and (PSYC 9B or PSB 11B or BIOL 35 or BIOL N110 or BIOL N115A)"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " FREN 1C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PSYC 156A. PSYC 156A with a grade of A- or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " LSCI 3"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( LSCI 3 OR LINGUIS 3 OR SPANISH 113A )"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " Permission of faculty advisor. If this is not the same faculty member as the course instructor, the faculty advisor will coordinate with the course instructor when it comes to assessing the student’s research process at the end of each quarter."
            },
            {
                "prerequisite_text": "  Permission of faculty advisor. If this is not the same faculty member as the course instructor, the faculty advisor will coordinate with the course instructor when it comes to assessing the student’s research process at the end of each quarter."
            },
            {
                "prerequisite_text": " Permission of faculty advisor. If this is not the same faculty member as the course instructor, the faculty advisor will coordinate with the course instructor when it comes to assessing the student’s research process at the end of each quarter."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( LING 3 OR LSCI 3 OR LINGUIS 3 )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " LSCI 202A"
            },
            {
                "prerequisite_text": " LSCI 202B"
            },
            {
                "prerequisite_text": " LSCI 202A and LSCI 202B and LSCI 202C. LSCI 202A with a grade of B or better. LSCI 202B with a grade of B or better. LSCI 202C with a grade of B or better"
            },
            {
                "prerequisite_text": " LSCI 251. LSCI 251 with a grade of B- or better"
            },
            {
                "prerequisite_text": "LSCI 3"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " M&MG 200A"
            },
            {
                "prerequisite_text": " M&MG 200B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " M&MG 201A"
            },
            {
                "prerequisite_text": " M&MG 201B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " M&MG 203B"
            },
            {
                "prerequisite_text": " M&MG 203B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " M&MG 205A"
            },
            {
                "prerequisite_text": " M&MG 205C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " M&MG 210A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSIO 215. PHYSIO 215 with a grade of B+ or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " M&MG 215"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (MATH 2D or MATH H2D) and (MATH 3A or MATH H3A) and MATH 9"
            },
            {
                "prerequisite_text": " (MATH 3A or MATH H3A) and MATH 9"
            },
            {
                "prerequisite_text": " MATH 105A"
            },
            {
                "prerequisite_text": "MATH 105A AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": "MATH 105B AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " MATH 3D and MATH 105B"
            },
            {
                "prerequisite_text": "MATH 107 AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " (MATH 2D or MATH H2D) and MATH 10 and MATH 121B"
            },
            {
                "prerequisite_text": " MATH 110A. MATH 110A with a grade of C- or better"
            },
            {
                "prerequisite_text": " (MATH 2E or MATH H2E) and MATH 3D"
            },
            {
                "prerequisite_text": " MATH 112A"
            },
            {
                "prerequisite_text": " MATH 112B"
            },
            {
                "prerequisite_text": " MATH 2B or MATH 5B or MATH 7B or AP Calculus BC. AP Calculus BC with a minimum score of 4"
            },
            {
                "prerequisite_text": " MATH 2B or MATH 5B or MATH 7B or AP Calculus BC. AP Calculus BC with a minimum score of 4"
            },
            {
                "prerequisite_text": " MATH 112A"
            },
            {
                "prerequisite_text": " MATH 3D and MATH 140A"
            },
            {
                "prerequisite_text": " MATH 3D and MATH 140A"
            },
            {
                "prerequisite_text": " (MATH 3A or MATH H3A) and MATH 13. MATH 13 with a grade of C- or better"
            },
            {
                "prerequisite_text": " MATH 120A. MATH 120A with a grade of C- or better"
            },
            {
                "prerequisite_text": " MATH 120B"
            },
            {
                "prerequisite_text": " (MATH 3A or MATH H3A) and MATH 13. MATH 13 with a grade of C- or better"
            },
            {
                "prerequisite_text": " MATH 121A. MATH 121A with a grade of C- or better"
            },
            {
                "prerequisite_text": "( MATH 2A OR MATH 5A OR MATH 7A OR I&C SCI 6D OR AP CALCULUS AB OR AP CALCULUS BC OR AP CALCULUS AB SUB ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " MATH 3A or MATH H3A"
            },
            {
                "prerequisite_text": " MATH 130A or STAT 120A"
            },
            {
                "prerequisite_text": " MATH 130B"
            },
            {
                "prerequisite_text": " MATH 130A or STAT 120A"
            },
            {
                "prerequisite_text": "( MATH 133C OR MATH 134A ) AND NO MATH 133A AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " MATH 134B or MATH 133A"
            },
            {
                "prerequisite_text": " (MATH 2D or MATH H2D) and (MATH 3A or MATH H3A) and MATH 13. MATH 13 with a grade of C- or better"
            },
            {
                "prerequisite_text": " MATH 140A. MATH 140A with a grade of C- or better"
            },
            {
                "prerequisite_text": " MATH 140B"
            },
            {
                "prerequisite_text": " MATH 140A"
            },
            {
                "prerequisite_text": " MATH 140B"
            },
            {
                "prerequisite_text": " MATH 13 or (ICS 6B and ICS 6D). MATH 13 with a grade of C- or better. ICS 6B with a grade of C- or better. ICS 6D with a grade of C- or better"
            },
            {
                "prerequisite_text": " MATH 13 or (ICS 6B and ICS 6D). MATH 13 with a grade of C- or better. ICS 6B with a grade of C- or better. ICS 6D with a grade of C- or better"
            },
            {
                "prerequisite_text": " (MATH 2E or MATH H2E) and MATH 3D"
            },
            {
                "prerequisite_text": " MATH 162A. MATH 162A with a grade of C- or better"
            },
            {
                "prerequisite_text": " (MATH 2B or MATH 5B or MATH 7B or AP Calculus BC) and (MATH 3A or MATH H3A) and (MATH 13 or (ICS 6B and ICS 6D)). AP Calculus BC with a minimum score of 4"
            },
            {
                "prerequisite_text": " MATH 173A"
            },
            {
                "prerequisite_text": " (MATH 2B or MATH 5B or MATH 7B or AP Calculus BC) and MATH 13. AP Calculus BC with a minimum score of 4. MATH 13 with a grade of C- or better"
            },
            {
                "prerequisite_text": " MATH 3A or MATH H3A"
            },
            {
                "prerequisite_text": " (MATH 3A or MATH H3A) and MATH 13. MATH 13 with a grade of C- or better"
            },
            {
                "prerequisite_text": " MATH 180A"
            },
            {
                "prerequisite_text": " MATH 120A and MATH 140A"
            },
            {
                "prerequisite_text": " PS 5"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 120A or MATH 121A or MATH 140A. MATH 120A with a grade of C- or better. MATH 121A with a grade of C- or better. MATH 140A with a grade of C- or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( MATH 1A OR SAT MATH >= 450 OR PLACEMENT EXAM or authorization ) AND NO MATH 2A AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " Recommended: MATH 2E and MATH 3A and MATH 13, or equivalent."
            },
            {
                "prerequisite_text": " MATH 205A"
            },
            {
                "prerequisite_text": " MATH 205B"
            },
            {
                "prerequisite_text": " Recommended: MATH 140C or equivalent."
            },
            {
                "prerequisite_text": " MATH 210A"
            },
            {
                "prerequisite_text": " MATH 210B"
            },
            {
                "prerequisite_text": " Recommended: MATH 210C"
            },
            {
                "prerequisite_text": " Recommended: MATH 140C and MATH 121B, or equivalent."
            },
            {
                "prerequisite_text": " MATH 218A"
            },
            {
                "prerequisite_text": " MATH 218B"
            },
            {
                "prerequisite_text": " Recommended: MATH 140C or equivalent."
            },
            {
                "prerequisite_text": " MATH 220A"
            },
            {
                "prerequisite_text": " MATH 220B"
            },
            {
                "prerequisite_text": " MATH 220C"
            },
            {
                "prerequisite_text": " Recommended: MATH 3D and MATH 105B and MATH 140A and MATH 121A and MATH 112A, or equivalent."
            },
            {
                "prerequisite_text": " MATH 225A"
            },
            {
                "prerequisite_text": " Recommended: MATH 3D and MATH 105B and MATH 140A and MATH 121A and MATH 112A, or equivalent."
            },
            {
                "prerequisite_text": " Recommended: MATH 3D and MATH 112A and (MATH 140B or MATH 105B), or equivalent."
            },
            {
                "prerequisite_text": " Recommended: MATH 3D and MATH 112A and (MATH 140B or MATH 105B), or equivalent."
            },
            {
                "prerequisite_text": " Recommended: MATH 3D and MATH 112A and (MATH 140B or MATH 105B), or equivalent."
            },
            {
                "prerequisite_text": " Recommended: MATH 2A and MATH 2B and MATH 3A, or equivalent."
            },
            {
                "prerequisite_text": " MATH 227A"
            },
            {
                "prerequisite_text": " MATH 227A"
            },
            {
                "prerequisite_text": " Recommended: MATH 120A and MATH 121A and MATH 120B, or equivalent."
            },
            {
                "prerequisite_text": " MATH 230A"
            },
            {
                "prerequisite_text": " MATH 230B"
            },
            {
                "prerequisite_text": " MATH 230C"
            },
            {
                "prerequisite_text": " MATH 232A"
            },
            {
                "prerequisite_text": " MATH 232B"
            },
            {
                "prerequisite_text": " MATH 230C"
            },
            {
                "prerequisite_text": " MATH 233A"
            },
            {
                "prerequisite_text": " MATH 233B"
            },
            {
                "prerequisite_text": " MATH 230C"
            },
            {
                "prerequisite_text": " MATH 230C"
            },
            {
                "prerequisite_text": " MATH 230C"
            },
            {
                "prerequisite_text": " MATH 230C"
            },
            {
                "prerequisite_text": " MATH 220C and MATH 230C"
            },
            {
                "prerequisite_text": " MATH 239A"
            },
            {
                "prerequisite_text": " MATH 239B"
            },
            {
                "prerequisite_text": " MATH 218A"
            },
            {
                "prerequisite_text": " MATH 240A"
            },
            {
                "prerequisite_text": " MATH 240B"
            },
            {
                "prerequisite_text": " MATH 218A"
            },
            {
                "prerequisite_text": " MATH 245A"
            },
            {
                "prerequisite_text": " MATH 245B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: MATH 120B and MATH 141, or equivalent."
            },
            {
                "prerequisite_text": " MATH 250A"
            },
            {
                "prerequisite_text": " MATH 250B"
            },
            {
                "prerequisite_text": " MATH 210C and MATH 220C"
            },
            {
                "prerequisite_text": " MATH 260A"
            },
            {
                "prerequisite_text": " MATH 260B"
            },
            {
                "prerequisite_text": " MATH 210C. Recommended: MATH 130C or equivalent."
            },
            {
                "prerequisite_text": " MATH 270A"
            },
            {
                "prerequisite_text": " MATH 270B"
            },
            {
                "prerequisite_text": " MATH 210C"
            },
            {
                "prerequisite_text": " MATH 271A"
            },
            {
                "prerequisite_text": " MATH 271B"
            },
            {
                "prerequisite_text": " Recommended: MATH 270C."
            },
            {
                "prerequisite_text": " Recommended: MATH 150."
            },
            {
                "prerequisite_text": " MATH 280A"
            },
            {
                "prerequisite_text": " MATH 280B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 281A"
            },
            {
                "prerequisite_text": " MATH 281B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 282A"
            },
            {
                "prerequisite_text": " MATH 282B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 290A"
            },
            {
                "prerequisite_text": " MATH 290B"
            },
            {
                "prerequisite_text": " MATH 210C. Recommended: MATH 112B and MATH 112C or equivalent."
            },
            {
                "prerequisite_text": " MATH 295A"
            },
            {
                "prerequisite_text": " MATH 295B"
            },
            {
                "prerequisite_text": " MATH 295C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 298A"
            },
            {
                "prerequisite_text": " MATH 298B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 299A"
            },
            {
                "prerequisite_text": " MATH 299B"
            },
            {
                "prerequisite_text": "( MATH 1B OR ACT MATH >= 29 OR AP CALCULUS AB OR SAT MATH >= 650 OR AP CALCULUS AB SUB OR PLACEMENT EXAM or authorization ) AND NO AP CALCULUS AB score of 4 or greater AND NO AP CALCULUS BC score of 3 or greater AND NO MATH 5A AND NO MATH 7A AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " MATH 2A or MATH 5A or MATH 7A or AP Calculus AB or AP Calculus BC. AP Calculus AB with a minimum score of 4. AP Calculus BC with a minimum score of 3"
            },
            {
                "prerequisite_text": " MATH 2B or MATH 5B or MATH 7B or AP Calculus BC. AP Calculus BC with a minimum score of 4"
            },
            {
                "prerequisite_text": " MATH 2D or MATH H2D"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 2B or MATH 5B or MATH 7B or AP Calculus BC. AP Calculus BC with a minimum score of 4"
            },
            {
                "prerequisite_text": " (MATH 3A or MATH H3A) and (MATH 2D or MATH H2D)"
            },
            {
                "prerequisite_text": "( MATH 1B OR ACT MATH >= 29 OR AP CALCULUS AB OR SAT MATH >= 650 OR AP CALCULUS AB SUB OR PLACEMENT EXAM or authorization ) AND NO MATH 2A AND NO MATH 7A AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": "( MATH 2A OR MATH 5A OR MATH 7A OR AP CALCULUS AB OR AP CALCULUS BC OR AP CALCULUS AB SUB ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " MATH 1B or AP Calculus AB or SAT Mathematics or ACT Mathematics. MATH 1B with a grade of C- or better. AP Calculus AB with a minimum score of 3. SAT Mathematics with a minimum score of 650. ACT Mathematics with a minimum score of 29. Placement via the Calculus Placement exam (fee required) is also accepted."
            },
            {
                "prerequisite_text": " MATH 2A or MATH 5A or AP Calculus AB or AP Calculus BC or MATH 7A. AP Calculus AB with a minimum score of 4. AP Calculus BC with a minimum score of 3"
            },
            {
                "prerequisite_text": " MATH 2A or MATH 5A or MATH 7A or AP Calculus AB or AP Calculus BC. AP Calculus AB with a minimum score of 4. AP Calculus BC with a minimum score of 3"
            },
            {
                "prerequisite_text": "( MATH 2A OR MATH 5A OR MATH 7A OR AP CALCULUS AB OR AP CALCULUS BC OR AP CALCULUS AB SUB ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (MATH 3A or MATH H3A) and MATH 13 and (MATH 120A or MATH 121A). MATH 13 with a grade of A or better. MATH 120A with a grade of A or better. MATH 121A with a grade of A or better"
            },
            {
                "prerequisite_text": " MATH H120A"
            },
            {
                "prerequisite_text": " MATH H120B"
            },
            {
                "prerequisite_text": "MATH 13 AND MATH 121A AND MATH 140A AND MATH 140B AND ( MATH 3A OR MATH H3A ) AND ( MATH 2E OR MATH H2E ) AND ( NO REPEATS ALLOWED IF GRADE = F OR BETTER )"
            },
            {
                "prerequisite_text": " MATH H140A. MATH H140A with a grade of C- or better"
            },
            {
                "prerequisite_text": " MATH H140B. MATH H140B with a grade of C- or better"
            },
            {
                "prerequisite_text": " MATH 2B or MATH 5B or MATH 7B or (AP Calculus BC and (MATH H3A or MATH 3A)). MATH 2B with a grade of A or better. MATH 5B with a grade of A or better. MATH 7B with a grade of A or better. AP Calculus BC with a minimum score of 5. MATH H3A with a grade of B- or better. MATH 3A with a grade of A or better"
            },
            {
                "prerequisite_text": " MATH H2D. MATH H2D with a grade of B- or better"
            },
            {
                "prerequisite_text": " MATH 2B or MATH 5B or MATH 7B or AP Calculus BC. MATH 2B with a grade of A or better. MATH 5B with a grade of A or better. MATH 7B with a grade of A or better. AP Calculus BC with a minimum score of 5"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " MED HUM 1 or MED HUM 3 or GEN&SEX 60A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( MATH 7 OR MGMT 7 OR STATS 7 OR ECON 15A OR ECON 15B OR AP STATISTICS )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ECON 25 OR MGMT 30A ) AND ( MATH 2B OR AP CALCULUS BC )"
            },
            {
                "prerequisite_text": " MGMT 102 and MGMT 105 and MGMT 109"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT 1"
            },
            {
                "prerequisite_text": "MGMT 102"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT 102"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MGMT 102"
            },
            {
                "prerequisite_text": " MGMT 102"
            },
            {
                "prerequisite_text": " (MGMT 30A or ECON 25) and MGMT 30B"
            },
            {
                "prerequisite_text": " MGMT 131A"
            },
            {
                "prerequisite_text": " MGMT 131B"
            },
            {
                "prerequisite_text": " MGMT 30B"
            },
            {
                "prerequisite_text": " MGMT 132A"
            },
            {
                "prerequisite_text": " MGMT 30B"
            },
            {
                "prerequisite_text": " MGMT 30B"
            },
            {
                "prerequisite_text": " MGMT 131B"
            },
            {
                "prerequisite_text": " MGMT 131B"
            },
            {
                "prerequisite_text": " MGMT 109"
            },
            {
                "prerequisite_text": " MGMT 109 and (ECON 20A or MGMT 4A) and (ECON 20B or MGMT 4B)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT 109 and MGMT 141"
            },
            {
                "prerequisite_text": " MGMT 109 and MGMT 141"
            },
            {
                "prerequisite_text": "MGMT 105"
            },
            {
                "prerequisite_text": "MGMT 105"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MGMT 105"
            },
            {
                "prerequisite_text": " MGMT 105"
            },
            {
                "prerequisite_text": " MGMT 105"
            },
            {
                "prerequisite_text": " MGMT 105"
            },
            {
                "prerequisite_text": " MGMT 105"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: Previous experience with programming languages (preferably Python)."
            },
            {
                "prerequisite_text": " MGMT 107"
            },
            {
                "prerequisite_text": " MGMT 107"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT 107"
            },
            {
                "prerequisite_text": " MGMT 101"
            },
            {
                "prerequisite_text": " MGMT 101"
            },
            {
                "prerequisite_text": "MGMT 105"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT 30A and MGMT 30B"
            },
            {
                "prerequisite_text": " MGMT 101"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ECON 25 OR MGMT 30A )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT 4A or ECON 20A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT EP 203A. MGMT EP 203A with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT EP 204A. MGMT EP 204A with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT EP 201A and MGMT EP 203A and MGMT EP 204A. MGMT EP 201A with a grade of C or better. MGMT EP 203A with a grade of C or better. MGMT EP 204A with a grade of C or better"
            },
            {
                "prerequisite_text": " MGMT EP 200 and MGMT EP 202 and MGMT EP 205 and MGMT EP 209A. MGMT EP 200 with a grade of C or better. MGMT EP 202 with a grade of C or better. MGMT EP 205 with a grade of C or better. MGMT EP 209A with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT FE 203A or MGMTMBA 203A. MGMT FE 203A with a grade of C or better. MGMTMBA 203A with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT FE 204A or MGMTMBA 204A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT FE 201A and MGMT FE 203A and MGMT FE 204A"
            },
            {
                "prerequisite_text": "( MGMT FE 209A OR MGMTMBA 209A ) AND ( ADMIN - FULLY EMPLYD MAJORS ONLY OR BUSINESS ADMIN MAJORS ONLY OR DIGITAL LEADERSHIP MAJORS ONLY OR BIOTECHNOLOGY MGMT MAJORS ONLY OR ADMIN - EXECUTIVE MAJORS ONLY )"
            },
            {
                "prerequisite_text": " MGMT FE 200 and MGMT FE 202 and MGMT FE 205 and MGMT FE 209A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT FE 202 or MGMTMBA 202"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT FE 202"
            },
            {
                "prerequisite_text": " MGMT FE 203A or MGMTMBA 203A. MGMT FE 203A with a grade of C or better. MGMTMBA 203A with a grade of C or better"
            },
            {
                "prerequisite_text": " MGMT FE 203A or MGMTMBA 203A. MGMT FE 203A with a grade of C or better. MGMTMBA 203A with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT FE 209A or MGMTMBA 209A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT FE 205 or MGMTMBA 205"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT FE 295A. MGMT FE 295A with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT HC 203A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMT HC 201A and MGMT HC 203A and MGMT HC 204A"
            },
            {
                "prerequisite_text": " MGMT HC 200 and MGMT HC 202 and MGMT HC 205 and MGMT HC 209A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Courses in basic statistics with probability."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMTMBA 203A or MGMT FE 203A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMTMBA 201A and MGMTMBA 203A and MGMTMBA 204A"
            },
            {
                "prerequisite_text": " MGMTMBA 209A or MGMT FE 209A"
            },
            {
                "prerequisite_text": " MGMTMBA 200 and MGMTMBA 202 and MGMTMBA 205 and MGMTMBA 209A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (MGMTMBA 202 or MGMT FE 202) and (MGMTMBA 205 or MGMT FE 205) and (MGMTMBA 210 or MGMT FE 210)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MGMTMBA 210"
            },
            {
                "prerequisite_text": " MGMTMBA 202 or MGMT FE 202"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MGMTMBA 202 or MGMT FE 202"
            },
            {
                "prerequisite_text": " MGMTMBA 203A or MGMT FE 203A. MGMTMBA 203A with a grade of C or better. MGMT FE 203A with a grade of C or better"
            },
            {
                "prerequisite_text": " MGMTMBA 209A or MGMT FE 209A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (MGMTMBA 209A or MGMT FE 209A) and (MGMTMBA 209B or MGMT FE 209B)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MGMTMBA 207"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 98 and BIO SCI 99 and CHEM 51A and CHEM 51B and CHEM 51C"
            },
            {
                "prerequisite_text": " BIO SCI 98 and BIO SCI 99 and CHEM 51C"
            },
            {
                "prerequisite_text": " MOL BIO 203 and MOL BIO 204"
            },
            {
                "prerequisite_text": " MATH 2B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSIO 215. PHYSIO 215 with a grade of B+ or better"
            },
            {
                "prerequisite_text": " MOL BIO 203 and MOL BIO 204"
            },
            {
                "prerequisite_text": " MOL BIO 203 and MOL BIO 204"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " M&MG 215"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHEM 131C or CHEM 132C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MOL BIO 250L and MOL BIO 250"
            },
            {
                "prerequisite_text": " MOL BIO 250L and MOL BIO 250"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MOL BIO 250L and MOL BIO 251L"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Intermediate accounting."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Intermediate accounting."
            },
            {
                "prerequisite_text": " Intermediate accounting and basic auditing."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (ENGR 1A or CHEM 1A or CHEM H2A) and ENGR 54 and MSE 69"
            },
            {
                "prerequisite_text": " ENGR 54 and MSE 165C"
            },
            {
                "prerequisite_text": " ENGR 54 and (MSE 165A or CBE 40C or MAE 91)"
            },
            {
                "prerequisite_text": " ENGR 54"
            },
            {
                "prerequisite_text": "ENGR 54 AND MSE 155"
            },
            {
                "prerequisite_text": " ENGR 54"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGR 54 and PHYS 7D"
            },
            {
                "prerequisite_text": " ENGR 54 and PHYS 7D"
            },
            {
                "prerequisite_text": " CHEM 1C and PHYS 7C"
            },
            {
                "prerequisite_text": " ENGR 54 and (MSE 165A or CBE 40C or MAE 91). ENGR 54 with a grade of C- or better. MSE 165A with a grade of C- or better"
            },
            {
                "prerequisite_text": " ENGR 54 and (MSE 165A or CBE 40C or MAE 91) and (MSE 165B or BME 150 or MAE 120 or (CBE 120B and CBE 120C)). MSE 165A with a grade of C- or better"
            },
            {
                "prerequisite_text": " ENGR 54 and (MSE 165B or (CBE 120B and CBE 120C) or MAE 120). MSE 165B with a grade of C- or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGR 54"
            },
            {
                "prerequisite_text": " ENGR 54 and ENGR 150"
            },
            {
                "prerequisite_text": " ENGR 54"
            },
            {
                "prerequisite_text": " (CBE 110 or MSE 165C) and (MSE 141 or MSE 69)"
            },
            {
                "prerequisite_text": " ENGR 54 and MSE 155 and MSE 60 and MSE 165C"
            },
            {
                "prerequisite_text": " MSE 189A"
            },
            {
                "prerequisite_text": " MSE 189B"
            },
            {
                "prerequisite_text": " ENGR 54 and ENGR 150"
            },
            {
                "prerequisite_text": " ENGR 54"
            },
            {
                "prerequisite_text": "  Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MSE 201A"
            },
            {
                "prerequisite_text": " MSE 200"
            },
            {
                "prerequisite_text": " MSE 200 and MSE 205"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGR 54"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MSE 200"
            },
            {
                "prerequisite_text": " MSE 200"
            },
            {
                "prerequisite_text": " MSE 200"
            },
            {
                "prerequisite_text": " MSE 200"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MSE 200"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " ENGR 54 and CHEM 1C"
            },
            {
                "prerequisite_text": " PHYS 7D and PHYS 7E and (MATH 3A or ICS 6N) and MATH 3D and ENGR 54"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MUSIC 16A and MUSIC 16B and MUSIC 16C"
            },
            {
                "prerequisite_text": " MUSIC 16A and MUSIC 16B and MUSIC 16C"
            },
            {
                "prerequisite_text": " MUSIC 16A and MUSIC 16B and MUSIC 16C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MUSIC 16D"
            },
            {
                "prerequisite_text": " MUSIC 16D"
            },
            {
                "prerequisite_text": " MUSIC 16C"
            },
            {
                "prerequisite_text": " MUSIC 40B. MUSIC 40B with a grade of D or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " MUSIC 40B. MUSIC 40B with a grade of D or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " MUSIC 40B. MUSIC 40B with a grade of D or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " MUSIC 40B. MUSIC 40B with a grade of D or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " MUSIC 40C. MUSIC 40C with a grade of D or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " MUSIC 40C. MUSIC 40C with a grade of D or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " MUSIC 40C. MUSIC 40C with a grade of D or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " MUSIC 40C. MUSIC 40C with a grade of D or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " MUSIC 40D. MUSIC 40D with a grade of D or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " MUSIC 40D. MUSIC 40D with a grade of D or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MUSIC 40B and MUSIC 40C and MUSIC 40D. Satisfactory completion of the lower-division writing requirement. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MUSIC 16C"
            },
            {
                "prerequisite_text": " MUSIC 51"
            },
            {
                "prerequisite_text": " MUSIC 51 or ART 65A or DANCE 163"
            },
            {
                "prerequisite_text": " MUSIC 16B. MUSIC 16B with a grade of C- or better"
            },
            {
                "prerequisite_text": " MUSIC 16D"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MUSIC 156A"
            },
            {
                "prerequisite_text": " MUSIC 150. MUSIC 150 with a grade of C- or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MUSIC 158A"
            },
            {
                "prerequisite_text": " MUSIC 158A and MUSIC 158B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MUSIC 15A and MUSIC 16A. MUSIC 15A with a grade of C- or better. MUSIC 16A with a grade of C- or better"
            },
            {
                "prerequisite_text": " MUSIC 15B and MUSIC 16B. MUSIC 15B with a grade of C- or better. MUSIC 16B with a grade of C- or better"
            },
            {
                "prerequisite_text": " Audition required."
            },
            {
                "prerequisite_text": " Audition required. "
            },
            {
                "prerequisite_text": " Audition required."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": " MUSIC 15A and MUSIC 16A. MUSIC 15A with a grade of C- or better. MUSIC 16A with a grade of C- or better"
            },
            {
                "prerequisite_text": "MUSIC 15B AND MUSIC 15C AND MUSIC 16B"
            },
            {
                "prerequisite_text": "MUSIC 15C AND MUSIC 16C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MUSIC 78 and MUSIC 132"
            },
            {
                "prerequisite_text": " MUSIC 78 and MUSIC 132 and MUSIC 183A"
            },
            {
                "prerequisite_text": " MUSIC 78 and MUSIC 132 and MUSIC 183A and MUSIC 183B"
            },
            {
                "prerequisite_text": " MUSIC 16C"
            },
            {
                "prerequisite_text": " Undergraduate advisor approval required."
            },
            {
                "prerequisite_text": " MUSIC 16D and MUSIC 40B and MUSIC 40C"
            },
            {
                "prerequisite_text": " Senior standing in the Honors Program in Music and Culture."
            },
            {
                "prerequisite_text": " MUSIC 195A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Undergraduate or graduate advisor approval required."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Placement into MUSIC 201."
            },
            {
                "prerequisite_text": " MUSIC 200. MUSIC 200 with a grade of B or better"
            },
            {
                "prerequisite_text": " MUSIC 200. MUSIC 200 with a grade of B or better"
            },
            {
                "prerequisite_text": " MUSIC 200. MUSIC 200 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MUSIC 21A"
            },
            {
                "prerequisite_text": "MUSIC 21B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MUSIC 200. MUSIC 200 with a grade of B or better"
            },
            {
                "prerequisite_text": " MUSIC 200. MUSIC 200 with a grade of B or better"
            },
            {
                "prerequisite_text": " MUSIC 200. MUSIC 200 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MUSIC 200. MUSIC 200 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MUSIC 200. MUSIC 200 with a grade of B or better"
            },
            {
                "prerequisite_text": " MUSIC 200 and MUSIC 242A. MUSIC 200 with a grade of B or better. MUSIC 242A with a grade of B or better"
            },
            {
                "prerequisite_text": " MUSIC 242B. MUSIC 242B with a grade of B or better"
            },
            {
                "prerequisite_text": " MUSIC 243A. MUSIC 243A with a grade of B or better"
            },
            {
                "prerequisite_text": " MUSIC 243B. MUSIC 243B with a grade of B or better"
            },
            {
                "prerequisite_text": " MUSIC 244. MUSIC 244 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Graduate advisor approval required."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MUSIC 16C. MUSIC 16C with a grade of C- or better"
            },
            {
                "prerequisite_text": " MUSIC 40B. MUSIC 40B with a grade of D or better. Recommended: MUSIC 16D"
            },
            {
                "prerequisite_text": " MUSIC 16C. MUSIC 16C with a grade of C- or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "MUSIC 15"
            },
            {
                "prerequisite_text": "MUSIC 15"
            },
            {
                "prerequisite_text": "MUSIC 15"
            },
            {
                "prerequisite_text": "MUSIC 15"
            },
            {
                "prerequisite_text": "MUSIC 15"
            },
            {
                "prerequisite_text": "MUSIC 15"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EECS 148 or COMPSCI 132"
            },
            {
                "prerequisite_text": " EECS 148 or COMPSCI 132"
            },
            {
                "prerequisite_text": " NET SYS 201 or COMPSCI 232 or EECS 248A"
            },
            {
                "prerequisite_text": " EECS 148 or COMPSCI 132"
            },
            {
                "prerequisite_text": " EECS 148 or COMPSCI 132"
            },
            {
                "prerequisite_text": " An undergraduate-level course in operating systems and networks."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NEURBIO 200A"
            },
            {
                "prerequisite_text": " NEURBIO 200B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NEURBIO 201A"
            },
            {
                "prerequisite_text": " NEURBIO 201B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NEURBIO 202A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " At least one upper-division course in the field of Neuroscience or one upper-division course in Cognitive Science or Machine Learning."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " One graduate or undergraduate course in statistics."
            },
            {
                "prerequisite_text": " MOL BIO 203 or MOL BIO 204 or NEURBIO 206"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NEURBIO 209"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI D170 and PHRMSCI 120 and PHRMSCI 120L and BIO SCI M115. BIO SCI D170 with a grade of C or better. PHRMSCI 120 with a grade of C or better. PHRMSCI 120L with a grade of C or better. BIO SCI M115 with a grade of C or better. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " BIO SCI M115 and BIO SCI D170 and PHRMSCI 120 and PHRMSCI 120L. BIO SCI M115 with a grade of C or better. BIO SCI D170 with a grade of C or better. PHRMSCI 120 with a grade of C or better. PHRMSCI 120L with a grade of C or better"
            },
            {
                "prerequisite_text": " NUR SCI 109A and NUR SCI 108W and NUR SCI 119. NUR SCI 109A with a grade of C or better. NUR SCI 108W with a grade of C or better. NUR SCI 119 with a grade of C or better"
            },
            {
                "prerequisite_text": "BIO SCI D170 AND BIO SCI E109 AND NUR SCI 114A AND NUR SCI 118A"
            },
            {
                "prerequisite_text": "BIO SCI D170 AND BIO SCI E109 AND NUR SCI 110W AND NUR SCI 118A AND NUR SCI 112LA"
            },
            {
                "prerequisite_text": "NUR SCI 125 AND NUR SCI 135 AND NUR SCI 110W AND NUR SCI 114A AND NUR SCI 114B AND NUR SCI 118A AND NUR SCI 118B AND NUR SCI 112LA"
            },
            {
                "prerequisite_text": "BIO SCI D170 AND BIO SCI E109 AND NUR SCI 110W AND NUR SCI 112LA"
            },
            {
                "prerequisite_text": "NUR SCI 125 AND NUR SCI 135 AND NUR SCI 110W AND NUR SCI 114A AND NUR SCI 118A AND NUR SCI 118B AND NUR SCI 112LA AND NUR SCI 112LB"
            },
            {
                "prerequisite_text": " PSYCH 7A or PSCI 9. PSYCH 7A with a grade of C or better. PSCI 9 with a grade of C or better"
            },
            {
                "prerequisite_text": " NUR SCI 108W and NUR SCI 109A and NUR SCI 119. NUR SCI 108W with a grade of C or better. NUR SCI 109A with a grade of C or better. NUR SCI 119 with a grade of C or better"
            },
            {
                "prerequisite_text": "BIO SCI D170 AND BIO SCI E109 AND NUR SCI 114A AND NUR SCI 112LA"
            },
            {
                "prerequisite_text": "NUR SCI 125 AND NUR SCI 135 AND NUR SCI 110W AND NUR SCI 114A AND NUR SCI 114B AND NUR SCI 118A AND NUR SCI 112LA AND NUR SCI 112LB"
            },
            {
                "prerequisite_text": " BIO SCI M115 and BIO SCI D170 and PHRMSCI 120 and PHRMSCI 120L. BIO SCI M115 with a grade of C or better. BIO SCI D170 with a grade of C or better. PHRMSCI 120 with a grade of C or better. PHRMSCI 120L with a grade of C or better"
            },
            {
                "prerequisite_text": "NUR SCI 125 AND NUR SCI 135 AND NUR SCI 140 AND NUR SCI 114B AND NUR SCI 118B AND NUR SCI 112LB"
            },
            {
                "prerequisite_text": " NUR SCI 108W and NUR SCI 109A and NUR SCI 119. NUR SCI 108W with a grade of C or better. NUR SCI 109A with a grade of C or better. NUR SCI 119 with a grade of C or better"
            },
            {
                "prerequisite_text": " NUR SCI 109B and NUR SCI 117 and NUR SCI 121A. NUR SCI 109B with a grade of C or better. NUR SCI 117 with a grade of C or better. NUR SCI 121A with a grade of C or better"
            },
            {
                "prerequisite_text": "NUR SCI 135 AND NUR SCI 110W AND NUR SCI 114A AND NUR SCI 114B AND NUR SCI 118A AND NUR SCI 118B AND NUR SCI 112LA AND NUR SCI 112LB AND ( MATH 7 OR STATS 7 )"
            },
            {
                "prerequisite_text": " NUR SCI 109B and NUR SCI 117 and NUR SCI 121A. NUR SCI 109B with a grade of C or better. NUR SCI 117 with a grade of C or better. NUR SCI 121A with a grade of C or better"
            },
            {
                "prerequisite_text": " NUR SCI 120 and NUR SCI 140 and NUR SCI 116. NUR SCI 120 with a grade of C or better. NUR SCI 140 with a grade of C or better. NUR SCI 116 with a grade of C or better"
            },
            {
                "prerequisite_text": " NUR SCI 120 and NUR SCI 140 and NUR SCI 116. NUR SCI 120 with a grade of C or better. NUR SCI 140 with a grade of C or better. NUR SCI 116 with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "NUR SCI 125 AND NUR SCI 110W AND NUR SCI 114A AND NUR SCI 114B AND NUR SCI 118A AND NUR SCI 118B AND NUR SCI 112LA AND NUR SCI 112LB"
            },
            {
                "prerequisite_text": " NUR SCI 112LB and NUR SCI 114B and NUR SCI 118B and NUR SCI 125 and NUR SCI 135"
            },
            {
                "prerequisite_text": "NUR SCI 130 AND NUR SCI 132 AND NUR SCI 160 AND NUR SCI 179A"
            },
            {
                "prerequisite_text": "NUR SCI 130 AND NUR SCI 132 AND NUR SCI 150 AND NUR SCI 179AW"
            },
            {
                "prerequisite_text": "NUR SCI 150 AND NUR SCI 160 AND NUR SCI 175L AND NUR SCI 179AW AND NUR SCI 179BW"
            },
            {
                "prerequisite_text": " NUR SCI 150 and NUR SCI 160 and NUR SCI 179AW. NUR SCI 150 with a grade of C or better. NUR SCI 160 with a grade of C or better. NUR SCI 179AW with a grade of C or better"
            },
            {
                "prerequisite_text": " NUR SCI 130 and NUR SCI 132"
            },
            {
                "prerequisite_text": " NUR SCI 179AW. NUR SCI 179AW with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 202 and NUR SCI 208 and NUR SCI 209A and NUR SCI 219. NUR SCI 202 with a grade of B or better. NUR SCI 208 with a grade of B or better. NUR SCI 209A with a grade of B or better. NUR SCI 219 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: a graduate-level statistics course."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 202 and NUR SCI 208 and NUR SCI 209A and NUR SCI 219. NUR SCI 202 with a grade of B or better. NUR SCI 208 with a grade of B or better. NUR SCI 209A with a grade of B or better. NUR SCI 219 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 202 and NUR SCI 208 and NUR SCI 209A and NUR SCI 219. NUR SCI 202 with a grade of B or better. NUR SCI 208 with a grade of B or better. NUR SCI 209A with a grade of B or better. NUR SCI 219 with a grade of B or better"
            },
            {
                "prerequisite_text": " NUR SCI 209B and NUR SCI 217 and NUR SCI 221A. NUR SCI 209B with a grade of B or better. NUR SCI 217 with a grade of B or better. NUR SCI 221A with a grade of B or better"
            },
            {
                "prerequisite_text": " Consent of the instructor is required."
            },
            {
                "prerequisite_text": " NUR SCI 222A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 223A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 225A. NUR SCI 225A with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 212 and NUR SCI 226"
            },
            {
                "prerequisite_text": " NUR SCI 227A. NUR SCI 227A with a grade of B or better"
            },
            {
                "prerequisite_text": " NUR SCI 209B and NUR SCI 217 and NUR SCI 221A. NUR SCI 209B with a grade of B or better. NUR SCI 217 with a grade of B or better. NUR SCI 221A with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Consent of the instructor is required."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 235. NUR SCI 235 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "NUR SCI 237"
            },
            {
                "prerequisite_text": "NUR SCI 240"
            },
            {
                "prerequisite_text": "NUR SCI 241"
            },
            {
                "prerequisite_text": "NUR SCI 242"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 210 and NUR SCI 230. NUR SCI 210 with a grade of B or better. NUR SCI 230 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 212"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 210 and NUR SCI 230. NUR SCI 210 with a grade of B or better. NUR SCI 230 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "NUR SCI 210 AND NUR SCI 230"
            },
            {
                "prerequisite_text": " NUR SCI 245. NUR SCI 245 with a grade of B or better"
            },
            {
                "prerequisite_text": " Enrollment in a UCI Ph.D. program and at least one introduction qualitative course."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 200 and NUR SCI 262 and NUR SCI 264A and NUR SCI 264B and NUR SCI 268A and NUR SCI 268B and NUR SCI 265 and NUR SCI 281"
            },
            {
                "prerequisite_text": " NUR SCI 200 and NUR SCI 262 and NUR SCI 264A and NUR SCI 264B and NUR SCI 268A and NUR SCI 268B and NUR SCI 265 and NUR SCI 281"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 268A"
            },
            {
                "prerequisite_text": " NUR SCI 210 and NUR SCI 230. NUR SCI 210 with a grade of B or better. NUR SCI 230 with a grade of B or better"
            },
            {
                "prerequisite_text": " NUR SCI 215 and NUR SCI 274 and NUR SCI 276"
            },
            {
                "prerequisite_text": "NUR SCI 266 AND NUR SCI 267"
            },
            {
                "prerequisite_text": "NUR SCI 266 AND NUR SCI 267"
            },
            {
                "prerequisite_text": " NUR SCI 272 and NUR SCI 273"
            },
            {
                "prerequisite_text": " NUR SCI 215 and NUR SCI 274 and NUR SCI 276"
            },
            {
                "prerequisite_text": " NUR SCI 272 and NUR SCI 273"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 245. NUR SCI 245 with a grade of B or better"
            },
            {
                "prerequisite_text": " NUR SCI 200"
            },
            {
                "prerequisite_text": " NUR SCI 210 and NUR SCI 230 and (NUR SCI 230L or NUR SCI 231L). NUR SCI 210 with a grade of B or better. NUR SCI 230 with a grade of B or better. NUR SCI 230L with a grade of B or better. NUR SCI 231L with a grade of B or better"
            },
            {
                "prerequisite_text": " NUR SCI 285. NUR SCI 285 with a grade of B or better"
            },
            {
                "prerequisite_text": " NUR SCI 286. NUR SCI 286 with a grade of B or better"
            },
            {
                "prerequisite_text": " NUR SCI 287. NUR SCI 287 with a grade of B or better"
            },
            {
                "prerequisite_text": " NUR SCI 288. NUR SCI 288 with a grade of B or better"
            },
            {
                "prerequisite_text": " NUR SCI 289. NUR SCI 289 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " NUR SCI 291. NUR SCI 291 with a grade of B or better"
            },
            {
                "prerequisite_text": " NUR SCI 292. NUR SCI 292 with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Advancement to candidacy."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "M&MG 215"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PED GEN 200A"
            },
            {
                "prerequisite_text": " PED GEN 200B"
            },
            {
                "prerequisite_text": " PED GEN 200A"
            },
            {
                "prerequisite_text": " PED GEN 200A and PED GEN 200D"
            },
            {
                "prerequisite_text": " PED GEN 200A"
            },
            {
                "prerequisite_text": " PED GEN 200B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PED GEN 200A and PED GEN 200B and PED GEN 200C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PED GEN 202A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PED GEN 204A"
            },
            {
                "prerequisite_text": " PED GEN 204B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": " PERSIAN 1A. PERSIAN 1A with a grade of C or better. Placement into PERSIAN 1B is also accepted."
            },
            {
                "prerequisite_text": " PERSIAN 1B or PERSIAN S1AB. PERSIAN 1B with a grade of C or better. PERSIAN S1AB with a grade of C or better. Placement into PERSIAN 1C is also accepted."
            },
            {
                "prerequisite_text": " PERSIAN 1C or PERSIAN S1BC. PERSIAN 1C with a grade of C or better. PERSIAN S1BC with a grade of C or better. Placement into PERSIAN 2A is also accepted."
            },
            {
                "prerequisite_text": " PERSIAN 2A. PERSIAN 2A with a grade of C or better. Placement into PERSIAN 2B is also accepted."
            },
            {
                "prerequisite_text": " PERSIAN 2B. PERSIAN 2B with a grade of C or better. Placement into PERSIAN 2C is also accepted."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHARM 251"
            },
            {
                "prerequisite_text": " PHARM 299"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( LPS 104 OR MATH 6B OR PHILOS 104 )"
            },
            {
                "prerequisite_text": " LSCI 145A or LPS 105A or PHILOS 105A"
            },
            {
                "prerequisite_text": " LSCI 145B or LPS 105B or PHILOS 105B"
            },
            {
                "prerequisite_text": " PHILOS 105B or LPS 105B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: PHILOS 10. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: PHILOS 10 or PHILOS 11. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: PHILOS 12."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 2D and (MATH 3A or MATH 6G)"
            },
            {
                "prerequisite_text": " MATH 2D and (MATH 3A or MATH 6G)"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHILOS 205A or LPS 205A"
            },
            {
                "prerequisite_text": " PHILOS 205B or LPS 205B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "LPS 205C AND PHILOS 205C AND SOC SCI 205C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHMD 200A"
            },
            {
                "prerequisite_text": " PHMD 200A and PHMD 200B"
            },
            {
                "prerequisite_text": " PHMD 200A and PHMD 200B and PHMD 200C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHMD 201A"
            },
            {
                "prerequisite_text": " PHMD 201A and PHMD 201B"
            },
            {
                "prerequisite_text": " PHMD 201A and PHMD 201B and PHMD 201C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHMD 202A"
            },
            {
                "prerequisite_text": " PHMD 202A and PHMD 202B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHMD 203A"
            },
            {
                "prerequisite_text": " PHMD 203A and PHMD 203B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHMD 204A"
            },
            {
                "prerequisite_text": " PHMD 204A and PHMD 204B"
            },
            {
                "prerequisite_text": " PHMD 213 and PHMD 220"
            },
            {
                "prerequisite_text": " PHMD 213 and PHMD 220"
            },
            {
                "prerequisite_text": " PHMD 205A and PHMD 205B"
            },
            {
                "prerequisite_text": " PHMD 220 and PHMD 277A and PHMD 277B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHMD 210"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHMD 274A"
            },
            {
                "prerequisite_text": " PHMD 274A and PHMD 274B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHMD 277A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": "( PHRMSCI 120 OR BIO SCI E109 )"
            },
            {
                "prerequisite_text": " BIO SCI 99 and CHEM 51C. CHEM 51C with a grade of C- or better"
            },
            {
                "prerequisite_text": " BIO SCI 98 and BIO SCI 99 and PHRMSCI 120"
            },
            {
                "prerequisite_text": " PHRMSCI 170A. PHRMSCI 170A with a grade of C- or better"
            },
            {
                "prerequisite_text": " BIO SCI 99"
            },
            {
                "prerequisite_text": " (CHEM 51C or CHEM H52C) and (PHRMSCI 120 or BIO SCI E109)"
            },
            {
                "prerequisite_text": " PHRMSCI 170A"
            },
            {
                "prerequisite_text": "BIO SCI 99 AND PHYSICS 3C AND ( CHEM 1C OR CHEM H2C ) AND ( MATH 2B OR AP CALCULUS BC ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " BIO SCI 99 and (CHEM 51C or CHEM H52C)"
            },
            {
                "prerequisite_text": " PHRMSCI 170B"
            },
            {
                "prerequisite_text": " PHRMSCI 170B"
            },
            {
                "prerequisite_text": " PHRMSCI 170B and BIO SCI 100"
            },
            {
                "prerequisite_text": " CSE 41 or I&C SCI 31. CSE 42 or I&C SCI 32 is recommended."
            },
            {
                "prerequisite_text": " CHEM 51A and CHEM 51B and CHEM 51C and (BIO SCI 98 or CHEM 128)"
            },
            {
                "prerequisite_text": "BIO SCI 100 AND ( CHEM 128 OR BIO SCI 98 ) AND ( CHEM 177 OR PHRMSCI 177 ) AND ( CHEM 51C OR CHEM H52C ) AND LOWER DIVISION WRITING"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHRMSCI 250A"
            },
            {
                "prerequisite_text": " PHRMSCI 250B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHARM 251"
            },
            {
                "prerequisite_text": " PHARM 299"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: High school chemistry and biology."
            },
            {
                "prerequisite_text": "( PHY SCI 5 OR BIO SCI 14 ) AND NO REPEATS ALLOWED"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "  Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " MATH 2A or AP Calculus AB or AP Calculus BC. AP Calculus AB with a minimum score of 4. AP Calculus BC with a minimum score of 3"
            },
            {
                "prerequisite_text": "MATH 2E AND ( MATH 3A OR MATH H3A )"
            },
            {
                "prerequisite_text": " PHYSICS 52B and PHYSICS 194"
            },
            {
                "prerequisite_text": "PHYSICS 50 AND ( PHYSICS 3C OR PHYSICS 7E )"
            },
            {
                "prerequisite_text": " PHYSICS 111A"
            },
            {
                "prerequisite_text": " (PHYSICS 7D or PHYSICS 3B) and PHYSICS 50"
            },
            {
                "prerequisite_text": " PHYSICS 7E and PHYSICS 112A"
            },
            {
                "prerequisite_text": " (PHYSICS 51A or PHYSICS 61A) and PHYSICS 50"
            },
            {
                "prerequisite_text": " PHYSICS 111B and PHYSICS 112B and PHYSICS 113A"
            },
            {
                "prerequisite_text": " PHYSICS 111B and PHYSICS 112B and PHYSICS 113B"
            },
            {
                "prerequisite_text": " PHYSICS 50 and (PHYSICS 60 or CHEM 1C or ENGRMAE 91)"
            },
            {
                "prerequisite_text": " PHYSICS 50 and PHYSICS 111A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSICS 52B"
            },
            {
                "prerequisite_text": " (PHYSICS 51B or PHYSICS 61B or PHYSICS 61C) and (PHYSICS 52C or PHYSICS 193) and (PHYSICS 194 or EDUC 143BW)"
            },
            {
                "prerequisite_text": " PHYSICS 50 and MATH 3D"
            },
            {
                "prerequisite_text": " PHYSICS 125A and PHYSICS 113A"
            },
            {
                "prerequisite_text": " PHYSICS 113B and PHYSICS 115A"
            },
            {
                "prerequisite_text": "PHYSICS 112A AND PHYSICS 112B"
            },
            {
                "prerequisite_text": " PHYSICS 112B"
            },
            {
                "prerequisite_text": " PHYSICS 113B"
            },
            {
                "prerequisite_text": " PHYSICS 111A"
            },
            {
                "prerequisite_text": " PHYSICS 111A and PHYSICS 61C"
            },
            {
                "prerequisite_text": "PHYSICS 194 AND PHYSICS 52A AND PHYSICS 52B AND PHYSICS 52C AND ( EECS 12 OR PHYSICS 53 OR I&C SCI 45C )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (PHYSICS 51A or PHYSICS 61A) and PHYSICS 111A and PHYSICS 112A"
            },
            {
                "prerequisite_text": " (PHYSICS 51A or PHYSICS 61A) and PHYSICS 111A and PHYSICS 112A"
            },
            {
                "prerequisite_text": " PHYSICS 115A"
            },
            {
                "prerequisite_text": " PHYSICS 115A"
            },
            {
                "prerequisite_text": "PHYSICS 147A"
            },
            {
                "prerequisite_text": "PHYSICS 147B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSICS 7C and PHYSICS 7D and PHYSICS 7E"
            },
            {
                "prerequisite_text": " PHYSICS 7E"
            },
            {
                "prerequisite_text": " BIO SCI 14 or PHY SCI 5"
            },
            {
                "prerequisite_text": " PHYSICS 61A or PHYSICS 51A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSICS 196A"
            },
            {
                "prerequisite_text": " PHYSICS 196B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( MATH 2A OR MATH 5A OR AP CALCULUS AB OR AP CALCULUS BC OR AP CALCULUS AB SUB OR PLACEMENT EXAM or authorization ) AND NO PHYSICS 7C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSICS 213A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSICS 214A and PHYSICS 215A and PHYSICS 215B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSICS 215A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSICS 215B"
            },
            {
                "prerequisite_text": " PHYSICS 234A and PHYSICS 235A"
            },
            {
                "prerequisite_text": " PHYSICS 234A and PHYSICS 235A"
            },
            {
                "prerequisite_text": " PHYSICS 215B"
            },
            {
                "prerequisite_text": " PHYSICS 235A"
            },
            {
                "prerequisite_text": " PHYSICS 133 and (PHYSICS 214A or CHEM 232A) and (PHYSICS 215B or CHEM 231B)"
            },
            {
                "prerequisite_text": " PHYSICS 238A"
            },
            {
                "prerequisite_text": " PHYSICS 238B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSICS 239A"
            },
            {
                "prerequisite_text": " PHYSICS 239B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSICS 242"
            },
            {
                "prerequisite_text": "PHYSICS 211 AND PHYSICS 240A"
            },
            {
                "prerequisite_text": " PHYSICS 240B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSICS 239A and PHYSICS 239B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( MATH 2A OR MATH 5A OR AP CALCULUS AB OR AP CALCULUS BC OR AP CALCULUS AB SUB ) AND NO PHYSICS 7C"
            },
            {
                "prerequisite_text": " PHYSICS 3A or AP Physics C: Mechanics. AP Physics C: Mechanics with a minimum score of 5"
            },
            {
                "prerequisite_text": "( PHYSICS 3A OR AP PHYSICS C:MECH ) AND ( MATH 2B OR MATH 5B OR AP CALCULUS BC )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( MATH 2J OR MATH 3A ) AND ( MATH 2E OR MATH H2E )"
            },
            {
                "prerequisite_text": "( MATH 2D OR MATH H2D ) AND ( PHYSICS 3C OR PHYSICS 7E )"
            },
            {
                "prerequisite_text": "( PHYSICS 3C OR PHYSICS 7E )"
            },
            {
                "prerequisite_text": " PHYSICS 7D or PHYSICS 3B"
            },
            {
                "prerequisite_text": " PHYSICS 51A or PHYSICS 61A"
            },
            {
                "prerequisite_text": " MATH 3A and MATH 3D"
            },
            {
                "prerequisite_text": "( MATH 2D OR MATH H2D ) AND ( PHYSICS 3C OR PHYSICS 7E )"
            },
            {
                "prerequisite_text": "( MATH 2D OR MATH H2D ) AND ( PHYSICS 3C OR PHYSICS 7E )"
            },
            {
                "prerequisite_text": " PHYSICS 61A or PHYSICS 51A"
            },
            {
                "prerequisite_text": " PHYSICS 61A or PHYSICS 51A"
            },
            {
                "prerequisite_text": "( MATH 2B OR AP CALCULUS BC )"
            },
            {
                "prerequisite_text": "PHYSICS 7C AND ( MATH 2D OR MATH H2D ) AND ( MATH 2B OR AP CALCULUS BC )"
            },
            {
                "prerequisite_text": "PHYSICS 7C AND ( MATH 2B OR AP CALCULUS BC )"
            },
            {
                "prerequisite_text": "PHYSICS 7C"
            },
            {
                "prerequisite_text": "PHYSICS 7D"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSICS H196A"
            },
            {
                "prerequisite_text": " PHYSICS H196B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " A biochemistry course."
            },
            {
                "prerequisite_text": " PHYSIO 206A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PHYSIO 215. PHYSIO 215 with a grade of B+ or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOC SCI 3A"
            },
            {
                "prerequisite_text": " POL SCI 10A"
            },
            {
                "prerequisite_text": " POL SCI 10B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "POL SCI 21A"
            },
            {
                "prerequisite_text": " POL SCI 21A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " POL SCI 21A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division writing requirement."
            },
            {
                "prerequisite_text": " SOC SCI 3A or SOC SCI 10A or SOC SCI 10B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "POL SCI 61A AND NO POL SCI 129"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " POL SCI 21A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( MATH 1A OR MATH 1B )"
            },
            {
                "prerequisite_text": " POL SCI 130A or ECON 116A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " POL SCI 31A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( POL SCI 6B OR POL SCI 6C OR POL SCI 31A )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " POL SCI 41A or INTL ST 11 or INTL ST 12 or REL STD 5A or REL STD 5B or REL STD 5C"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOCIOL 1 or POL SCI 11A or ECON 1"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " POL SCI 71A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " POL SCI 71A. Satisfactory completion of the Lower-Division Writing requirement. "
            },
            {
                "prerequisite_text": " POL SCI 71A"
            },
            {
                "prerequisite_text": "POL SCI 71A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " POL SCI 71A"
            },
            {
                "prerequisite_text": " POL SCI 71A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " POL SCI 210A"
            },
            {
                "prerequisite_text": " POL SCI 210B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "POL SCI 41A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Only open to students in the Political Science Honors Program."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Reading knowledge of Portuguese."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11B or PSYC 7A or PSYC 9B."
            },
            {
                "prerequisite_text": " Recommended: (PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C) and SE 10."
            },
            {
                "prerequisite_text": "( PSCI 9 OR PSCI 11C OR PSYCH 7A OR PSYCH 9C OR PSY BEH 9 OR PSY BEH 11C )"
            },
            {
                "prerequisite_text": "( PSCI 9 OR PSCI 11C OR PSYCH 7A OR PSYCH 9C OR PSY BEH 9 OR PSY BEH 11C )"
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11B or PSYC 7A or PSYC 9B."
            },
            {
                "prerequisite_text": "( PSCI 9 OR PSCI 11B OR PSYCH 7A OR PSYCH 9B OR PSY BEH 9 OR PSY BEH 11B ) AND ( PSYCH & SOC BEHAVIOR MAJORS ONLY OR PSYCHOLOGICAL SCI MAJORS ONLY OR SOCIAL ECOLOGY MAJORS ONLY OR PUB HEALTH POLICY MAJORS ONLY )"
            },
            {
                "prerequisite_text": " SE 10 and SE 13. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11B or PSYC 7A or PSYC 9B."
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11B or PSYC 7A or PSYC 9B."
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11B or PSYC 7A or PSYC 9B."
            },
            {
                "prerequisite_text": " Recommended: (PSCI 9 or PSCI 11B or PSYC 7A or PSYC 9B) and SE 10."
            },
            {
                "prerequisite_text": " PSCI 9 or PSYC 9B or PSCI 11B or PSYC 7A"
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11B or PSYC 7A or PSYC 9B."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( PSCI 9 OR PSCI 11A OR PSCI 11B OR PSYCH 7A OR PSYCH 9A OR PSYCH 9B OR PSY BEH 9 OR PSY BEH 11A OR PSY BEH 11B )"
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C."
            },
            {
                "prerequisite_text": "( PSCI 9 OR PSCI 11C OR PSYCH 7A OR PSYCH 9C OR PSY BEH 9 OR PSY BEH 11C )"
            },
            {
                "prerequisite_text": " Recommended: (PSCI 9 or PSCI 11C or PSYC 9C or PSYC 7A) and SE 10."
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C."
            },
            {
                "prerequisite_text": " Recommended: (PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C) and PSCI 102C."
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C."
            },
            {
                "prerequisite_text": "( PSCI 9 OR PSCI 11C OR PSYCH 7A OR PSYCH 9C OR PSY BEH 9 OR PSY BEH 11C )"
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSYC 7A or (PSCI 11A and PSCI 11C) or (PSYC 9A and PSYC 9C)."
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C."
            },
            {
                "prerequisite_text": "PSCI 102C AND ( PSCI 178S OR CRM/LAW 149 ) AND ( PSCI 9 OR PSCI 11C OR PSYCH 7A OR PSYCH 9C OR PSY BEH 9 OR PSY BEH 11C ) AND NO CRM/LAW C136 AND NO PSYCH 177F"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSYC 7A or PSCI 11A or PSYC 9A or BIOL 99."
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11B or PSCI 11C."
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C."
            },
            {
                "prerequisite_text": " BIOL N110 or BIOL N115A or PSYC 9A or PSCI 11A"
            },
            {
                "prerequisite_text": "( PSCI 102C OR PSY BEH 102C ) AND ( PSCI 11A OR PSYCH 9A OR PSY BEH 11A ) AND ( PSCI 11C OR PSYCH 9C OR PSY BEH 11C ) AND ( PSCI 11B OR PSYCH 9B OR PSY BEH 11B )"
            },
            {
                "prerequisite_text": " Recommended: PSCI 102C."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PSCI 11C or PSYC 9C"
            },
            {
                "prerequisite_text": "PSCYH 120P"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "SOCECOL 10 AND ( PSCI 9 OR PSCI 11C OR PSYCH 7A OR PSYCH 9C OR PSY BEH 9 OR PSY BEH 11C )"
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C."
            },
            {
                "prerequisite_text": " (PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C) and PSCI 101D and (PSCI 104S or UPPP 151)"
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C."
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11B or PSCI 11C or PSYC 7A or PSYC 9B or PSYC 9C."
            },
            {
                "prerequisite_text": " Recommended: (PSCI 9 or PSCI 11C or PSYC 7A or PSYC 9C) and SE 10 and SE 13."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11A or PSCI 11B or PSCI 11C or PSYC 7A or PSYC 9A or PSYC 9B or PSYC 9C."
            },
            {
                "prerequisite_text": " Recommended: (PSCI 11C or PSYC 9C) and PSCI 104S."
            },
            {
                "prerequisite_text": " Recommended: PSCI 11C or PSYC 9C."
            },
            {
                "prerequisite_text": " SE 13"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: PSYC 7A or PSCI 9 or PSCI 11A or PSCI 11B or PSCI 11C."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "CRM/LAW C7"
            },
            {
                "prerequisite_text": " Recommended: CLS C109."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SE 10"
            },
            {
                "prerequisite_text": " PSCI 11C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PSCI C200"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SE 264A and SE 264B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SE 264A and SE 264B and PSCI P203"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SE 264A and SE 264B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PCSI P280A. PCSI P280A with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Advancement to candidacy. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PSYCH 10A or COGS 10A"
            },
            {
                "prerequisite_text": " PSYCH 10A or COGS 10A"
            },
            {
                "prerequisite_text": " PSYCH H111A and (PSYC H11A or PSYCH 112A). Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": "( PSCI 11B OR PSYCH 9B ) AND ( PSCI 11C OR PSYCH 9C ) AND ( PSCI 11A OR PSYCH 9A ) AND ( AP CALCULUS BC OR ( ( MATH 2B OR PSYCH 10B ) AND ( MATH 2A OR PSYCH 10A OR AP CALCULUS AB ) ) ) AND ( MATH 7 OR STATS 7 OR PSYCH 10C OR AP STATISTICS )"
            },
            {
                "prerequisite_text": " PSYCH 112A and PSYCH 112LA. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " PSYCH 112B and PSYCH 112LB"
            },
            {
                "prerequisite_text": "PSYCH 112A"
            },
            {
                "prerequisite_text": "( PSYCH 112LA OR PSYCH H111A )"
            },
            {
                "prerequisite_text": "PSYCH 112C AND PSYCH 112LB"
            },
            {
                "prerequisite_text": "PSYCH 112M"
            },
            {
                "prerequisite_text": "PSYCH 112P"
            },
            {
                "prerequisite_text": "PSYCH 112R"
            },
            {
                "prerequisite_text": " (PSYCH 9A and PSYCH 9B and PSYCH 9C) or (PSY BEH 11A and PSY BEH 11B and PSY BEH 11C) and (PSYCH 10C or SOC SCI 10C or ANTHRO 10C or POL SCI 10C or SOCIOL 10C) or (MATH 2B and STATS 7)"
            },
            {
                "prerequisite_text": "( PSYCH 9B OR PSY BEH P11B ) AND ( PSYCH 9C OR PSY BEH P11C ) AND ( PSYCH 9A OR PSY BEH P11A ) AND ( PSYCH 10C OR ANTHRO 10C OR SOCIOL 10C OR POL SCI 10C OR SOC SCI 10C OR ( STATS 7 AND ( MATH 2B OR AP CALCULUS BC ) ) )"
            },
            {
                "prerequisite_text": "( PSYCH 9A OR PSY BEH 11A ) AND ( PSYCH 9B OR PSY BEH 11B ) AND ( PSYCH 9C OR PSY BEH 11C ) AND ( PSYCH 10C OR ANTHRO 10C OR SOCIOL 10C OR POL SCI 10C OR SOC SCI 10C OR ( ( STATS 7 OR ECON 15B ) AND ( MATH 2B OR AP CALCULUS BC ) ) )"
            },
            {
                "prerequisite_text": "( PSCI 11B OR PSYCH 9B ) AND ( PSCI 11C OR PSYCH 9C ) AND ( PSCI 11A OR PSYCH 9A ) AND ( AP CALCULUS BC OR ( ( MATH 2B OR PSYCH 10B ) AND ( MATH 2A OR PSYCH 10A OR AP CALCULUS AB ) ) ) AND ( MATH 7 OR STATS 7 OR PSYCH 10C OR AP STATISTICS )"
            },
            {
                "prerequisite_text": "( PSCI 9 OR PSCI 11C OR PSYCH 7A OR PSYCH 9C OR AP PSYCHOLOGY ) AND NO PSY BEH 102C AND NO PSCI 102C"
            },
            {
                "prerequisite_text": "( PSCI 9 OR PSCI 11A OR PSYCH 7A OR PSYCH 9A OR AP PSYCHOLOGY ) AND NO PSCI 111D"
            },
            {
                "prerequisite_text": " (PSYCH 7A or PSCI 9) or (PSYCH 9A or PSCI 11A) and (PSYCH 9B or PSCI 11B) and (PSYCH 9C or PSCI 11C)"
            },
            {
                "prerequisite_text": " PSYCH 7A or PSCI 9 or PSYCH 9C or PSCI 11C"
            },
            {
                "prerequisite_text": " (PSYCH 7A or PSCI 9) or (PSYCH 9A or PSCI 11A) and (PSYCH 9B or PSCI 11B) and (PSYCH 9C or PSCI 11C)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( PSYCH 7A OR PSYCH 9A OR PSYCH 9B OR PSYCH 9C OR PSY BEH 9 OR PSY BEH 11A OR PSY BEH 11B OR PSY BEH 11C OR AP PSYCHOLOGY )"
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A or PSYCH 9A or PSCI 11A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( PSYCH 7A OR PSYCH 9C OR PSY BEH 9 OR PSY BEH 11C OR AP PSYCHOLOGY )"
            },
            {
                "prerequisite_text": " (PSYCH 7A or PSY BEH 9) or (PSYCH 9C or PSY BEH 11C)"
            },
            {
                "prerequisite_text": " PSCI 11C or PSYCH 9C"
            },
            {
                "prerequisite_text": "( PSYCH 120D OR PSYCH 141D )"
            },
            {
                "prerequisite_text": "( PSYCH 7A OR PSYCH 9A OR PSY BEH 9 OR PSY BEH 11A OR AP PSYCHOLOGY )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( PSCI 11A OR PSYCH 9A OR PSY BEH 11A ) AND ( PSCI 11B OR PSYCH 9B OR PSY BEH 11B OR AP PSYCHOLOGY )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": "( PSYCH 7A OR PSY BEH 9 OR AP PSYCHOLOGY OR ( ( PSYCH 9A OR PSY BEH 11A ) AND ( PSYCH 9B OR PSY BEH 11B ) ) )"
            },
            {
                "prerequisite_text": " PSYCH 9A and PSYCH 9B"
            },
            {
                "prerequisite_text": " (PSYCH 7A or PSCI 9) or (PSYCH 9A or PSCI 11A)"
            },
            {
                "prerequisite_text": "( PSYCH 7A OR PSYCH 9B OR PSY BEH 9 OR PSY BEH 11B OR AP PSYCHOLOGY )"
            },
            {
                "prerequisite_text": "( PSYCH 7A OR PSYCH 9B OR PSY BEH 9 OR PSY BEH 11B OR AP PSYCHOLOGY )"
            },
            {
                "prerequisite_text": "( PSYCH 7A OR PSYCH 9B OR PSY BEH 9 OR PSY BEH 11B OR AP PSYCHOLOGY ) AND LOWER DIVISION WRITING"
            },
            {
                "prerequisite_text": "( MATH 2B OR ECON 15B OR PSYCH 10C ) AND NO PSYCH 139 AND NO ECON 109"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PSYCH 7A or PSCI 9 or PSYCH 9B or PSCI 11B or LSCI 3"
            },
            {
                "prerequisite_text": " PSYCH 56L or LINGUIS 51"
            },
            {
                "prerequisite_text": " PSYCH 150 or LSCI 155 or PSYCH 156A or LSCI 151"
            },
            {
                "prerequisite_text": " Prerequisites vary. "
            },
            {
                "prerequisite_text": "( PSCI 11B OR PSYCH 9B ) AND ( PSCI 9 OR PSCI 11A OR PSYCH 7A OR PSYCH 9A OR AP PSYCHOLOGY )"
            },
            {
                "prerequisite_text": " (PSYCH 7A or PSCI 9) or ((PSYCH 9A or PSCI 11A) and (PSYCH 9B or PSCI 11B)) or BIO SCI 35 or BIO SCI N110 or BIO SCI N115A"
            },
            {
                "prerequisite_text": " PSYCH 9A or PSY BEH 11A or PSYCH 7A or PSY BEH 9"
            },
            {
                "prerequisite_text": " (PSYCH 7A or PSY BEH 9 or PSYCH 9A or PSY BEH 11A) and (PSYCH 9B or PSY BEH 11B or BIO SCI 35 or BIO SCI N110 or BIO SCI N115A)"
            },
            {
                "prerequisite_text": " PSYCH 160A or BIO SCI 93 or BIO SCI H93"
            },
            {
                "prerequisite_text": " BIO SCI N110 or BIO SCI N115A or PSYCH 9A or PSCI 11A"
            },
            {
                "prerequisite_text": "( PSCI 11B OR PSYCH 9B ) AND ( PSCI 9 OR PSCI 11A OR PSYCH 7A OR PSYCH 9A OR AP PSYCHOLOGY )"
            },
            {
                "prerequisite_text": "( PSYCH 7A OR ANTHRO 2A OR PSY BEH 9 OR AP PSYCHOLOGY OR ( ( PSYCH 9C OR PSY BEH 11C ) AND ( PSYCH 9B OR PSY BEH 11B ) AND ( PSYCH 9A OR PSY BEH 11A ) ) )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (PSCI 9 or PSCI 11C or PSYCH 7A or PSYCH 9C) and PSCI 102C and (PSCI 178S or CRM/LAW C149)"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( PSYCH 7A OR ( PSYCH 9A AND PSYCH 9B AND PSYCH 9C ) )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " LSCI 251. LSCI 251 with a grade of B- or better"
            },
            {
                "prerequisite_text": "( PSYCH 7A OR PSY BEH 9 OR ( ( PSYCH 9B OR PSY BEH 11B ) AND ( PSYCH 9C OR PSY BEH 11C ) AND ( PSYCH 9A OR PSY BEH 11A ) ) )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PSYCH H101A"
            },
            {
                "prerequisite_text": " PSYCH H101B"
            },
            {
                "prerequisite_text": "( PSYCH 9C OR PSY BEH 11C ) AND ( ECON 15B OR PSYCH 10C OR ANTHRO 10C OR SOCIOL 10C OR POL SCI 10C OR SOC SCI 10C OR ( ( MATH 2B OR AP CALCULUS BC ) AND ( MATH 7 OR STATS 7 OR AP STATISTICS ) ) )"
            },
            {
                "prerequisite_text": "PSYCH H111A"
            },
            {
                "prerequisite_text": " PSYCH 111BW or PSYCH 112B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 1"
            },
            {
                "prerequisite_text": "( STATS 7 OR STATS 8 OR PUBHLTH 7 OR PUBHLTH 7A OR AP STATISTICS )"
            },
            {
                "prerequisite_text": "SOCECOL 10 AND SOCECOL 13 AND ( PSYCH 7A OR PSYCH 9C OR PSY BEH 9 OR PSY BEH 11C )"
            },
            {
                "prerequisite_text": "( HUMAN 1C OR HUMAN H1C OR WRITING 30 OR WRITING 31 OR WRITING 60 OR WRITING 39C ) AND UPPER DIVISION STANDING ONLY AND ( NO REPEATS ALLOWED IF GRADE = C OR BETTER )"
            },
            {
                "prerequisite_text": " PUBHLTH 105 or IN4MATX 171"
            },
            {
                "prerequisite_text": " PUBHLTH 101"
            },
            {
                "prerequisite_text": " PUBHLTH 1 or PUBHLTH 2 or CHC/LAT 61 or CHC/LAT 62 or CHC/LAT 63"
            },
            {
                "prerequisite_text": " PUBHLTH 1"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 1"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 1"
            },
            {
                "prerequisite_text": " Recommended: PSCI 9 or PSCI 11C or PSYCH 7A or PSYCH 9C."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 1"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 1 and PUBHLTH 2"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 1"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 1"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " One upper-division course in environmental science, public health, environmental policy, and/or environmental management."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 1"
            },
            {
                "prerequisite_text": " PUBHLTH 1"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 93 or BIO SCI H93"
            },
            {
                "prerequisite_text": " PUBHLTH 1"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 99 and BIO SCI 194S and CHEM 1C and CHEM 1LC and CHEM 1LD. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " PUBHLTH 194A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " PUBHLTH 194B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " PUBHLTH 194C"
            },
            {
                "prerequisite_text": " PUBHLTH 1 and PUBHLTH 2. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 196A"
            },
            {
                "prerequisite_text": " PUBHLTH 196B"
            },
            {
                "prerequisite_text": " PUBHLTH 1 and PUBHLTH 2"
            },
            {
                "prerequisite_text": " PUBHLTH 1"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 1"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " EPIDEM 204. EPIDEM 204 with a grade of B or better"
            },
            {
                "prerequisite_text": " EPIDEM 204B. EPIDEM 204B with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 206A. PUBHLTH 206A with a grade of B or better"
            },
            {
                "prerequisite_text": " EPIDEM 200A and EPIDEM 200B. EPIDEM 200A with a grade of B or better. EPIDEM 200B with a grade of B or better"
            },
            {
                "prerequisite_text": " PUBHLTH 206A. PUBHLTH 206A with a grade of B or better"
            },
            {
                "prerequisite_text": " PUBHLTH 207A. PUBHLTH 207A with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHC/LAT 211A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CHC/LAT 200A or PUBHLTH 246"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " MATH 2A and STATS 7"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 277A or EHS 206A"
            },
            {
                "prerequisite_text": " PUBHLTH 277B or EHS 206B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBH 206"
            },
            {
                "prerequisite_text": " PUBHLTH 283"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PUBHLTH 200 and PUBHLTH 244 and PUBHLTH 222 and PUBHLTH 264 and PUBHLTH 207A. PUBHLTH 200 with a grade of B or better. PUBHLTH 244 with a grade of B or better. PUBHLTH 222 with a grade of B or better. PUBHLTH 264 with a grade of B or better. PUBHLTH 207A with a grade of B or better"
            },
            {
                "prerequisite_text": " Advancement to candidacy."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( PUBHLTH 7A OR AP STATISTICS )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PUBHLTH 199 AND SCHOOL OF PUBHLTH ONLY"
            },
            {
                "prerequisite_text": " PUBHLTH H192A"
            },
            {
                "prerequisite_text": "PUBHLTH 199 AND PUBHLTH H192B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( REL STD 5A OR HISTORY 16A ) AND ( REL STD 5B OR HISTORY 16B ) AND ( REL STD 5C OR HISTORY 16C )"
            },
            {
                "prerequisite_text": "( REL STD 5A OR HISTORY 16A ) AND ( REL STD 5B OR HISTORY 16B ) AND ( REL STD 5C OR HISTORY 16C ) AND LOWER DIVISION WRITING"
            },
            {
                "prerequisite_text": " POL SCI 41A or INTL ST 11 or INTL ST 12 or REL STD 5A or REL STD 5B or REL STD 5C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ROTC 131 OR ROTC 132 OR ROTC 133 OR ROTC 141 OR ROTC 142 OR ROTC 143 OR ROTC 197 )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "ROTC 100L AND ( ROTC 11 OR ROTC 12 OR ROTC 13 OR ROTC 21 OR ROTC 22 OR ROTC 23 )"
            },
            {
                "prerequisite_text": " ROTC 11 and ROTC 12 and ROTC 13 and ROTC 21 and ROTC 22 and ROTC 23"
            },
            {
                "prerequisite_text": "ROTC 11 AND ROTC 12 AND ROTC 13 AND ROTC 21 AND ROTC 22 AND ROTC 23 AND ROTC 100L"
            },
            {
                "prerequisite_text": " ROTC 131 and ROTC 132 and ROTC 133"
            },
            {
                "prerequisite_text": " ROTC 131 and ROTC 132 and ROTC 133 and ROTC 141"
            },
            {
                "prerequisite_text": "ROTC 131 AND ROTC 132 AND ROTC 133 AND ROTC 141 AND ROTC 142 AND ROTC 100L"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " RUSSIAN 2C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Placement into RUSSIAN 1A."
            },
            {
                "prerequisite_text": "( RUSSIAN 1A OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( RUSSIAN 1B OR RUSSIAN 1AB OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( RUSSIAN 1C OR RUSSIAN 1BC OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( RUSSIAN 2A OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": "( RUSSIAN 2B OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement. Field Study authorization required for enrollment. "
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement. Authorization for field study."
            },
            {
                "prerequisite_text": " SOCECOL 10 and SOCECOL 13. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " BIO SCI 191A or SOCECOL 186A or EARTHSS 190A"
            },
            {
                "prerequisite_text": " BIO SCI 191B or EARTHSS 190B or SOCECOL 186B. BIO SCI 191B or EARTHSS 190B or SOCECOL 186B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " PSCI 192B"
            },
            {
                "prerequisite_text": " SOCECOL 13"
            },
            {
                "prerequisite_text": " SOCECOL 10. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " SOCECOL 10"
            },
            {
                "prerequisite_text": " SOCECOL 10 and SOCECOL 13. Acceptance to Advanced Field Study required."
            },
            {
                "prerequisite_text": " SOCECOL 195A. Acceptance to Advanced Field Study required."
            },
            {
                "prerequisite_text": " SOCECOL 195B. Acceptance to Advanced Field Study required. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " SOCECOL 10. Cumulative UC GPA of 2.0. Authorization is required. Successful completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOCECOL 264A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOCECOL 264A and SOCECOL 264B"
            },
            {
                "prerequisite_text": " SOCECOL 272A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Advancement to candidacy."
            },
            {
                "prerequisite_text": " Advancement to Candidacy."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOCECOL 74A"
            },
            {
                "prerequisite_text": " SOCECOL 74B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOCECOL H190A"
            },
            {
                "prerequisite_text": " SOCECOL H190B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOC SCI H1E or SOCECOL H20A"
            },
            {
                "prerequisite_text": " SOC SCI H1F or SOCECOL H20B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( ECON 10A OR PSYCH 10A OR ANTHRO 10A OR SOCIOL 10A OR SOC SCI 10A )"
            },
            {
                "prerequisite_text": " SOCIOL 10B or ANTHRO 10B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( PSYCH 112A OR PSYCH 112M OR SOCIOL 110 OR ANTHRO 100A OR SOC SCI 170A )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (ANTHRO 10A and ANTHRO 10B and ANTHRO 10C) or (SOCIOL 10A and SOCIOL 10B and SOCIOL 10C) or (SOC SCI 10A and SOC SCI 10B and SOC SCI 10C) or (MATH 2A and MATH 2B and (STATS 7 or MGMT 7)) or (STATS 120A and STATS 120B and STATS 120C) or (ECON 15A and ECON 15B)"
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " SOCIOL 1 or POL SCI 11A or ECON 1"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " SOCIOL 110"
            },
            {
                "prerequisite_text": " SOCIOL 110. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " SOCIOL H188A. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOCIOL 221A"
            },
            {
                "prerequisite_text": " SOCIOL 221A and SOCIOL 221B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "SOCIOL 227A"
            },
            {
                "prerequisite_text": " SOCIOL 227A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Enrollment in DASA program."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOC SCI 102A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " POL SCI 130A or ECON 116A"
            },
            {
                "prerequisite_text": " SOC SCI 3A"
            },
            {
                "prerequisite_text": " SOC SCI 10A"
            },
            {
                "prerequisite_text": "( ECON 10B OR PSYCH 10B OR ANTHRO 10B OR SOCIOL 10B OR SOC SCI 10B )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Prerequisites vary."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOC SCI 1A and SOC SCI 2A and SOC SCI 3A and (SOC SCI 10A or STATS 7)"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": "POL SCI 71A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Identification of a graduate student (who is in good standing) as a mentor."
            },
            {
                "prerequisite_text": " SOC SCI 70C or SOCIOL 63. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " SOC SCI 193A"
            },
            {
                "prerequisite_text": " SOC SCI 193B"
            },
            {
                "prerequisite_text": " SOC SCI 193B"
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOC SCI 195A"
            },
            {
                "prerequisite_text": " SOC SCI 195B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CRM/LAW C260C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Undergraduate course in political theory or equivalent."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOC SCI H190A or SPPS H190A"
            },
            {
                "prerequisite_text": " SOC SCI H190B or SPPS H190B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SOC SCI H1E or SOCECOL H20A"
            },
            {
                "prerequisite_text": " SOC SCI H1F or SOCECOL H20B"
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": "SPANISH 3B AND ( SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": " SPANISH 3 or SPANISH 3H. Placement into SPANISH 101A is also accepted."
            },
            {
                "prerequisite_text": "( SPANISH 3 OR ( SPANISH 3A AND SPANISH 3B ) )"
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": "SPANISH 3A AND SPANISH 3B"
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": "SPANISH 3B AND ( SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": " SPANISH 3 or SPANISH 3H. Placement into SPANISH 101A is also accepted."
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": "( SPANISH 3 OR SPANISH 3A OR SPANISH 3H )"
            },
            {
                "prerequisite_text": " SPANISH 107 or SPANISH 113A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": "( SPANISH 1A OR SPANISH S1AB )"
            },
            {
                "prerequisite_text": " SPANISH 1AB or SPANISH 1B or SPANISH S1AB. SPANISH 1AB with a grade of C or better. SPANISH 1B with a grade of C or better. SPANISH S1AB with a grade of B or better. Placement into SPANISH 1C is also accepted."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SPANISH 239A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SPANISH 1C or SPANISH S1BC. SPANISH 1C with a grade of C or better. SPANISH S1BC with a grade of C or better. Placement into SPANISH 2A is also accepted."
            },
            {
                "prerequisite_text": " SPANISH 1C or SPANISH S1BC. SPANISH 1C with a grade of C or better. SPANISH S1BC with a grade of C or better. Placement into SPANISH 2A is also accepted."
            },
            {
                "prerequisite_text": "( SPANISH 2A OR SPANISH 2MD OR SPANISH S2AB )"
            },
            {
                "prerequisite_text": " SPANISH 2AB or SPANISH 2B or SPANISH S2AB. SPANISH 2AB with a grade of C or better. SPANISH 2B with a grade of C or better. SPANISH S2AB with a grade of B or better. Placement into SPANISH 2C is also accepted."
            },
            {
                "prerequisite_text": "( SPANISH 2C OR SPANISH S2BC OR PLACEMENT EXAM or authorization )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Placement into SPANISH 2A or higher via Spanish Placement Test B is required."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Does not serve as prerequisite for any higher-level Spanish courses."
            },
            {
                "prerequisite_text": " Placement into SPANISH 1A."
            },
            {
                "prerequisite_text": " SPANISH S1AB or SPANISH 1A or SPANISH 1B. SPANISH S1AB with a grade of C or better. SPANISH 1A with a grade of C or better. SPANISH 1B with a grade of C or better. Placement into SPANISH 1B or SPANISH 1C is also accepted."
            },
            {
                "prerequisite_text": " SPANISH 1C or SPANISH S1BC. SPANISH 1C with a grade of C or better. SPANISH S1BC with a grade of C or better. Placement into SPANISH 2A is also accepted."
            },
            {
                "prerequisite_text": "( SPANISH 2A OR SPANISH 2B OR SPANISH 2BZ OR SPANISH 2MD OR SPANISH S2AB )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SSCI 70C or SOCL 63. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " SSCI 193A"
            },
            {
                "prerequisite_text": " SSCI 193B"
            },
            {
                "prerequisite_text": " SSCI 193B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SSCI H190A or SPPS H190A"
            },
            {
                "prerequisite_text": " SSCI H190B or SPPS H190B. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": "( STATS 7 OR STATS 8 OR AP STATISTICS OR ( STATS 120A AND STATS 120B AND STATS 120C ) )"
            },
            {
                "prerequisite_text": " STATS 110"
            },
            {
                "prerequisite_text": " STATS 111"
            },
            {
                "prerequisite_text": "STATS 110 AND STATS 120C"
            },
            {
                "prerequisite_text": "( MATH 4 OR MATH 2D ) AND ( AP CALCULUS BC OR ( MATH 2B AND ( MATH 2A OR AP CALCULUS AB OR AP CALCULUS AB SUB ) ) )"
            },
            {
                "prerequisite_text": " STATS 120A"
            },
            {
                "prerequisite_text": " STATS 120B and (MATH 3A or MATH 6G or I&C SCI 6N)"
            },
            {
                "prerequisite_text": " STATS 120C and (MATH 3A or I&C SCI 6N)"
            },
            {
                "prerequisite_text": " STATS 68 and IN4MATX 43 and COMPSCI 122A and COMPSCI 178 and I&C SCI 46 and STATS 111"
            },
            {
                "prerequisite_text": " STATS 170A and STATS 112. In Progress (IP) grade for STATS 170A is also accepted."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " STATS 120C"
            },
            {
                "prerequisite_text": "  Knowledge of basic statistics and linear algebra; Calculus I-III."
            },
            {
                "prerequisite_text": " STATS 200A"
            },
            {
                "prerequisite_text": " STATS 200AP. "
            },
            {
                "prerequisite_text": " STATS 200B"
            },
            {
                "prerequisite_text": " STATS 7 or STATS 8"
            },
            {
                "prerequisite_text": " STATS 201 or STATS 210"
            },
            {
                "prerequisite_text": " STATS 202"
            },
            {
                "prerequisite_text": "STATS 201 AND STATS 210 AND STATS 120C"
            },
            {
                "prerequisite_text": " STATS 200AP and STATS 200BP and STATS 210P"
            },
            {
                "prerequisite_text": " Knowledge of basic statistics, calculus, linear algebra."
            },
            {
                "prerequisite_text": "  Knowledge of basic statistics (at the level of STATS 7), calculus, and linear algebra."
            },
            {
                "prerequisite_text": " STATS 210. May not be taken for graduate credit by Ph.D. students in Statistics."
            },
            {
                "prerequisite_text": " STATS 210B. May not be taken for graduate credit by Ph.D. students in Statistics."
            },
            {
                "prerequisite_text": " STATS 200AP and STATS 200BP. Required: Knowledge of basic statistics and linear algebra."
            },
            {
                "prerequisite_text": " STATS 210"
            },
            {
                "prerequisite_text": "STATS 230 AND ( STATS 200C OR STATS 210P )"
            },
            {
                "prerequisite_text": " STATS 211"
            },
            {
                "prerequisite_text": " STATS 200C"
            },
            {
                "prerequisite_text": " STATS 220A and MATH 140B"
            },
            {
                "prerequisite_text": " STATS 205 and STATS 230"
            },
            {
                "prerequisite_text": " STATS 200C and STATS 225"
            },
            {
                "prerequisite_text": " Two quarters of upper-division or graduate training in probability and statistics."
            },
            {
                "prerequisite_text": " STATS 120C and STATS 205 and (STATS 201 or STATS 210)"
            },
            {
                "prerequisite_text": " STATS 120C and (MATH 3A or I&C SCI 6N)"
            },
            {
                "prerequisite_text": " STATS 200AP and STATS 200BP"
            },
            {
                "prerequisite_text": "STATS 200C AND ( STATS 201 OR STATS 210 )"
            },
            {
                "prerequisite_text": " STATS 200AP and STATS 200BP"
            },
            {
                "prerequisite_text": " STATS 210"
            },
            {
                "prerequisite_text": " STATS 210"
            },
            {
                "prerequisite_text": " Two quarters of upper-division or graduate training in statistical methods."
            },
            {
                "prerequisite_text": "STATS 230 AND ( STATS 210 OR STATS 200C )"
            },
            {
                "prerequisite_text": " STATS 120C"
            },
            {
                "prerequisite_text": " STATS 200AP and STATS 200BP"
            },
            {
                "prerequisite_text": " STATS 200C and STATS 210"
            },
            {
                "prerequisite_text": " STATS 120C"
            },
            {
                "prerequisite_text": " STATS 200AP and STATS 200BP"
            },
            {
                "prerequisite_text": " STATS 203 or STATS 212 or STATS 210C. STATS 203 with a grade of B or better. STATS 212 with a grade of B or better. STATS 210C with a grade of B or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "( MATH 2B OR AP CALCULUS BC ) AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )"
            },
            {
                "prerequisite_text": "I&C SCI 31 AND ( STATS 7 OR AP STATISTICS )"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " CS 161 and CS 171 and (ICS 6N or MATH 3A or MATH 6G)"
            },
            {
                "prerequisite_text": " CS 171"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Selected for Washington DC Center Program."
            },
            {
                "prerequisite_text": "( UCDC 170 OR SOCECOL 195 OR PUBHLTH 194W )"
            },
            {
                "prerequisite_text": " Selected for Washington DC Center Program."
            },
            {
                "prerequisite_text": " Project must be approved by a Student Affairs Department head and the instructor."
            },
            {
                "prerequisite_text": " UNI AFF 1A"
            },
            {
                "prerequisite_text": " UNI AFF 1B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " UNI STU 10"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "UNI STU 13B"
            },
            {
                "prerequisite_text": " UNI AFF 1A and UNI AFF 1B and UNI AFF 1C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " UNI STU 10"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " UNI STU 197A"
            },
            {
                "prerequisite_text": " UNI STU 197B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Teaching experience."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " UNI STU 390A"
            },
            {
                "prerequisite_text": " UNI STU 390B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Certificate of Teaching Excellence required, proof of instructor of record appointment required."
            },
            {
                "prerequisite_text": " UNI STU 390B"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " UNI STU H176A"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " UNI STU H30A. UNI STU H30A with a grade of C or better"
            },
            {
                "prerequisite_text": " UNI STU H30B. UNI STU H30B with a grade of C or better"
            },
            {
                "prerequisite_text": " EARTHSS H30C. EARTHSS H30C with a grade of C or better"
            },
            {
                "prerequisite_text": " SOC SCI H30D"
            },
            {
                "prerequisite_text": " UPPP H30E"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Recommended: Previous course work in economics."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SE 10 and SE 13. Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " UPPP 120. UPPP 120 with a grade of C or better"
            },
            {
                "prerequisite_text": " UPPP 125 and UPPP 120. UPPP 125 with a grade of C or better. UPPP 120 with a grade of C or better"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " SE 13"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Familiarity with basic statistics is required. "
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " PPD 294A"
            },
            {
                "prerequisite_text": " Advancement to candidacy."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization"
            },
            {
                "prerequisite_text": " VIETMSE 1A. VIETMSE 1A with a grade of C or better. Placement into VIETMSE 1B is also accepted."
            },
            {
                "prerequisite_text": " VIETMSE 1B or VIETMSE S1AB. VIETMSE 1B with a grade of C or better. VIETMSE S1AB with a grade of C or better. Placement into VIETMSE 1C is also accepted. "
            },
            {
                "prerequisite_text": " VIETMSE 1C and VIETMSE S1BC. VIETMSE 1C with a grade of C or better. VIETMSE S1BC with a grade of C or better. Placement into VIETMSE 2A is also accepted."
            },
            {
                "prerequisite_text": " VIETMSE 2A. VIETMSE 2A with a grade of C or better. Placement into VIETMSE 2B is also accepted."
            },
            {
                "prerequisite_text": " VIETMSE 2B. VIETMSE 2B with a grade of C or better. Placement into VIETMSE 2C is also accepted."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " VIS STD 290A and VIS STD 290B and VIS STD 290C"
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " (WRITING 30 or WRITING 31) and (WRITING 90 or WRITING 91) and (WRITING 30 or WRITING 31 or WRITING 90 or WRITING 91 or ENGLISH 16 or ENGLISH 17). Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfactory completion of the Lower-Division Writing requirement."
            },
            {
                "prerequisite_text": " Satisfactory completion of the lower-division writing requirement."
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": ""
            },
            {
                "prerequisite_text": " Satisfaction of the UC Entry Level Writing requirement."
            },
            {
                "prerequisite_text": " Satisfaction of the UC Entry Level Writing requirement. "
            },
            {
                "prerequisite_text": " Students must have taken the UC Analytical Writing Placement Examination."
            },
            {
                "prerequisite_text": " Placement via the UC Analytical Writing Placement Examination is required."
            },
            {
                "prerequisite_text": " Students must have taken the UC Analytical Writing Placement Examination and the Academic English Placement Test."
            },
            {
                "prerequisite_text": " Satisfaction of the UC Entry Level Writing requirement."
            },
            {
                "prerequisite_text": "( HUMAN 1AS OR HUMAN 1BS OR WRITING 37 OR WRITING 39B )"
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization AND NO WRITING 45 AND NO WRITING 40A AND NO WRITING 37 AND NO WRITING 39AP"
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization AND NO WRITING 40 AND NO WRITING 45 AND NO WRITING 39A AND NO WRITING 37"
            },
            {
                "prerequisite_text": "PLACEMENT EXAM or authorization AND NO WRITING 40 AND NO WRITING 50 AND NO WRITING 39A AND NO WRITING 39B"
            },
            {
                "prerequisite_text": " Satisfaction of the UC Entry Level Writing requirement."
            },
            {
                "prerequisite_text": "( HUMAN 1AS OR HUMAN 1BS OR WRITING 37 OR WRITING 45 OR WRITING 50 OR WRITING 39B OR AP ENGLISH LIT OR AP ENGLISH LANGUAGE )"
            },
            {
                "prerequisite_text": " WRITING 30 or WRITING 31"
            },
            {
                "prerequisite_text": " WRITING 30 or WRITING 31"
            }
        ]
    }
}

const departmentData = {
    "data": {
      "allCourses": [
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AC ENG"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "AFAM"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANATOMY"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ANTHRO"
        },
        {
          "department": "ARABIC"
        },
        {
          "department": "ARABIC"
        },
        {
          "department": "ARABIC"
        },
        {
          "department": "ARABIC"
        },
        {
          "department": "ARABIC"
        },
        {
          "department": "ARABIC"
        },
        {
          "department": "ARABIC"
        },
        {
          "department": "ARABIC"
        },
        {
          "department": "ARABIC"
        },
        {
          "department": "ARABIC"
        },
        {
          "department": "ARMN"
        },
        {
          "department": "ARMN"
        },
        {
          "department": "ARMN"
        },
        {
          "department": "ARMN"
        },
        {
          "department": "ARMN"
        },
        {
          "department": "ARMN"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ART HIS"
        },
        {
          "department": "ARTS"
        },
        {
          "department": "ARTS"
        },
        {
          "department": "ARTS"
        },
        {
          "department": "ARTS"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "ASIANAM"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BANA"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BATS"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIOCHEM"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BIO SCI"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "BME"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CBE"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHC/LAT"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHEM"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CHINESE"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLASSIC"
        },
        {
          "department": "CLT&THY"
        },
        {
          "department": "CLT&THY"
        },
        {
          "department": "CLT&THY"
        },
        {
          "department": "CLT&THY"
        },
        {
          "department": "CLT&THY"
        },
        {
          "department": "CLT&THY"
        },
        {
          "department": "CLT&THY"
        },
        {
          "department": "CLT&THY"
        },
        {
          "department": "CLT&THY"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COGS"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COM LIT"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "COMPSCI"
        },
        {
          "department": "CRITISM"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CRM/LAW"
        },
        {
          "department": "CSE"
        },
        {
          "department": "CSE"
        },
        {
          "department": "CSE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DANCE"
        },
        {
          "department": "DATA"
        },
        {
          "department": "DATA"
        },
        {
          "department": "DATA"
        },
        {
          "department": "DATA"
        },
        {
          "department": "DATA"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DEV BIO"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "DRAMA"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EARTHSS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "EAS"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECO EVO"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECON"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "ECPS"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EDUC"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EECS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "EHS"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGLISH"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGRCEE"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGR"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "ENGRMAE"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EPIDEM"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "EURO ST"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FIN"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FLM&MDA"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "FRENCH"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GDIM"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GEN&SEX"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GERMAN"
        },
        {
          "department": "GLBLCLT"
        },
        {
          "department": "GLBLCLT"
        },
        {
          "department": "GLBLCLT"
        },
        {
          "department": "GLBLCLT"
        },
        {
          "department": "GLBLCLT"
        },
        {
          "department": "GLBL ME"
        },
        {
          "department": "GLBL ME"
        },
        {
          "department": "GLBL ME"
        },
        {
          "department": "GLBL ME"
        },
        {
          "department": "GREEK"
        },
        {
          "department": "GREEK"
        },
        {
          "department": "GREEK"
        },
        {
          "department": "GREEK"
        },
        {
          "department": "GREEK"
        },
        {
          "department": "GREEK"
        },
        {
          "department": "GREEK"
        },
        {
          "department": "GREEK"
        },
        {
          "department": "GREEK"
        },
        {
          "department": "HEBREW"
        },
        {
          "department": "HEBREW"
        },
        {
          "department": "HEBREW"
        },
        {
          "department": "HEBREW"
        },
        {
          "department": "HEBREW"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HISTORY"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "HUMAN"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "I&C SCI"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "IN4MATX"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INNO"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "INTL ST"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "IRAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "ITALIAN"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "JAPANSE"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "KOREAN"
        },
        {
          "department": "LATIN"
        },
        {
          "department": "LATIN"
        },
        {
          "department": "LATIN"
        },
        {
          "department": "LATIN"
        },
        {
          "department": "LATIN"
        },
        {
          "department": "LATIN"
        },
        {
          "department": "LATIN"
        },
        {
          "department": "LATIN"
        },
        {
          "department": "LATIN"
        },
        {
          "department": "LINGUIS"
        },
        {
          "department": "LIT JRN"
        },
        {
          "department": "LIT JRN"
        },
        {
          "department": "LIT JRN"
        },
        {
          "department": "LIT JRN"
        },
        {
          "department": "LIT JRN"
        },
        {
          "department": "LIT JRN"
        },
        {
          "department": "LIT JRN"
        },
        {
          "department": "LIT JRN"
        },
        {
          "department": "LIT JRN"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LPS"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "LSCI"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "M&MG"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MATH"
        },
        {
          "department": "MED HUM"
        },
        {
          "department": "MED HUM"
        },
        {
          "department": "MED HUM"
        },
        {
          "department": "MED HUM"
        },
        {
          "department": "MED HUM"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT EP"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT FE"
        },
        {
          "department": "MGMT HC"
        },
        {
          "department": "MGMT HC"
        },
        {
          "department": "MGMT HC"
        },
        {
          "department": "MGMT HC"
        },
        {
          "department": "MGMT HC"
        },
        {
          "department": "MGMT HC"
        },
        {
          "department": "MGMT HC"
        },
        {
          "department": "MGMT HC"
        },
        {
          "department": "MGMT HC"
        },
        {
          "department": "MGMT HC"
        },
        {
          "department": "MGMT HC"
        },
        {
          "department": "MGMT HC"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTMBA"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MGMTPHD"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MOL BIO"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MPAC"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MSE"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "MUSIC"
        },
        {
          "department": "NET SYS"
        },
        {
          "department": "NET SYS"
        },
        {
          "department": "NET SYS"
        },
        {
          "department": "NET SYS"
        },
        {
          "department": "NET SYS"
        },
        {
          "department": "NET SYS"
        },
        {
          "department": "NET SYS"
        },
        {
          "department": "NET SYS"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NEURBIO"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "NUR SCI"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PATH"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PED GEN"
        },
        {
          "department": "PERSIAN"
        },
        {
          "department": "PERSIAN"
        },
        {
          "department": "PERSIAN"
        },
        {
          "department": "PERSIAN"
        },
        {
          "department": "PERSIAN"
        },
        {
          "department": "PERSIAN"
        },
        {
          "department": "PERSIAN"
        },
        {
          "department": "PERSIAN"
        },
        {
          "department": "PERSIAN"
        },
        {
          "department": "PERSIAN"
        },
        {
          "department": "PERSIAN"
        },
        {
          "department": "PERSIAN"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHARM"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHILOS"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHMD"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHRMSCI"
        },
        {
          "department": "PHY SCI"
        },
        {
          "department": "PHY SCI"
        },
        {
          "department": "PHY SCI"
        },
        {
          "department": "PHY SCI"
        },
        {
          "department": "PHY SCI"
        },
        {
          "department": "PHY SCI"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSICS"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "PHYSIO"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "POL SCI"
        },
        {
          "department": "PORTUG"
        },
        {
          "department": "PORTUG"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSCI"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PSYCH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "PUBHLTH"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "REL STD"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "ROTC"
        },
        {
          "department": "RUSSIAN"
        },
        {
          "department": "RUSSIAN"
        },
        {
          "department": "RUSSIAN"
        },
        {
          "department": "RUSSIAN"
        },
        {
          "department": "RUSSIAN"
        },
        {
          "department": "RUSSIAN"
        },
        {
          "department": "RUSSIAN"
        },
        {
          "department": "RUSSIAN"
        },
        {
          "department": "RUSSIAN"
        },
        {
          "department": "RUSSIAN"
        },
        {
          "department": "RUSSIAN"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCECOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOCIOL"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SOC SCI"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPANISH"
        },
        {
          "department": "SPPS"
        },
        {
          "department": "SPPS"
        },
        {
          "department": "SPPS"
        },
        {
          "department": "SPPS"
        },
        {
          "department": "SPPS"
        },
        {
          "department": "SPPS"
        },
        {
          "department": "SPPS"
        },
        {
          "department": "SPPS"
        },
        {
          "department": "SPPS"
        },
        {
          "department": "SPPS"
        },
        {
          "department": "SPPS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "STATS"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "SWE"
        },
        {
          "department": "UCDC"
        },
        {
          "department": "UCDC"
        },
        {
          "department": "UCDC"
        },
        {
          "department": "UNI AFF"
        },
        {
          "department": "UNI AFF"
        },
        {
          "department": "UNI AFF"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UNI STU"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "UPPP"
        },
        {
          "department": "VIETMSE"
        },
        {
          "department": "VIETMSE"
        },
        {
          "department": "VIETMSE"
        },
        {
          "department": "VIETMSE"
        },
        {
          "department": "VIETMSE"
        },
        {
          "department": "VIETMSE"
        },
        {
          "department": "VIETMSE"
        },
        {
          "department": "VIETMSE"
        },
        {
          "department": "VIETMSE"
        },
        {
          "department": "VIS STD"
        },
        {
          "department": "VIS STD"
        },
        {
          "department": "VIS STD"
        },
        {
          "department": "VIS STD"
        },
        {
          "department": "VIS STD"
        },
        {
          "department": "VIS STD"
        },
        {
          "department": "VIS STD"
        },
        {
          "department": "VIS STD"
        },
        {
          "department": "VIS STD"
        },
        {
          "department": "VIS STD"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        },
        {
          "department": "WRITING"
        }
      ]
    }
  }

const DATA_LENGTH = data['data']['allCourses'].length;



// for (let i = 0; i < DATA_LENGTH; i++) {
//     let currentPRText = data['data']['allCourses'][i]['prerequisite_text']

//     if (currentPRText === "") {
//         continue;
//     }

//     let a = strToClauses(currentPRText)

//     fs.writeFile('./services/tests/prerequisite-list.txt', a.length + ": " + currentPRText+'\n', { flag: 'a' }, (err) => {
//         if (err) {
//             console.log(err)
//         }
//     })
// }

let depts = [];

for (let i = 0; i < DATA_LENGTH; i++) {
    let currentPRText = departmentData['data']['allCourses'][i]['department']

    if (depts.includes(currentPRText)) {
        continue;
    }

    depts.push(currentPRText)

    fs.writeFile('./services/tests/department-list.txt', `'${currentPRText}',\n`, { flag: 'a' }, (err) => {
        if (err) {
            console.log(err)
        }
    })
}