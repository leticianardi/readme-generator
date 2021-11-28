const fs = require("fs");

// display badges according to the user's choice.
function displayBadge(license) {
 if (license == 'Apache 2.0') {
  return `[![MIT License](https://img.shields.io/badge/license-${license}-blue.svg)](#license)`
 }
 else if (license == 'GNU GPLv3') {
  return `[![License: GPL v3](https://img.shields.io/badge/License-${license}GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
 }
 else if (license == 'MIT') {
  return `[![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)`
 }
 else if (license == 'ISC') {
  return `[![License: ISC](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/ISC)`
 }
 else if (license == 'UNLICENSED') {
  return `[![License: Unlicense](https://img.shields.io/badge/license-${license}-blue.svg)](http://unlicense.org/)`
 }
}

function displayLink(license) {
 if (license == 'Apache 2.0') {
  return `https://opensource.org/licenses/Apache-2.0`
 } else if (license == 'GNU GPLv3') {
  return `https://opensource.org/licenses/GPL-3.0`
 } else if (license == 'MIT') {
  return `https://opensource.org/licenses/MIT`
 } else if (license == 'ISC') {
  return `https://opensource.org/licenses/ISC`
 } else if (license == 'UNLICENSED') {
  return `https://opensource.org/licenses/unlicense`
 }
}

function displayFile(license) {
 if (license == 'Apache 2.0') {
  licenseFile = fs.readFileSync('./Apache.txt', 'utf-8')
  return `${licenseFile}`
 } else if (license == 'GNU GPLv3') {
  licenseFile = fs.readFileSync('./GNU.txt', 'utf-8')
  return `${licenseFile}`
 } else if (license == 'MIT') {
  licenseFile = fs.readFileSync('./MIT.txt', 'utf-8')
  return `${licenseFile}`
 } else if (license == 'ISC') {
  licenseFile = fs.readFileSync('ISC.txt', 'utf-8')
  return `${licenseFile}`
 } else if (license == 'UNLICENSED') {
  licenseFile = fs.readFileSync('./unlincensed.txt', 'utf-8')
  return `${licenseFile}`
 }
}

displayBadge();
displayLink();
displayFile();

//function to output a list of contributors
function displayContributors(people) {
 let tempArr = people.split(', ');
 let person = '';
 tempArr.forEach(element => { person += `${element}<br />`; })
 return person;
}

// generating badge on README file
function generateFile(data) {
 return `# ${data.title}

 This project is licensed under [![license](${displayBadge(data.license)})](${displayLink(data.license)}).

  
 ## Description:
 ${data.description}
    
    
 ## Table of contents
 * [Description](#description)
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [Questions](#questions)
    
 ## Installation
 ${data.install}

 ## Usage
 Here is how this application works:
 ${data.usage} <br />
 You can check the walkthrough video: ${videoLink}

 ## Credits
 Here are the list of collaborators:  
 ${displayContributors(data.contributors)}

 ## License
 ${displayBadge(data.license)}

 ## Contributing
 ${data.contribute}
 [Covenant Contributor](https://www.contributor-covenant.org/)
 [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
 
 ## Tests
 You can check this repository and check how this app has been tested.
 GitHub profile:  ${profile}
 GitHub repository: ${data.test}
 
 ## Questions
 For questions please contact: ${data.author} at ${data.email}.
 GitHub Profile: ${profile} `
}

module.exports = generateFile;