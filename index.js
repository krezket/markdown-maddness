const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type:'input',
        message:"What is your project's name?",
        name:'Project'
    },
    {
        type:'input',
        message:'Write a short description of your project.',
        name:'Description'
    },
    {
        type:'input',
        message:'What command should be run to install dependencies?',
        name:'Dependencies'
    },
    {
        type:'input',
        message:'What what command should be run to run tests?',
        name:'Test'
    },
    {
        type:'input',
        message:'What does the user need to know about using the repo?',
        name:'Usage'
    },
    {
        type:'input',
        message:'What does the user need to know about contributing to the repo?',
        name:'Contribution'
    },
    {
        type:'input',
        message:'What kind of license should your project have?',
        name:'License'
    },
    {
        type:'input',
        message:'What is your GitHub username?',
        name:'Name'
    },
    {
        type:'input',
        message:'What is your email?',
        name:'Mail'
    },
])
.then((res)=>{
    console.log(res)
    const text = `# ${res.Project} 
## Description
${res.Description} 

## Installation
This application uses the inquirer package, so to install dependencies write ${res.Dependencies} into the console, then hit enter.

To run the application type ${res.Test} into the console, then hit enter.
    
## Usage Information
${res.Usage} 
    
## Contribution Guidelines
${res.Contribution} 
    
## License
${res.License} 
    
# Questions
## [${res.Name}](https://github.com/krezket) 
${res.Mail}`

    fs.writeFile('./README/README.md',text,(err)=>{
        if(err){
            console.log('error')
        }
        else{
            console.log('yay')
        }
    })
})