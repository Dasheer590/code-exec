const express = require('express');
const bodyParser = require('body-parser');
const mainService = require('./mainService');

const app = express();
const port = 7000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the routes defined in mainService.js
app.use('/main', mainService);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});





