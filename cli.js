#!/usr/bin/env node

const axios = require('axios');
const inquirer = require('inquirer');

const API_URL = 'https://code-exec-2.onrender.com'; // Update with your actual API URL

async function getCodeFromUser() {
    const answers = await inquirer.prompt([
        {
            type: 'editor',
            name: 'sourceCode',
            message: 'Enter your C code:',
        },
    ]);

    return answers.sourceCode;
}

async function submitCode(sourceCode) {
    try {
        const response = await axios.post(API_URL, { sourceCode });
        console.log('Output:', response.data.output);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

async function main() {
    const sourceCode = await getCodeFromUser();
    await submitCode(sourceCode);
}

main();
