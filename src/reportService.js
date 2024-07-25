const express = require('express');
const router = express.Router();

// Endpoint to get the status report
router.get('/status/:id', (req, res) => {
    const { id } = req.params;

    // Add logic to fetch the status report
    // For now, just return a placeholder response
    res.json({
        id,
        startTime: new Date(),
        timeRunning: '0s',
        linesOfCode: 0
    });
});

module.exports = router;
