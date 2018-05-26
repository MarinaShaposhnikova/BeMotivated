// import Card from './card.js';

import {Card} from "./card.js";

let image = document.querySelector('img');
let heading = document.querySelector('h1');

image.onclick = function () {
  let card = Card.generateTestCard();
  heading.textContent =  card.title;
};

heading.onclick = function () {
  setUserName();
  let storedName = localStorage.getItem('name');
  heading.textContent = 'You are so cool, ' + storedName;
};

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
}
