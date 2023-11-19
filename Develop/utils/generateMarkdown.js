// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.sbg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None'){
    return `\n [License](#license)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None') {
    return `##License\n
    This project is licensed under the ${license} license`
  } else {
    return '';
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

     ## Description

     ${answers.description}
    
     ## Table of Contents

      [Installation](#installation)
      [Usage](#usage)
      ${renderLicenseLink(data.license)}
      [Contributing](#contributing)
      [Tests](#tests)
      [Questions](#questions)
     ${answers.toc}
    
     ## Installation

     ${answers.installation}

     ## Usage
    
     ${answers.usage}

     ## Credits
    
     ${answers.contribution}

     ## License

     ${renderLicenseSection}

     ## Badges
    
     ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
     ## Features
    

     ## How to Contribute
    
     ## Tests
    
     `;;
}

module.exports = generateMarkdown;
