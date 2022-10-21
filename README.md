# Challenge : README Generator

## Description
---
${answers.description}

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
---
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
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

If you have any questions, please feel free to contact me through my email : ${answers.email}.
```
.then((answers) => {
        const fileContent = generateMarkdown(answers);
        fs.writeFile("generatedREADME.md", fileContent, (err) =>
        err ? console.log(err) : console.log ("README file created.")
        );

-GIVEN a command-line application that accepts user input
-WHEN I am prompted for information about my application repository
-THEN a high-quality, professional README.md is generated with the title of my project and sections entitled -Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
-WHEN I enter my project title
-THEN this is displayed as the title of the README
-WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
-THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the -README entitled License that explains which license the application is covered under
-WHEN I enter my GitHub username
-THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
-WHEN I enter my email address
-THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
-WHEN I click on the links in the Table of Contents
-THEN I am taken to the corresponding section of the README
```