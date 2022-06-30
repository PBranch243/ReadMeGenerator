const inquirer = require("inquirer");
const fs = require("fs");

var writeFile=(filename, content)=>{
    fs.writeFile(filename, content, (err)=>{
        if(err)
            console.log(err)})
}

var generateContent=(data)=>{
    var content = `# ${data.title} 


## Description

${data.description}

## Installation

${data.install}
`
    return content
}

var promptUser=()=>{
inquirer.prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'name',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'descripton',
        message: 'Please enter a description of the project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How is your project installed?',
    },
  ])
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
