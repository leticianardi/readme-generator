// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "author",
    message: "Enter the author of the project (Required)",
    validate: (authorInput) => {
      if (authorInput) {
        return true;
      } else {
        console.log("Please enter the name of the author!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You need to enter a project description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "install",
    message: "Provide installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage instructions",
  },
  {
    type: "input",
    name: "contribute",
    message: "Who are the contributors for this project?",
  },
  {
    type: "input",
    name: "test",
    message: "Command to run or test your application:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username (Required):",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your e-mail address?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of licenses are you using?",
    choices: ["Apache-2.0", "GNU-GPLv3", "MIT", "ISC", "UNLICENSED"],
  },
];

// write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err){
     return console.log(err)
    } else {
     console.log('Your README file has been created.')
    }
    })
}

// initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
    writeToFile("README.md", generateMarkdown(data));
    })
    .catch((err) => {
      console.log("There was an error.", err);
    });
}

// Function call to initialize app
init();
