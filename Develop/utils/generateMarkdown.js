const licenses = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
  "GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  return licenses[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licensesLinks = {
  "MIT": "https://choosealicense.com/licenses/mit/",
  "GPLv3": "https://choosealicense.com/licenses/gpl-3.0/",
};

function renderLicenseLink(license) {
  if (!license) return '';
  return licensesLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License 
  
  Distributed under the ${license} license. See ${licensesLinks} for more informataion.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
