const express = require("express");
const axios = require("axios");
const router = express.Router();
const fetchCourse = require("../services/api-service.js");
const evalTokens = require("../services/requisites.js");

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

  console.log("Course: " + courseId);
  console.log("prerequisites: " + prText)
  console.log("Courses Taken: " + prevCourses);
  console.log("Courses currently taking: " + currCourses);

  res.json({
    prerequisitesMet: evalTokens(prText, prevCourses),
    corequisitesMet: evalTokens(crText, currCourses),
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
