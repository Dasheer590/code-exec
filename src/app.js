const express = require('express');
const path = require('path');
const mainService = require('./mainService');

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, '../public')));

// Serve the HTML file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Existing mainService routes
app.use('/main', mainService);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});







