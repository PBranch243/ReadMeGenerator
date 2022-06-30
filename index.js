// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//declare content variable so b/c I got an error saying content was not
//defined at line 31
var content = "";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What languages do you know?',
        choices: [
            'English', 'Javascript', 'HTML', 'CSS', 'Italian'
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    content = `## ${data.name}
    Languages: ${data.languages}`
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>{
        writeToFile("./README.md", content);
    });
}

// Function call to initialize app
init();
