const prompt = require('inquirer').createPromptModule()
const fs = require('fs')
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
        message: "How do you Install your application?",
        name: "Installation"
    },
    {
        type: "input",
        message: "How do you Use your application?",
        name: "Usage"
    },
    {
        type: "list",
        message: "Select license from list:",
        name: "License",
        choices: [
            "NONE",
            "GVL-GLP 3.0",
            "APACHE 2.0",
            "MIT",
            "BSD 3"
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
    writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
    });
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