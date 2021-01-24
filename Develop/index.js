// questions for user
const inquirer = require('inquirer')
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
        message:'',
    }, {
        type:'input',
        name:'usage',
        message:'',
    }, {
        type:'input',
        name:'contributing',
        message:'',
    },
    {
        type:'input',
        name:'Test',
        message:'',
    },
    {
        type:'list',
        name:'license',
        message:'',
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
])
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
