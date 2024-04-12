const express = require('express');
const router = express.Router();

// Middleware specific to endpoints
router.get('/data', (req, res) => {
    res.send('Some data')
});

// TODO: add endpoints

module.exports = router;