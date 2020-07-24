// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
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

module.exports = generateMarkdown;

