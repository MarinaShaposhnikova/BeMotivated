import {Card} from "../card";

export function generateTestCard() {
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
