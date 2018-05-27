import {CardImage} from "../card";

const IMAGES = [
	"./assets/media/light-bulb.svg",
	"./assets/media/people.svg",
	"./assets/media/global.svg"
];

const TITLES = [
	"When your fire burns, make sure you don't burn yourself out in its flame",
	"It's never too late to learn new technologies",
	"It's perfectly fine to be a go-getter, those are the people who get shit done"
];

const AUTHORS = [
	"Y. Levin",
	"Y. Levin",
	"Y. Levin"
];

// TODO Descriptions here are original quotes on Russian.
const DESCRIPTIONS = [
	"Гореть нужно так что бы не перегореть",
	"Никогда не поздно учить новые технологии:)",
	"Настырность это клево ;) только смелым покоряются государства ;)"
];

export function generateCards() {
	return TITLES.map((title, index) => {
		return new CardImage(title, DESCRIPTIONS[index], AUTHORS[index], IMAGES[index]);
	});
}
