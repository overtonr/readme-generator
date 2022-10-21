// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//When generated, README populates with this content
//includes the answers from the inquirer prompts
const generateMarkdown = (answers) =>
`# ${answers.title}

## Description
---
${answers.description}
[license badge]${answers.license}
## Table of Contents
---
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#test-instructions)
- [Questions](#questions)
## Installation
---
${answers.installation}
## Usage
---
${answers.usage}
## License
---
This application is covered under ${answers.license}
## Contributing
---
${answers.contributing}
## Test Instructions
---
${answers.test}
## Questions
----
https://github.com/${answers.github}
If you have any questions, please feel free to contact me through my email : ${answers.email}.`;

module.exports = generateMarkdown;
