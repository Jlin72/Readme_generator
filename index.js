// array of questions for user
const fs=require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your readme title?(Spaces are fine)',
    validate: function (answer) {
        if (answer === null|| answer =="") {
            return console.log(`Please enter a valid title, cannot be empty.`);
        } return true;
    }
},
{
    type: "input",
    name: "description",
    message: "Write a description of your repository or project",
    validate: function (answer) {
        if (answer === null|| answer =="") {
            return console.log("Please enter something for your readme description, something is better than nothing")
        } return true;
    }
},
{
    type: "input",
    name: "deployed",
    message: "Please enter a link to your deployed repository",
    validate: function (answer) {
        if (answer === null || answer == "") {
            return console.log("Plese make sure to enter a link for your deployed repo. So people can check your app");
        } return true;
    }
},
{
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    validate: function (answer) {
        if (answer === null|| answer =="") {
            return console.log("Please enter something for your readme installation, something is better than nothing")
        } return true;
    }
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
    validate: function (answer) {
        if (answer === null|| answer =="") {
            return console.log("Help people understand how to use the application or repository")
        } return true;
    }
},
{
    type: "input",
    name: "screenshot1",
    message: "Add as many screenshots or videos are required for your readme file",
    validate: function (answer) {
        if (answer === null|| answer =="") {
            return console.log("At least one screenshot or video for your application is needed for a good readme");
        } return true;
    }
},
{
    type: "input",
    name: "screenshot2",
    message: "Want to add another screenshot or video?(just press enter if you wish to skip)"
},
{
    type: "input",
    name: "screenshot3",
    message: "Want to add another screenshot or video?(just press enter if you wish to skip)"
},
{
    type: "input",
    name: "credits",
    message: "Write who help made the repository and links to their profiles if available.",
    validate: function (answer) {
        if (answer === null|| answer =="") {
            return console.log("Hey, someone had to have worked on this repository. Give them some credit")
        } return true;
    }
},
{
    type: "list",
    name: "licenses",
    message: "Which license are you using?",
    choices: ["MIT", "ISC", "Do What The F*ck You Want To Public License", "Creative Commons license family"]
}
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then ((data) => {
        let markdown = generateMarkdown(data);
        let titleNoSpace = data.title.replace(/ /g, '_')
        writeToFile(`${titleNoSpace}.md`, markdown)
    })
}

// function call to initialize program
init();
