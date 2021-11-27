const fs = require("fs");

// display badges according to the user's choice.
function displayBadge(license) {
 if (license == 'Apache 2.0') {
  licenseFile = fs.readFileSync('Apache.txt', 'utf-8')
  licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  licenseLink = `https://opensource.org/licenses/Apache-2.0`
 } 
 else if (license == 'GNU GPLv3') {
  licenseFile = fs.readFileSync('GNU.txt', 'utf-8')
  licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  licenseLink = `https://opensource.org/licenses/GPL-3.0`
 }
 else if (license == 'MIT') {
  licenseFile = fs.readFileSync('MIT.txt', 'utf-8')
  licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  licenseLink = `https://opensource.org/licenses/MIT`
 }
 else if (license == 'ISC License') {
  licenseFile = fs.readFileSync('ISC.txt', 'utf-8')
  licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  licenseLink = `https://opensource.org/licenses/ISC`
  }
 else if (license == 'UNLICENSED') {
  licenseFile = fs.readFileSync('UNLICENSED', 'utf-8')
  licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  licenseLink = `https://opensource.org/licenses/unlicense`
 }
}

displayBadge();

// 

