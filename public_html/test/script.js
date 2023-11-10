import CoffeeMachine from "./coffeeMachine.js";

// SCREEN ELEMENTS
const messageEl = document.getElementById("message");
const waterEl = document.getElementById("water-status");
const coffeeEl = document.getElementById("coffee-status");
const milkEl = document.getElementById("milk-status");
const creditEl = document.getElementById("credit");

// BUTTON ELEMENTS
const addWaterBtn = document.getElementById("add-water");
const addCoffeeBtn = document.getElementById("add-coffee");
const addMilkBtn = document.getElementById("add-milk");
const shortEspressoBtn = document.getElementById("short-espresso");
const longExpressoBtn = document.getElementById("long-espresso");
const capuchinoBtn = document.getElementById("capuchino");
const addCreditBtn = document.getElementById("add-credit");

const coffeeMachine = new CoffeeMachine(400, 200, 100, 100, {
  coffeeEl,
  milkEl,
  waterEl,
  creditEl,
  messageEl,
});

coffeeMachine.init();

// ADD WATER
addWaterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  coffeeMachine.addWater();
});

// ADD COFFEE
addCoffeeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  coffeeMachine.addCoffee();
});

// ADD MILK
addMilkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  coffeeMachine.addMilk();
});

// ADD CREDIT
addCreditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  coffeeMachine.addCredit();
});

// CREATE SHORT ESPRESO
shortEspressoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  coffeeMachine.makeShortEspresso();
});

// CREATE LONG ESPRESO
longExpressoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  coffeeMachine.makeLongEspresso();
});

// CREATE CAPUCHINO
capuchinoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  coffeeMachine.makeCapuchino();
});
