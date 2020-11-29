// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description 
  ${data.description}
## installation
  ${data.installation}
##
`;
}

module.exports = generateMarkdown;
