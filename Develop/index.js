// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer  = require("inquirer");
const makeReadMe = require("generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of your README"
    },
    {
        type:"input",
        name:"description",
        message:"Enter your description"
    },
    {
        type:"confirm",
        name:"askTOC",
        message:"Do you need a Table of Contents?"
    },
    {
        type:"input",
        name:"toc",
        message:"Enter Table of Contents"
    }, 
    {
        type:"input",
        name:"installation",
        message:"Enter installation instructions"
    },
    {
        type:"input",
        name:"usage",
        message:"Enter usage instructions"
    },
    {
        // can change type to list if u want to be fancy n complicated
        type:"list",
        name:"license",
        message:"Which license do you want to use?"
    },
    {
        type:"input",
        name:"contributions",
        message:"Enter contributions"
    },
    {
        type:"input",
        name:"test",
        message:"Enter test cases"
    },
    // {
        //   type:"input",
        //   name:"questions",
        //   message:"Enter questions"
        // },
    ]
        
        // // TODO: Create a function to write README file
        // function writeToFile(fileName, data) {
            //   fs.writeFile(fileName, data, makeReadMe);
            // }
            // writeToFile();
            
            
            // // TODO: Create a function to initialize app
            function init() {
                    inquirer.prompt(questions).then(response => {
                        fs.writeFileSync("README.md", generateMarkdown({...response}))
                        .catch((err) => {
                            console.log(err);
                            console.log("Didn't expect that... sorry");
        })
    })
}
init();

module.exports = Questions;
