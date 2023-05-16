// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Wrote stuff into' + fileName) //to check work
    );
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const README = 
        `# ${answers.title}

        ## Description 

        ${answers.description}

        ## Table of Contents 

        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contribution](#contribution)
        - [Tests](#tests)
        - [Questions](#questions)

        ## Installation 

        ${answers.installation}

        ## Usage 

        ${answers.usage}

        ## License

        ${answers.license}

        ## Contribution 

        ${answers.contribution}

        ## Tests 

        ${answers.tests}

        ## Questions 

        ${answers.questions}`;
            
        writeToFile("README.md", README);
    });
}

// Function call to initialize app
init();
