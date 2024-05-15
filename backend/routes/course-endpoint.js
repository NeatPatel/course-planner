const express = require("express");
const router = express.Router();
const { fetchCourse } = require("../services/api-service.js");


router.get("/course", async (req, res) => {
  try {
    let courseId = req.query.courseId;
    const courses = await fetchCourse(courseId);

    res.json(courses);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
