var inquirer = require('inquirer');
var basic = require('./basic.js');
var cards = require('./cards.js');

inquirer.prompt([{
    name: 'type',
    type: 'list',
    message: 'what type of card?',
    choices: ['basic', 'cloze']
}]).then(function (resp) {
    // console.log('The type is ' + resp.type);
    if (resp.type === 'basic') {
        BasicCardPrompt();
    } else if (resp.type === 'cloze') {

    }
});

function BasicCardPrompt() {
    inquirer.prompt([{
        name: 'front',
        message: 'what does the front say?',
        type: 'input'
    }, {
        name: 'back',
        message: 'what does the back say?',
        type: 'input'
    }]).then(function (resp) {
        var newBasicFlashcard = new basic(resp.front, resp.back);
        console.log(newBasicFlashcard);
    });
}