const express = require("express");

const { evalTokens, strToClauses } = require("../services/requisites.js");
const { sentenceIsLogic } = require("../services/tokenizer.js");

const {
  fetchRStrings,
  fetchPRTree,
  fetchPrereqs,
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
    crClauses = prClauses.slice(1);
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

router.get("/validate-courses", async (req, res) => {
  const courseMatrix = req.body["courseMatrix"];

  let coords = [];
  let allCourses = new Set();

  for (qIndex in courseMatrix) {
    let currCourses = new Set();
    let prereqs = await fetchPrereqs(courseMatrix[qIndex]);
    for (cIndex in courseMatrix[qIndex]) {
      let currCourse = prereqs["data"][`c${cIndex}`];
      let currPR = currCourse["prerequisite_tree"];

      currCourses.add(currCourse["id"])

      if (currPR) {
        let tree = convertToTree(currCourse["prerequisite_tree"]);

        let reqsMet = evalTree(tree, [...allCourses]);
        if (!reqsMet) {
          coords.push({ q_loc: qIndex, c_loc: cIndex });
        }
      }
    }
    for (let item of currCourses) {
      allCourses.add(item)
    }
    
    currCourses.clear();

  }

  res.json({ invalid_courses: coords });
});

module.exports = router;
