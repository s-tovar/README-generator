// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instrcution for your project:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for the project:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution information for the project:',
      },
      { 
        type: 'input',
        name: 'tests',
        message: 'Provide testing instructions for the project:',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Provide license information for the project:',
      },
      { 
        type: 'input',
        name: 'questions',
        message: 'Provide contact information for questions:',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
