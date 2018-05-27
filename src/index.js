/* eslint-disable no-unused-vars */
import _ from "lodash";
import "./assets/scss/app.scss";
import css from "./assets/css/app.css";
import {Card} from "./js/card";

let card = Card.generateTestCard();

let image = document.querySelector("img");
let heading = document.querySelector("h1");

image.onclick = function () {
	heading.textContent = card.title;
};

heading.onclick = function () {
	setUserName();
	let storedName = localStorage.getItem("name");
	heading.textContent = "You are so cool, " + storedName;
};

function setUserName() {
	let myName = prompt("Please enter your name.");
	if (!myName) {
		myName = card.author;
	}
	localStorage.setItem("name", myName);
}
