//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// const renderLicenseBadge = require('./utils/renderLicenseBadge');


// Array of questions for user input
const questions = [
    "What is your gihub username?",
    "What is your email?",
    "What is the title of your application?",
    "What is the description of your application?",
    "Please enter data for any insallation instructions.",
    "What are the usage instructions for your application?",
    "Please select a license from the following options.",
    "Please list any contributing collaborators.",
    "What are the test instructions for this application?",
];

inquirer
    .prompt([
    {
        type:"input",
        name: "github",
        message:"What is your github username?",
    },
    {
        type:"input",
        name: "email",
        message:"What is your email?",
    },
    {
        type:"input",
        name: "title",
        message:"What is the title of your application?",
    },
    {
        type:"input",
        name: "description",
        message:"What is the description of your application?",
    },
    {
        type:"input",
        name: "installation",
        message:"Please enter data for any insallation instructions.",
    },
    {
        type:"input",
        name: "usage",
        message:"What are the usage instructions for your application?",
    },
    {
        type:"list",
        name: "license",
        message:"Please select a license from the following options.",
        choices: ["None","Apache License 2.0", "GNU General Public License v3.0", "MIT License","BSD 2-Clause 'Simplified' License","BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0","GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    },
    {
        type:"input",
        name: "contributing",
        message:"Please list any contributors.",
    },
    {
        type:"input",
        name: "test",
        message:"What are the test instructions for this application?",
    },
    ])
// Function to write README file
    .then((answers) => {
        const fileContent = generateMarkdown(answers);
        fs.writeFile("generatedREADME.md", fileContent, (err) =>
        err ? console.log(err) : console.log ("README file created.")
        );
    });
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
