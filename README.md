# README Generator

## Description

This application uses the Inquirer NPM in Node.js to ask the user questions and generate a README based on the input from the user. The function renders a README formatted in a markdown file that the user can submit as a final README.md in their GitHub.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#test-instructions)
- [Questions](#questions)
## Installation

Users should have access to Node.js in order to be able to interact with the file and input their responses.
## Usage

Once Node.js is installed, users should navigate to the develop folder and enter
 ```
 node index.js
 ```
  Once all the prompts are answered, a README.md will then be generated based on the input from the user.
```
.then((answers) => {
        const fileContent = generateMarkdown(answers);
        fs.writeFile("generatedREADME.md", fileContent, (err) =>
        err ? console.log(err) : console.log ("README file created.")
        );
```

This code uses the input from the inquirer responsed and then generates the README.md based on the input from the user. The README.md also contains all of the sections of a professional README.md, a license badge that links to the license information when clicked, a table of contents that takes the user to that section of the README.md, and a contact section that includes the users github profile link and email.

![Test README gif](./develop/images/readme-test.gif)

<br>

## Technologies Used:
* Github
* Node.js
* Inquirer NPM
* JavaScript
* VS Code

<br>

## License
---
This application is covered under the MIT License
## Contributing
None
## Test Instructions

None

## Questions

https://github.com/overtonr

If you have any questions, please feel free to contact me through my email : overton.rm@gmail.com.
