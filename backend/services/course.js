const Requisites = require('./requisites.js');
// courseData will be in the format:

// {
//     course: {
//         id: 'COMPSCI161',
//         description: 'Techniques for efficient algorithm design, including divide-and-conquer and dynamic programming, and time/space analysis. Fast algorithms for problems applicable to networks, computer games, and scientific computing, such as sorting, shortest paths, minimum spanning trees, network flow, and pattern matching.',
//         corequisite: '',
//         restriction: 'School of Info & Computer Sci students have first consideration for enrollment. Software Engineering Majors have first consideration for enrollment. Data Science Majors have first consideration for enrollment. Computer Science Engineering Majors have first consideration for enrollment. Computer Science Majors have first consideration for enrollment. Business Information Management, Computer Game Science, and Informatics majors have second right of consideration.',
//         prerequisite_text: 'I&C SCI 6B AND I&C SCI 6D AND ( MATH 2B OR AP CALCULUS BC ) AND ( CSE 46 OR I&C SCI 46 ) AND ( SCHOOL OF I&C SCI ONLY OR COMPUTER SCI & ENGR MAJORS ONLY )'
//     }
// }

class Course {
    #id;
    #description;
    #corequisites;
    #prerequisites;
    #restrictions;

    /**
     * Initializes a course object with the appropriate data members.
     * @param {object} courseData JS object containing course data.
     */
    constructor(courseData) {
        courseData = courseData['course'];        // access contents inside "course"
        this.#id = courseData['id'];
        this.#description = courseData['description'];
        this.#corequisites = new Requisites(courseData['corequisite']);
        this.#prerequisites = new Requisites(courseData['prerequisite_text']);
        this.#restrictions = courseData['restriction']
    }

    /**
     * Checks whether the entered courses meet this course's corequisite requirements.
     * @param  {list[Course]} history A list of courses to check corequisites against.
     * @return {boolean}              True if all corequisites have been met.
     */
    meetsCoreqs(history) {
        // TODO: implement function
        return true;
    }
    /**
     * Checks whether the entered courses meet this course's prerequisite requirements.
     * @param  {list[Course]} history A list of courses to check prerequisites against.
     * @return {boolean}              True if all prerequisites have been met.
     */
    meetsPrereqs(history) {
        // TODO: implement function
        return true;
    }

    // CLASS GETTERS
    get id() { return this.#id; }
    get description() { return this.#description; }
    get corequisites() { return this.#corequisites; }
    get prerequisites() { return this.#prerequisites; }
    get restrictions() { return this.#restrictions; }

}

module.exports = Course;