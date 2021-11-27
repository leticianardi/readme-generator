const fs = require('fs');
const inquirer = require('inquirer');
const generateFile = require('./utils/generateMarkdown.js');
const generatePage = require("./utils/generateMarkdown.js");


// array of questions for the user
const questions = [
 {
  type: 'input',
  name: 'title',
  message: 'What is the title of your project? (Required)',
  validate: titleInput => {
   if (titleInput) {
    return true;
   } else {
    console.log('Please enter your project title!');
    return false;
   }
  }
 },
 {
  type: 'input',
  name: 'author',
  message: 'Enter the author of the project (Required)',
  validate: authorInput => {
   if (authorInput) {
    return true;
   } else {
    console.log('Please enter the name of the author!');
    return false;
   }
  }
 },
 {
  type: 'input',
  name: 'description',
  message: 'Provide a description of the project (Required)',
  validate: descriptionInput => {
    if (descriptionInput) {
      return true;
    } else {
      console.log('You need to enter a project description!');
      return false;
    }
   }
  },
  {
   type: 'input',
   name: 'install',
   message: 'Provide installation instructions',
  },
  {
   type: 'input',
   name: 'Contribute',
   message: 'How to contribute with this project?',
  },
  {
   type: 'input',
   name: 'test',
   message: 'How to test this application?',
},
{
 type: 'input',
 name: 'github',
 message: 'Enter your GitHub Username (Required)',
 validate: githubInput => {
   if (githubInput) {
     return true;
   } else {
     console.log('Please enter your GitHub username!');
     return false;
   }
 }
},
{
 type: 'input',
 name: 'email',
 message: 'What is your e-mail address?',
},
{
 type:'list',
 name: 'license',
 message: "What kind of licenses are you using?",
 choices: [
  'Apache 2.0',
  'GNU GPLv3',
  'MIT',
  'ISC License',
  'UNLICENSED',
 ]     
},
]

// writing README file function
function writeReadMe (fileName, data) {
 fs.writeFile(fileName, data, function(err) {
 console.log(fileName)
  console.log(data)
 if (err){
  return console.log(err)
 } else {
  console.log('Your README file has been created.')
 }
 })
}

// initiating the app function
function start() {
 inquirer.prompt(questions)
 .then(function(data) {
 writeReadMe("README.md", generateFile(data))
 })
}

start();