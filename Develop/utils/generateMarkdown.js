function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Apache") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === "Unlicense") {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else if (license === "IBM") {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else if (license === "Mozilla") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === "ISC") {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === "Eclipse") {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License\n
    This project is licensed under the ${license} license`
  } else {
    return '';
  }
}

function generateMarkdown(answers) {
  return `# ${answers.title}
${renderLicenseBadge(answers.license)}

## Description

${answers.description}
    
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(answers.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation

${answers.installation}

## Usage
    
${answers.usage}  


${renderLicenseSection(answers.license)}

## How to Contribute

${answers.contributions}

## Tests

${answers.test}

## Questions

What is your Github username?

${answers.gitUser}

What is your Email?

${answers.email}
 `;
}

module.exports = generateMarkdown;
