const express = require("express");

const { evalTokens, strToClauses } = require("../services/requisites.js");
const { sentenceIsLogic } = require("../services/tokenizer.js");

const {
  fetchRStrings,
  fetchPRTree,
  fetchPrereqs,
  fetchCoreqs,
} = require("../services/api-service.js");

const { evalTree, convertToTree } = require("../services/tree.js");

const router = express.Router();

router.get("/reqs-met", async (req, res) => {
  const body = req.body;
  const courseId = body["courseId"];
  let prevCourses = body["prevCourses"];
  let currCourses = body["currCourses"]; // All courses already taken

  let gqlData = await fetchRStrings(courseId);
  const prText = gqlData["data"]["course"]["prerequisite_text"];
  const crText = gqlData["data"]["course"]["corequisite"]; // raw requisite text

  let prsmet = true;
  let crsmet = true; // set results default to true

  let prClauses = strToClauses(prText);
  let crClauses = strToClauses(crText);
  let prClausesLen = prClauses.length;
  let crClausesLen = crClauses.length; // separate by sentences

  if (prClausesLen > 0 && sentenceIsLogic(prClauses[0])) {
    prsmet = evalTokens(prClauses[0], prevCourses);
    prClauses = prClauses.slice(1);
    prClausesLen--;
  } // If the first clause is a valid boolean logic expression, set prsmet
  // to evaluate to that expression and remove it from the clauses.

  if (crClausesLen > 0 && sentenceIsLogic(crClauses[0])) {
    crsmet = evalTokens(crClauses[0], currCourses);
    crClauses = prClauses.slice(1);
    crClausesLen--;
  }

  res.json({
    prerequisiteText: prText,
    prerequisitesMet: prsmet,
    prerequisiteNotes: prClauses,
    corequisiteText: crText,
    corequisitesMet: crsmet,
    corequisiteNotes: crClauses,
  });
});

router.get("/coreqs-met", async (req, res) => {
  const body = req.body;
  const courseId = body["courseId"];
  let currCourses = body["currCourses"]; // All courses already taken

  let gqlData = await fetchRStrings(courseId);
  const crText = gqlData["data"]["course"]["corequisite"]; // raw requisite text

  let crsmet = true; // set results default to true

  let crClauses = strToClauses(crText);
  let crClausesLen = crClauses.length; // separate by sentences

  if (crClausesLen > 0 && sentenceIsLogic(crClauses[0])) {
    crsmet = evalTokens(crClauses[0], currCourses);
    crClauses = crClauses.slice(1);
    crClausesLen--;
  }

  res.json({
    corequisiteText: crText,
    corequisitesMet: crsmet,
    corequisiteNotes: crClauses,
  });
});

router.get("/req-tree-met", async (req, res) => {
  const courseId = req.body["courseId"];
  const coursesTaken = req.body["coursesTaken"];

  const data = await fetchPRTree(courseId);
  const prStr = data["data"]["course"]["prerequisite_tree"];

  const prTree = convertToTree(prStr);
  const reqsMet = evalTree(prTree, coursesTaken);

  res.json({
    prerequisitesMet: reqsMet,
  });
});

router.post("/validate-courses", async (req, res) => {
  const courseMatrix = req.body["courseMatrix"];

  let pr_coords = [];
  let cr_coords = [];
  let allCourses = new Set();

  // Loop through each quarter
  for (qIndex in courseMatrix) {
    let courseBufferForNextQuarter = new Set();
    let currQuarter = courseMatrix[qIndex];
    let prData = await fetchPrereqs(currQuarter);

    // Check prerequisites for each course in quarter
    for (cIndex in currQuarter) {
      let currCourseData = prData["data"][`c${cIndex}`];
      let currPR = currCourseData["prerequisite_tree"];

      courseBufferForNextQuarter.add(currCourseData["id"]);
      if (currPR) {
        let tree = convertToTree(currPR);
        let reqsMet = evalTree(tree, [...allCourses]);
        if (!reqsMet) {
          pr_coords.push({ q_loc: qIndex, c_loc: cIndex }); // Add course if req hasn't been met
        }
      }
    }

    for (let item of courseBufferForNextQuarter) {
      allCourses.add(item);
    }
    // After adding the courses in the buffer to the list of all courses,
    // use that allCourse set to check whether the corequisites have been met.
    // This is because corequisites are valid whether they are being taken
    // currently or they have been taken previously.
    let crData = await fetchCoreqs(currQuarter);
    for (cIndex in currQuarter) {
      let currCourseData = crData["data"][`c${cIndex}`];
      let currCR = currCourseData["corequisite"];

      if (currCR) {
        let reqsMet = evalTokens(currCR, [...allCourses]);
        let currCoord = { q_loc: qIndex, c_loc: cIndex };
        
        if (!reqsMet) {
          cr_coords.push(currCoord); // Add course if req hasn't been met
        }

      }
    }
    courseBufferForNextQuarter.clear();
  }

  res.json({
    missing_prereqs: pr_coords,
    missing_coreqs: cr_coords
  });
});

module.exports = router;
