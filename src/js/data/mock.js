/* eslint-disable no-unused-vars */
import {Card} from "../card";
import {CardImage} from "../card";

export function generateTestCards(count) {
	let cards = [];
	for (let i = 0; i < count; i++) {
		cards.push(generateTestCard());
	}
	return cards;
}

function generateTestCard() {
	return new Card(`Be ${generateRandomTitle()}`, "It's so easy.", "Marina");
}

function generateTestCardImage() {
	return new CardImage(`Be ${generateRandomTitle()}`, "It's so easy.", "Marina", "./assets/media/bulb.svg");
}

function generateRandomTitle() {
	const adjectives = [
		"cool",
		"pretty",
		"smart",
		"simple",
		"honest"
	];
	let index = Math.floor(Math.random() * adjectives.length);
	return adjectives[index];
}
