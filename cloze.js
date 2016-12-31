var ClozeFlashcard = function (text, cloze) {
    this.text = text;
    this.cloze = cloze;

    this.displayText = function () {
        console.log('Text: ' + this.text);
    };

    this.displayCloze = function () {
        console.log('Cloze: ' + this.cloze);
    };

    this.displayAll = function () {
        console.log('Text: ' + this.text + ', ' + 'Cloze: ' + this.cloze);
    };
};

module.exports = ClozeFlashcard;