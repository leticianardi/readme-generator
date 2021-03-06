const fs = require("fs");


function videoLink() {
 return `https://www.youtube.com/watch?v=Mdu2QzMuvo0`;
}

// return a license badge based on which license is passed in; if there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license === 'UNLICENSED'){
   return '';
 }
 return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](#license)`
}

// return the license link; if there is no license, return an empty string
function renderLicenseLink(license) {
 if (license === 'UNLICENSED'){
   return '';
 }
 return `\n * [License](#license)\n`
}



// return the license section of README; if there is no license, return an empty string
function renderLicenseSection(license) {
 if (license === 'UNLICENSED'){
   return '';
 }
 return `## License
 
 This project is licensed under ${license} license.`
}

// generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title}
   ${renderLicenseBadge(data.license)}

 ## Description

 ${data.description}
    
 You can check how this application works clicking [here](${videoLink()}).

 ## Table of contents
 * [Description](#description)
 * [Installation](#installation)
 * [Usage](#usage)
 ${renderLicenseLink(data.license)}
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [Questions](#questions)
    
 ## Installation

 ${data.install}

 ## Usage

 Here is how this application works

 ${data.usage}

 ## Contributing

 ${data.contribute}

 ${renderLicenseSection(data.license)}

 ## Tests

 ${data.test}
 
 
 ## Questions

 For questions, please contact:

 ${data.author} at ${data.email}.

 GitHub: http://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
