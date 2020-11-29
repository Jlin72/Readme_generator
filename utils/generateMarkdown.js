// function to generate markdown for README
function generateMarkdown(data) {
return`# ${data.title}
## Description 
  ${data.description}
## Deployed application link
  ${data.deployed}
## Installation
  ${data.installation}
## Usage
  ${data.usage}
## Screenshots or video
  ${data.screenshot1}
  ${data.screenshot2}
  ${data.screenshot3}
## Credits
  ${data.credits}
## License
  ${data.licenses} License
`;
}

module.exports = generateMarkdown;
