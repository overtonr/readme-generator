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
        //type : list gives the use a list of options to choose from 
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
//generated file contains code from the generateMarkdown function
        const fileContent = generateMarkdown(answers);
    //file name is generatedREADME.md so it is not confused with the readme for this application
        fs.writeFile("generatedREADME.md", fileContent, (err) =>
    //if an err present, then console.log the err, if not then let the user know that the file has been generated
        err ? console.log(err) : console.log ("README file created.")
        );
    });

