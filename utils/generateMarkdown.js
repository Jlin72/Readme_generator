// function to generate markdown for README
function generateMarkdown(data) {
return`# ${data.title}
## Table of contents
  [description](#description)

  [deployed application link](#deployed-application-link)

  [Instalaltion](#installation)

  [Usage](#usage)

  [Screenshots or video](#screenshots-or-video)

  [Credits]

  [License](#License)
## Description 
  ${data.description}
## Deployed application link
  Link to the deployed application: ${data.deployed}
## Installation
  ${data.installation}
## Usage
  ${data.usage}
## Screenshots or video
  ![${data.description1}](${data.screenshot1})
  ![${data.description2}](${data.screenshot2})
  ![${data.description3}](${data.screenshot3})
## Credits
  ${data.credits}
## License
  ${data.licenses} License
`;
}

module.exports = generateMarkdown;
