const express = require("express");
const router = express.Router();
const [ fetchCourse, fetchRStrings ] = require("../services/api-service.js");
const [ evalTokens, strToClauses ] = require("../services/requisites.js");
const [ sentenceIsLogic ] = require('../services/tokenizer.js')

router.get("/course", async (req, res) => {
  try {
    let courseId = req.query.courseId;
    const courses = await fetchCourse(courseId);

    res.json(courses);
  } catch (err) {
    console.log(err);
  }
});

router.get("/reqs-met", async (req, res) => {
  const body = req.body;
  const courseId = body["courseId"];
  let prevCourses = body["prevCourses"];
  let currCourses = body["currCourses"];     // All courses already taken

  let gqlData = await fetchRStrings(courseId);
  const prText = gqlData["data"]["course"]["prerequisite_text"];
  const crText = gqlData["data"]["course"]["corequisite"];           // raw requisite text

  let prsmet = true;
  let crsmet = true;           // set results default to true

  let prClauses = strToClauses(prText);
  let crClauses = strToClauses(crText);
  let prClausesLen = prClauses.length
  let crClausesLen = crClauses.length           // separate by sentences

  if (prClausesLen > 0 && sentenceIsLogic(prClauses[0])) {
    console.log(prClauses[0])
    prsmet = evalTokens(prClauses[0], prevCourses)
    prClauses = prClauses.slice(1);
    prClausesLen--;
  }       // If the first clause is a valid boolean logic expression, set prsmet
          // to evaluate to that expression and remove it from the clauses.

  if (crClausesLen > 0 && sentenceIsLogic(crClauses[0])) {
    crsmet = evalTokens(crClauses[0], currCourses)
    crClauses = prClauses.slice(1);
    crClausesLen--;
  }

  res.json({
    prerequisiteText: prText,
    prerequisitesMet: prsmet,
    prerequisiteNotes: prClauses,
    corequisiteText: crText,
    corequisitesMet: crsmet,
    corequisiteNotes: crClauses
  });
});

router.get("/ge-met", async (req, res) => {
  res.json({
    ge1l: 0,
    ge1u: 0,
    ge2: 0,
    ge3: 0,
    ge4: 0,
    ge5a: 0,
    ge5b: 0,
    ge6: 0,
    ge7: 0,
    ge8: 0
  })
})

module.exports = router;
