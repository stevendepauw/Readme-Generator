//  Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown =require('./utils/generateMarkdown');

//inquirer prompt to provide the answers used in writing the readME markdown
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the projects title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any installation instructions for the project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?.'
    },
    {
        type:'list',
        name: 'license',
        message: 'Whaat type of license are you using?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'none']
    },
    {
        type:'input',
        name: 'contributors',
        message: 'List any other contributors to the project? If no other contributors please enter n/a',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username.'
    }
])
.then((answers) => {
    fs.writeFile('README.md', (generateMarkdown(answers)), (err) => {
        err ? console.log(err) : console.log('New README.md created successfully')
    })
});

