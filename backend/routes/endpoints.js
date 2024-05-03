const express = require("express");
const axios = require("axios");
const router = express.Router();
const fetchCourse = require("../services/api-service.js");
const [ evalTokens, strToClauses ] = require("../services/requisites.js");

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
  let currCourses = body["currCourses"];

  let gqlData = await fetchRStrings();
  const prText = gqlData["data"]["course"]["prerequisite_text"];
  const crText = gqlData["data"]["course"]["corequisite"];

  const prClauses = strToClauses(prText);
  const crClauses = strToClauses(crText);

  res.json({
    prerequisitesMet: evalTokens(prText, prevCourses),
    prerequisiteNotes: [],
    corequisitesMet: evalTokens(crText, currCourses),
    corequisiteNotes: []
  });
});

async function fetchRStrings() {
  try {
    const response = await axios({
      url: "https://api.peterportal.org/graphql/",
      method: "post",
      data: {
        query: `
          query {
            course(id:"COMPSCI161") {
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
