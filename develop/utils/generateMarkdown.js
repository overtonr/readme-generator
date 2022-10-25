// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//switch case function that takes the user's choice for the license and returns the badge with the working link to the license documentation
function renderLicenseBadge(license) {
  switch(license){
    //if none is selected then it returns an empty string
  case "None": return "";
  break;
  case "Apache License 2.0":
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  break;
  case "GNU General Public License v3.0":
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  break;
  case "MIT License":
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  break;
  case "BSD 2-Clause 'Simplified' License":
    return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  break;
  case "BSD 3-Clause 'New' or 'Revised' License":
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  break;
  case "Boost Software License 1.0":
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  break;
  case "Creative Commons Zero v1.0 Universal":
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  break;
  case "Eclipse Public License 2.0":
    return "[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)";
  break;
  case "GNU Affero General Public License v3.0":
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  break;
  case "GNU General Public License v2.0":
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  break;
  case "GNU Lesser General Public License v2.1":
    return "[![License](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)";
  break;
  case "Mozilla Public License 2.0":
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  break;
  case "The Unlicense":
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  break;
}};

//uncommented function call was causing the function to return undefined
// renderLicenseBadge();



// Create a function to generate markdown for README
//When generated, README populates with this content
//includes the answers from the inquirer prompts
const generateMarkdown = (answers) => {
return `# ${answers.title}

## Description
---
${answers.description}


${renderLicenseBadge(answers.license)}


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
This application is covered under the ${answers.license}

## Contributing
---
${answers.contributing}

## Test Instructions
---
${answers.test}

## Questions
----
https://github.com/${answers.github}
If you have any questions, please feel free to contact me through my email : ${answers.email}.`
};

module.exports = generateMarkdown;
