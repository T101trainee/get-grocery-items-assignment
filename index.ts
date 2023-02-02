// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Get required Grocery Items</h1>`;

let availableAtHome: any;
availableAtHome = {
  Potatoes: 2,
  Carrots: 3,
  Spices: 5,
};
let requiredForLunch: any;
requiredForLunch = {
  Potatoes: 3,
  Carrots: 3,
  Spices: 3,
  'Ice-cream cups': 11,
  'Slices of bread': 2,
};

function getShoppingList(availableAtHome, requiredForLunch) {
  let result: any;
  result = {};
  let reqItems: string[];
  reqItems = Object.keys(requiredForLunch);
  let availableItems: string[];
  availableItems = Object.keys(availableAtHome);
  for (let item of reqItems) {
    let boo: boolean;
    boo = availableItems.includes(item);
    if (availableAtHome[item] < requiredForLunch[item]) {
      result[item] = requiredForLunch[item] - availableAtHome[item];
    } else if (!boo) {
      result[item] = requiredForLunch[item];
    }
  }
  return result;
}
let results = getShoppingList(availableAtHome, requiredForLunch);
console.log(results);
