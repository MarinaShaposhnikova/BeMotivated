import {Card} from "../card";

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
