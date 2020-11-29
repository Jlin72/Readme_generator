// array of questions for user
const fs=require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const mardown = require("./utils/generateMarkdown");

const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your readme title?',
    validate: function (answer) {
        if (answer === null|| answer =="") {
            return console.log(`Please enter a valid title, cannot be empty`);
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
    message: "Provide instructions and examples for use. Include screenshots as needed. ",
    validate: function (answer) {
        if (answer === null|| answer =="") {
            return console.log("Help people understand how to use the application or repository")
        } return true;
    }
},
{
    type: "input",
    name: "credits",
    message: "Write who help made the repository and links to the repo if available.",
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
        var dataArr = generateMarkdown(data);
        console.log(dataArr);
    })
    
    

}

// function call to initialize program
init();
