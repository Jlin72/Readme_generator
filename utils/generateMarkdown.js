// function to generate markdown for README
function generateMarkdown(data) {
return`# ${data.title}
## Description 
  ${data.description}
## Deployed application link
  Link to the deployed application: ${data.deployed}
## Table of contents
  1.[Instalaltion](#installation)
  2.[Usage](#usage)
  3.[Screenshots or video](#screenshots-or-video)
  4.[Credits]
  5.[License](#License)
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
