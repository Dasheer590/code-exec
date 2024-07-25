const express = require('express');
const mainService = require('./mainService');

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Code Execution Backend!');
});

app.use('/main', mainService);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






