export class Dice {
  constructor() {
    this._value = 0;
    this._lockedDice = false;
  }

  rollDice() {
    if (!this.lockedDice) {
      this._value = Math.floor(Math.random() * 6) + 1;
    }
  }

  toggleLock() {
    if (this._lockedDice === false) {
        this._lockedDice = true;
    } else {
        this._lockedDice = false;
    }
  }

  refresh() {
    this._lockedDice = false;
    this._value = 0;
  }

  get value() {
    return this._value;
  }

  get lockedDice() {
    return this._lockedDice
  }
}
