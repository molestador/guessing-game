class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.max = max;
        this.min = min;

    }

    guess() {
        var nubmer = Math.round((this.min + this.max) / 2);
        return nubmer;

    }

    lower() {
        this.max = Math.round((this.min + this.max) / 2);
    }

    greater() {
        this.min = Math.round((this.min + this.max) / 2);

    }
}

module.exports = GuessingGame;
