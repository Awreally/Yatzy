import { Dice } from "./dice.js";

export class diceSet {
  constructor() {
    this._dice = [];

    for (let i = 0; i < 5; i++) {
      const die = new Dice();
      this._dice.push(die);
    }
  }

  rollAllDice() {
    this._dice.forEach((die) => {
      die.rollDice();
    });
  }

  getValues() {
    return this._dice.map((die) => die.value);
  }

  toggleLock(index) {
    const die = this._dice[index];
    die.toggleLock();
  }

  isLocked(index) {
    return this._dice[index].lockedDice;
  }

  reset() {
    this._dice.forEach((die) => die.refresh());
  }
}
