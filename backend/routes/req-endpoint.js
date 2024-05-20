const express = require("express");

const { evalTokens, strToClauses } = require("../services/requisites.js");
const { sentenceIsLogic } = require("../services/tokenizer.js");

const { fetchRStrings } = require("../services/api-service.js");

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

router.get("/req-tree-met", async (req, res) => {
        
    res.json({
    prerequisiteText: "",
    prerequisitesMet: "",
    prerequisiteNotes: ""
  });
});

module.exports = router;
