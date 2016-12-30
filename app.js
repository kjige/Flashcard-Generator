var inquirer = require('inquirer');

function BasicFlashcard(name, front, back) {
    this.name = name;
    this.front = front;
    this.back = back;
}

function ClozeFlashcard(name, text, cloze) {
    this.name = name;
    this.text = text;
    this.cloze = cloze;

    function displayText() {
        console.log(this.text);
    }
}

// var basic1 = new BasicFlashcard('basic1', 'apple', 'orange');
// console.log(basic1);

// var cloze1 = new ClozeFlashcard('cloze1', 'black', 'white');
// console.log(cloze1);