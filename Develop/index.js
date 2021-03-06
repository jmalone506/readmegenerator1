// questions for user
const inquirer = require('inquirer')
const fs = require('fs')
inquirer
    .prompt([{
        type: 'input',
        name: 'Project',
        message: 'Project Title',
    },
    {
        type:'input',
        name:'Description',
        message:'Describe your project?',
    },
    {
        type:'input',
        name:'installation',
        message:'Instructions for intallation',
    }, {
        type:'input',
        name:'usage',
        message:'Usage Information',
    }, {
        type:'input',
        name:'contributing',
        message:'contribution',
    },
    {
        type:'input',
        name:'Test',
        message:'test instruction',
    },
    {
        type:'list',
        name:'license',
        message:'what licenses are being used',
        choices:[
            "ISC",
            "MIT",
            "BSL",
        ],
    },
    {
        type:'input',
        name:'gitHub',
        message:'GitHub account name',
    },
    {
        type:'input',
        name:'email',
        message:'What is your Email?',
    },
]);
// function to write README file
function writeToFile(fileName,data){
    fs.writeFile("./readme/" +fileName, data, function(err){
        if (err) {
            return console.log(err)
        }
        console.log("Suceed: " + fileName);
    })
    }
    
function init(){
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generatorMarkdown(data));
    })
};
    
    // ##Table Of Content
    // [Project](#Project)
    // [Installation](#Installation)
    // [Usage](#Usage)
    // [Contribution](#Contribution)
    // [Test](#Test)
    // [License](#License)
    
    // ### Project
    // ${data.Description}

    // ### Installation
    // ${data.installation}

    // ### Usage
    // ${data.usage}

    // ### Contribution
    // ${data.contributing}

    // ### Test
    // ${data.Test}

    // ### License
    // ${data.license}
    // `



