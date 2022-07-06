const inquirer = require("inquirer");
const fs = require("fs");

//Lets store questions in an array
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of the project.'
  },
  {
    type: 'input',
    name: 'install',
    message: 'How is your project installed?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub user name?'
  }
]

//This function will write the file
var writeFile = (filename, content) => {
  fs.writeFile(filename, content, (err) => {
    if (err)
      console.log(err)
  })
}
//This function will generate the content of the file we are writing
var generateContent = (data) => {
  var content = `# ${data.title} 


## Description

${data.description}

##Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)
-[Questions](#questions)
-[Contribution](#contribution)

## Installation

${data.install}

## Usage

## Credits

## License

## Contribution

## Questions

If you have any questions regarding this application, please direct them to
EMAIL:  ${data.email}
GITHUB:  ${data.github}
`
  return content
}

//This function will get the user input, then call the functions to generate content and write the file
var promptUser = () => {
  inquirer.prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
      //other functions get called here
      const content = generateContent(answers);
      writeFile("./README.md", content);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

promptUser();
