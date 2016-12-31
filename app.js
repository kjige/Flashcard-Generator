var fs = require("fs");
var inquirer = require('inquirer');
var basic = require('./basic.js');
var cloze = require('./cloze.js');

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
            makeBasicCard();
        } else if (resp.type === 'cloze') {
            makeClozeCard();
        }
    });
}

function makeBasicCard() {
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
    var card = newBasic.front + "," + newBasic.back + "\n";
    fs.appendFile('basic.txt', card);
}

function makeClozeCard() {
    inquirer.prompt([{
        name: 'text',
        message: 'what is the cloze-deleted text?',
        type: 'input'
    }, {
        name: 'cloze',
        message: 'what is the cloze text',
        type: 'input'
    }]).then(function (resp) {
        var newCloze = new cloze(resp.text, resp.cloze);
        addClozeCard(newCloze);
    });
}

function addClozeCard(newCloze) {
    var card = newCloze.text + "," + newCloze.cloze + "\n";
    fs.appendFile('cloze.txt', card);
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