const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

const endpointRouter = require('./routes/endpoints.js');

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

app.use(endpointRouter);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));