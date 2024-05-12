const express = require("express");
const axios = require("axios");
const router = express.Router();
const fetchCourse = require("../services/api-service.js");
const [ evalTokens, strToClauses ] = require("../services/requisites.js");
const [ sentenceIsLogic ] = require('../services/tokenizer.js')

// Middleware specific to endpoints
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

async function fetchRStrings(courseId) {
  try {
    const response = await axios({
      url: "https://api.peterportal.org/graphql/",
      method: "post",
      data: {
        query: `
          query {
            course(id:"${courseId}") {
                prerequisite_text
                corequisite
            }
          }    
        `,
      },
    });
    return response.data;
  } catch (error) {
    return "ERROR: Requisite fetching";
  }
}

module.exports = router;
