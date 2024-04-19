const express = require('express');
const router = express.Router();

const Course = require('../services/course.js')

const fetchCourse = require('../services/api-service.js')

// Middleware specific to endpoints
router.get('/course', async (req, res) => {
    try {
        let courseId = req.query.courseId;
        const courses = await fetchCourse(courseId);
        
        let c = new Course(courses);

        res.json(courses);
    } catch (err) {
        console.log(err)
    }
    
});

// TODO: add endpoints

module.exports = router;