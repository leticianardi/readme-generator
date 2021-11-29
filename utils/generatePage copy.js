const fs = require("fs");


displayBadge();

// display badges according to the user's choice.
function displayBadge(license) {
 if (license == 'Apache 2.0') {
  licenseFile = fs.readFileSync('/utils/Apache.txt', 'utf-8')
  licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  licenseLink = `https://opensource.org/licenses/Apache-2.0`
 }
 else if (license == 'GNU GPLv3') {
  return "[![License: GPL v3](https://img.shields.io/badge/License-GNU%20GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
 }
 else if (license == 'MIT') {
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
 }
 else if (license == 'ISC') {
  return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
 }
 else if (license == 'UNLICENSED') {
  return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
 }
}

// function displayFile(license) {
//  if (license == 'Apache 2.0') {
//   licenseFile = fs.readFileSync('./Apache.txt', 'utf-8')
//   return `${licenseFile}`
//  } else if (license == 'GNU GPLv3') {
//   licenseFile = fs.readFileSync('./GNU.txt', 'utf-8')
//   return `${licenseFile}`
//  } else if (license == 'MIT') {
//   licenseFile = fs.readFileSync('./MIT.txt', 'utf-8')
//   return `${licenseFile}`
//  } else if (license == 'ISC') {
//   licenseFile = fs.readFileSync('ISC.txt', 'utf-8')
//   return `${licenseFile}`
//  } else if (license == 'UNLICENSED') {
//   licenseFile = fs.readFileSync('./unlincensed.txt', 'utf-8')
//   return `${licenseFile}`
//  }
// }


// show link for video
function videoLink() {
 return `https://youtu.be/O7QGApTLhso`;
}

// generating badge on README file
function generateFile(data) {
 return `# ${data.title}

 This project is licensed under ${displayBadge(data.license)}.

  
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
 Here is how this application works: <br />
 ${data.usage} <br />
 You can check the walkthrough video: [${videoLink()}].

 ## Credits
 Here are the collaborators of this project:  
 ${data.contribute}

 ## License
 ${displayBadge(data.license)}

 ## Tests
 You can check this repository and check how to test this app. <br />
 GitHub: http://github.com/${data.github}  
 
 ## Questions
 For questions, please contact: <br />
 ${data.author} at ${data.email} <br />
 GitHub: http://github.com/${data.github} <br />`
}

module.exports = generateFile;