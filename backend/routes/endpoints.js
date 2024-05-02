const express = require("express");
const router = express.Router();
const fetchCourse = require("../services/api-service.js");

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
  let prereqsMet = true;
  let coreqsMet = true;

  const body = req.body;
  const courseId = body["courseId"];
  const prevCourses = body["prevCourses"];
  const currCourses = body["currCourses"];

  res.json({
    prerequisitesMet: prereqsMet,
    corequisitesMet: coreqsMet,
  });
});

module.exports = router;
