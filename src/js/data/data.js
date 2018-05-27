import {CardImage} from "../card";

const DESCRIPTION = "It's so easy.";

const IMAGES = [
	"./assets/media/light-bulb.svg",
	"./assets/media/people.svg",
	"./assets/media/global.svg"
];

const TITLES = [
	"Гореть нужно так что бы не перегореть",
	"Никогда не поздно учить новые технологии:)",
	"Настырность это клево ;) только смелым покоряются государства ;)"
];

const AUTHORS = [
	"Anton",
	"Harry",
	"Potter"
];

export function generateCards() {
	return TITLES.map(title => {
		return title.replace(" ","\n");
	}).map((title, index, array) => {
		return new CardImage(title, DESCRIPTION, AUTHORS[index], IMAGES[index]);
	});
}
