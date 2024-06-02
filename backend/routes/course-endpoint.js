const express = require("express");
const router = express.Router();
const { fetchCourse } = require("../services/api-service.js");

router.get("/", (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send(Buffer.from("<h1>Welcome to the Course Eater API!</h1><p>Please refer to the <a href='https://docs.google.com/document/d/170newpAiWiMHSwhZSjycIg9uimXTCbYeJ-eNbfAKA4k/edit?usp=sharing'>documentation</a>."))
})

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
