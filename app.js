var fs = require("fs");
var inquirer = require('inquirer');
var basic = require('./basic.js');
var cloze = require('./cloze.js');

inquirer.prompt([{
    name: 'activity',
    message: 'make card or view cards?',
    type: 'list',
    choices: ['make', 'view basic', 'view cloze']
}]).then(function (resp) {
    if (resp.activity === 'make') {
        makeCard();
    } else if (resp.activity === 'view basic') {
        viewBasic();
    } else if (resp.activity === 'view cloze') {
        viewCloze();
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
    var card = '\n' + newBasic.front + ',' + newBasic.back;
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
    var card = '\n' + newCloze.text + ',' + newCloze.cloze;
    fs.appendFile('cloze.txt', card);
}

function viewBasic() {
    fs.readFile('basic.txt', 'utf8', function (err, data) {
        var cardArray = data.split('\n');
        cardArray.forEach(function (card) {
            var cardSplit = card.split(',');
            var newBasicCard = new basic(cardSplit[0], cardSplit[1]);
            newBasicCard.displayAll();
        });
    });
}

function viewCloze() {
    fs.readFile('cloze.txt', 'utf8', function (err, data) {
        var cardArray = data.split('\n');
        cardArray.forEach(function (card) {
            var cardSplit = card.split(',');
            var newClozeCard = new cloze(cardSplit[0], cardSplit[1]);
            newClozeCard.displayAll();
        });
    });
}