// function to generate markdown for README
function generateMarkdown(data) {
  return `${renderBadge(data.License)}
  
  # ${data.Title}

  ## TABLE OF CONTENTS
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## DESCRIPTION
  ${data.Description}

  ## INSTALLATION
  ${data.Installation}

  ## USAGE
  ${data.Usage}

  ## LICENSE
  ${data.License}

  ## CONTRIBUTORS/COLLABORATORS
  ${data.Contributing}

  ## TESTS
  ${data.Tests}

  ## QUESTIONS
  Email for Questions:
  ${data.Questions}

`;
}
function renderBadge (license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
  `
}
module.exports = generateMarkdown;

