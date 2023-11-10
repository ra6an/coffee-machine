export default class CoffeeMachine {
  _invalidInputMessages = {
    notNumber: "Please enter a valid number!",
    negativeNumber: "Please enter a positive number!",
    decimalNumber: "Please enter round number!",
  };
  _maxWater = 400;
  _maxCoffee = 200;
  _maxMilk = 100;
  _water = 0;
  _coffee = 0;
  _milk = 0;
  _credit = 0;
  _waterEl;
  _coffeeEl;
  _milkEl;
  _creditEl;
  _messageEl;

  constructor(water, coffee, milk, credit, elements) {
    this._water = Number(water);
    this._coffee = Number(coffee);
    this._milk = Number(milk);
    this._credit = Number(credit);
    this._coffeeEl = elements.coffeeEl;
    this._milkEl = elements.milkEl;
    this._waterEl = elements.waterEl;
    this._creditEl = elements.creditEl;
    this._messageEl = elements.messageEl;
  }

  init() {
    this.waterStatus();
    this.coffeeStatus();
    this.milkStatus();
    this.creditStatus();
  }

  displayMsg(msg) {
    this._messageEl.textContent = msg;
  }

  // CHECK IF USER INPUT IS VALID
  checkInput(input) {
    if (isNaN(input)) {
      return "notNumber";
    } else if (input < 0) {
      return "negativeNumber";
    } else if (input.toString().includes(".")) {
      return "decimalNumber";
    } else {
      return "valid";
    }
  }

  // WATER
  waterStatus() {
    this._waterEl.textContent = this._water;
  }

  addWater() {
    const userInput = Number(prompt("Enter amout of water:"));
    const checkUserInput = this.checkInput(userInput);

    if (checkUserInput === "valid") {
      this._water =
        this._water + userInput > this._maxWater
          ? this._maxWater
          : this._water + userInput;

      this.waterStatus();
    } else {
      this.displayMsg(this._invalidInputMessages[checkUserInput]);
    }
  }

  emptyWater(water) {
    if (water > this._water) {
      this.displayMsg("Machine is out of water\n");
    } else {
      this._water -= water;
      this.waterStatus();
      this.displayMsg("Pouring water");
    }
  }

  // COFFEE
  coffeeStatus() {
    this._coffeeEl.textContent = this._coffee;
  }

  addCoffee() {
    let userInput = Number(prompt("Enter amout of coffee:"));
    const checkUserInput = this.checkInput(userInput);

    if (checkUserInput === "valid") {
      this._coffee =
        this._coffee + userInput > this._maxCoffee
          ? this._maxCoffee
          : this._coffee + userInput;

      this.coffeeStatus();
    } else {
      this.displayMsg(this._invalidInputMessages[checkUserInput]);
    }
  }

  emptyCoffee(coffee) {
    if (coffee > this._coffee) {
      this.displayMsg("Machine is out of coffee\n");
    } else {
      this._coffee -= coffee;
      this.coffeeStatus();
      this.displayMsg("Pouring coffee");
    }
  }

  // MILK
  milkStatus() {
    this._milkEl.textContent = this._milk;
  }

  addMilk() {
    let userInput = Number(prompt("Enter amout of milk:"));
    const checkUserInput = this.checkInput(userInput);

    if (checkUserInput === "valid") {
      this._milk =
        this._milk + userInput > this._maxMilk
          ? this._maxMilk
          : this._milk + userInput;

      this.milkStatus();
    } else {
      this.displayMsg(this._invalidInputMessages[checkUserInput]);
    }
  }

  emptyMilk(milk) {
    if (milk > this._milk) {
      this.displayMsg("Machine is out of milk\n");
    } else {
      this._milk -= milk;
      this.milkStatus();
      this.displayMsg("Pouring milk");
    }
  }

  // CREDIT
  creditStatus() {
    this._creditEl.textContent = this._credit;
  }

  addCredit() {
    let userInput = Number(prompt("Enter amout of credit:"));
    const checkUserInput = this.checkInput(userInput);

    if (checkUserInput === "valid") {
      this._credit = this._credit + userInput;
      this.creditStatus();
    } else {
      this.displayMsg(this._invalidInputMessages[checkUserInput]);
    }
  }

  emptyCredit(credit) {
    if (credit > this._credit) {
      this.displayMsg("Not enough credit");
    } else {
      this._credit -= credit;
      this.creditStatus();
    }
  }

  // METHODS
  makeShortEspresso() {
    if (this._credit < 30) {
      this.emptyCredit(30);
      return;
    } else if (this._water < 20) {
      this.emptyWater(20);
      return;
    } else if (this._coffee < 10) {
      this.emptyCoffee(10);
      return;
    } else {
      this.displayMsg("Preparing short espresso");
      this.emptyCredit(30);
      setTimeout(this.emptyWater.bind(this), 1000, 20);
      setTimeout(this.emptyCoffee.bind(this), 2000, 10);
      setTimeout(this.displayMsg.bind(this), 3000, "Short espresso finished");
    }
  }

  makeLongEspresso() {
    if (this._credit < 40) {
      this.emptyCredit(40);
      return;
    } else if (this._water < 40) {
      this.emptyWater(40);
      return;
    } else if (this._coffee < 10) {
      this.emptyCoffee(10);
      return;
    } else {
      this.displayMsg("Preparing long espresso");
      this.emptyCredit(40);
      setTimeout(this.emptyWater.bind(this), 1000, 40);
      setTimeout(this.emptyCoffee.bind(this), 2000, 10);
      setTimeout(this.displayMsg.bind(this), 3000, "Long espresso finished");
    }
  }

  makeCapuchino() {
    if (this._credit < 50) {
      this.emptyCredit(50);
      return;
    } else if (this._water < 20) {
      this.emptyWater(20);
      return;
    } else if (this._coffee < 10) {
      this.emptyCoffee(10);
      return;
    } else if (this._milk < 10) {
      this.emptyMilk(10);
      return;
    } else {
      this.displayMsg("Preparing capuchino");
      this.emptyCredit(50);
      setTimeout(this.emptyWater.bind(this), 1000, 20);
      setTimeout(this.emptyCoffee.bind(this), 2000, 10);
      setTimeout(this.emptyMilk.bind(this), 3000, 10);
      setTimeout(this.displayMsg.bind(this), 6000, "Capuchino finished");
    }
  }
}
