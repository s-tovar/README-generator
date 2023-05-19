// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');
const generateMarkdown = require('./generateMarkdown.js');
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
        type: 'list',
        name: 'license',
        message: 'Provide license information for the project:',
        choices: ['MIT', 'GPLv3']
      },
      { 
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub username:',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Wrote stuff into' + fileName) //to check work
    );
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const README = generateMarkdown(answers);
        writeToFile("README.md", README);
    });
}

// Function call to initialize app
init();
