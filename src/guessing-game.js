class GuessingGame {
  constructor() {
    this.guessingNumber = 0;
    this.minNumber = 0;
    this.maxNumber = 0;
  }

  setRange(min, max) {
    this.minNumber = min;
    this.maxNumber = max;
  }

  guess() {
    return this.guessingNumber = Math.round((this.maxNumber + this.minNumber) / 2);
  }

  lower() {
    return this.maxNumber = this.guessingNumber;
  }

  greater() {
    return this.minNumber = this.guessingNumber;
  }
}

module.exports = GuessingGame;
