// function to generate markdown for README
function generateMarkdown(data) {
return`# ${data.title}
## Table of contents
  1.[Description](#Description)

  2.[Deployed application link](#Deployed-application-link)

  3.[Instalaltion](#Installation)

  4.[Usage](#Usage)

  5.[Screenshots or video](#Screenshots-or-video)

  6.[Credits](#Credits)

  7.[License](#License)
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
