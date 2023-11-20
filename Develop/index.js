const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your README"
    },
    {
        type: "input",
        name: "description",
        message: "Enter your description"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage instructions"
    },
    {
        type: "list",
        name: "license",
        message: "Which license do you want to use?",
        choices: [
            "MIT", "Apache", "Unlicense", "IBM", "Mozilla", "ISC", "Eclipse"
        ]
    },
    {
        type: "input",
        name: "contributions",
        message: "Enter contributions"
    },
    {
        type: "input",
        name: "test",
        message: "Enter test cases"
    },
    {
        type: "input",
        name: "gitUser",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
]

function init() {
    inquirer.prompt(questions).then(response => {
        fs.writeFileSync("README.md", generateMarkdown({ ...response }))
    })
        .catch((err) => {
            console.log(err);
            console.log("Didn't expect that... sorry");
        })
}
init();