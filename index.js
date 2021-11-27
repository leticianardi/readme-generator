const fs = require('fs');
const inquirer = require('inquirer');

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
   default: 'Write npm init in your terminal and follow the instructions.',
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
function writeReadMe(fileName, data) {
fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('README file has been created.'))
}

