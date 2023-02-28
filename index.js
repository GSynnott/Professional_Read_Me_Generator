//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
    const dataTitle = data.title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const dataDescription = data.description.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const dataInstallation = data.installation.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const dataUsage = data.usage.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const dataLicense = data.license.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const dataContributing = data.contributing.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const dataTests = data.tests.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const dataQuestions = data.questions.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const dataOutput = `# ${dataTitle} \n

## Description \n
    ${dataDescription}

## Table Of Contents \n
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
## Installation \n
    ${dataInstallation}

## Usage \n
    ${dataUsage}

## License \n
    ${dataLicense}

## Contributing \n
    ${dataContributing}

## Tests \n
    ${dataTests}

## Questions \n
    ${dataQuestions}`;
    fs.writeFile(fileName, dataOutput, (err) => 
        err ? console.log(err) : console.log("Success!")
    );
}

// Init function gets called at the start of the program
function init() {
    //Create the inquirer prompt in order to ask the user all the questions listed.
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                massage: "Please enter the title of your project?",
            }, 
            {
                type: "input",
                name: "description",
                massage: "Please enter the description of your project?",
            }, 
            {
                type: "input",
                name: "installation",
                massage: "Please enter the installation steps of your project?",
            },
            {
                type: "input",
                name: "usage",
                massage: "Please enter the usage details of your project?",
            }, 
            {
                type: "input",
                name: "license",
                massage: "Please enter the license of your project?",
            }, 
            {
                type: "input",
                name: "contributing",
                massage: "Please enter the contributing information for your project?",
            }, 
            {
                type: "input",
                name: "tests",
                massage: "Please enter the tests for your project?",
            }, 
            {
                type: "input",
                name: "questions",
                massage: "Please enter the questions for your project?",
            },
        ])
        //After the user enters all the answers to the questions, then it starts creating the read me file by calling writeToFile
        .then((data) => {
            const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`; //Set up the file name of the read me file.
            writeToFile(fileName, data);
        });
}

// Function call to initialize app
init();
