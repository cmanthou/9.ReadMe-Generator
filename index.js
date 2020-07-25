const prompt = require('inquirer').createPromptModule()
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown.js')


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project titled?",
        name: "Title"
    },
    {
        type: "input",
        message: "Project description?",
        name: "Description"
    },
    // I don't think that I need the below ... should not be a question for the ReadMe, going to be a combination of ReadMe questions in the generateMarkdown.js file.
    // {
    //     type: "input",
    //     message: "List your Table of Contents",
    //     name: "TableofContents"
    // },
    {
        type: "input",
        message: "How do you install your application?",
        name: "Installation"
    },
    {
        type: "input",
        message: "How do you use your application?",
        name: "Usage"
    },
    {
        type: "list",
        message: "Select license from list:",
        name: "License",
        choices: [
            "NONE",
            "GPL3.0",
            "APACHE2.0",
            "MIT",
            "BSD3"
        ]
    },
    {
        type: "input",
        message: "List any Contibutors/Collaborators.",
        name: "Contributing"
    },
    {
        type: "input",
        message: "What tests did you run on your application?",
        name: "Tests"
    },
    {
        type: "input",
        message: "Who to contact for further questions? List Email",
        name: "Questions"
    }

];
// * Title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions

// // function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// // function to initialize program
function init() {
    prompt(questions).then(answers => {
        const response = generateMarkdown(answers);
        console.log(answers);
        writeToFile("README.md", response);
    })

}

// // function call to initialize program
init();