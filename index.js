// array of questions for user
const fs=require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//The next const contains all the questions that will be asked to the user, the validate functions is to make sure that the user leaves no empty spaces.
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
    message: "enter link to the first screenshot",
    validate: function (answer) {
        if (answer === null|| answer =="") {
            return console.log("At least one screenshot or video for your application is needed for a good readme");
        } return true;
    }
},
{
    type: "input",
    name: "description1",
    message: "Add a title to the screenshot",
    validate: function (answer) {
        if (answer === null|| answer =="") {
            return console.log("Give it a title.");
        } return true;
    }
},
{
    type: "input",
    name: "screenshot2",
    message: "enter link to the second screenshot(just press enter if you wish to skip)"
},
{
    type: "input",
    name: "description2",
    message: "if there is no second screenshot leave this empty, press enter to continue"
},
{
    type: "input",
    name: "screenshot3",
    message: "enter link to the third screenshot(just press enter if you wish to skip)"
},
{
    type: "input",
    name: "description3",
    message: "if there is no third screenshot leave this empty, press enter to continue"
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
        // titleNoSpace is the name of the readme file but with no spaces, and with underscores instead.
        let titleNoSpace = data.title.replace(/ /g, '_')
        writeToFile(`${titleNoSpace}.md`, markdown)
    })
}

// function call to initialize program
init();
