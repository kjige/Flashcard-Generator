var BasicFlashcard = function (front, back) {
    this.front = front;
    this.back = back;

    this.displayFront = function () {
        console.log('Front: ' + this.front);
    };

    this.displayBack = function () {
        console.log('Back: ' + this.back);
    };

    this.displayAll = function () {
        console.log('Front: ' + this.front + ', ' + 'Back: ' + this.back + '\n');
    };
};

module.exports = BasicFlashcard;