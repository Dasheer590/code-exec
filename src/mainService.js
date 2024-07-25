const express = require('express');
const router = express.Router();
const { executeCode } = require('./sandbox');

// Endpoint to receive source code
router.post('/execute', (req, res) => {
    const { sourceCode } = req.body;

    if (!sourceCode) {
        return res.status(400).json({ error: 'sourceCode is required' });
    }

    executeCode(sourceCode, (output) => {
        res.json({ output });
    });
});

module.exports = router;






