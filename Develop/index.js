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
            "Inquirer",
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
])
// function to write README file
.then((data)=>{
const goodReadMe = `${data.title.toLowerCase().split('').join('')}.md`;
fs.writeFile(goodReadMe, newMD(data), (err)=>
err? console.log(err) : console.log('Congratulations!')
);
});

function newMD(data){
    return `
    #${data.title}
    
    ##Table Of Content
    [Project](#Project)
    [Installation](#Installation)
    [Usage](#Usage)
    [Contribution](#Contribution)
    [Test](#Test)
    [License](#License)
    
    ### Project De`
}


