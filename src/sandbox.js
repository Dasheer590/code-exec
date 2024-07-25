const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const executeCode = (sourceCode, callback) => {
    const filePath = path.join(__dirname, 'sandbox', 'myprogram.c');

    // Ensure sourceCode is a string
    if (typeof sourceCode !== 'string') {
        callback('Invalid sourceCode');
        return;
    }

    // Write source code to file
    fs.writeFile(filePath, sourceCode, (err) => {
        if (err) {
            callback(`Error writing file: ${err.message}`);
            return;
        }

        // Execute the Docker command
        const command = `docker run --rm -v "${path.join(__dirname, 'sandbox')}:/sandbox" code-execution /bin/bash -c "gcc /sandbox/myprogram.c -o /sandbox/myprogram && /sandbox/myprogram"`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                callback(`Error executing Docker: ${stderr}`);
                return;
            }
            callback(stdout);
        });
    });
};

module.exports = { executeCode };



