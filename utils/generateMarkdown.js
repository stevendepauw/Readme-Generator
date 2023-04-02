//function to make sure the correct licnese option is used in the markdown generation
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return `![license](https://img.shields.io/badge/license-APACHE-brightgreen)`
    }
  if (license === 'GNU General Public License v3.0') {
    return `![license](https://img.shields.io/badge/license-GNU-brightgreen)`
  }
  if (license === 'MIT License') {
    return `![license](https://img.shields.io/badge/license-MIT-brightgreen)`
  }
  if (license === 'none') {
    return ''
  }
};


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.icense)}
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributors}

  ## Questions
  For further questions or inquiries
  ${data.email}
  ${data.github}`
};

module.exports = generateMarkdown;
