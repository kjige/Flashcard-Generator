var fs = require("fs");
var inquirer = require('inquirer');
var basic = require('./basic.js');

inquirer.prompt([{
    name: 'activity',
    message: 'make card or view cards?',
    type: 'list',
    choices: ['make', 'view']
}]).then(function (resp) {
    if (resp.activity === 'make') {
        makeCard();
    } else if (resp.activity === 'view') {
        viewCards();
    }
});

function makeCard() {
    inquirer.prompt([{
        name: 'type',
        type: 'list',
        message: 'what type of card?',
        choices: ['basic', 'cloze']
    }]).then(function (resp) {
        if (resp.type === 'basic') {
            basicCardPrompt();
        } else if (resp.type === 'cloze') {

        }
    });
}

function basicCardPrompt() {
    inquirer.prompt([{
        name: 'front',
        message: 'what does the front say?',
        type: 'input'
    }, {
        name: 'back',
        message: 'what does the back say?',
        type: 'input'
    }]).then(function (resp) {
        var newBasic = new basic(resp.front, resp.back);
        addBasicCard(newBasic);
    });
}

function addBasicCard(newBasic) {
    var card = "\n" + newBasic.front + "," + newBasic.back;
    fs.appendFile('basic.txt', card);
}

function viewCards() {
    fs.readFile('basic.txt', 'utf8', function (err, data) {
        var cardArray = data.split('\n');
        cardArray.forEach(function (card) {
            var cardSplit = card.split(',');
            var newBasicCard = new basic(cardSplit[0], cardSplit[1]);
            newBasicCard.displayAll();
        });
    });
}