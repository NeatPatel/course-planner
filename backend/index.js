const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 8000;

const courseRouter = require('./routes/course-endpoint.js');
const reqRouter = require('./routes/req-endpoint.js')
const geRouter = require('./routes/ge-endpoint.js')


/*
 * @todo Update corsOptions with appropriate origin, methods, and headers
*/

// Handle CORS
const corsOptions = {
    origin: '',
    methods: '',
    allowedHeaders: '',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json())

app.use(courseRouter);
app.use(reqRouter);
app.use(geRouter);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));