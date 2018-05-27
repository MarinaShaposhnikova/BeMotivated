export class Card {
	constructor(title, description, author) {
		this._title = title;
		this._description = description;
		this._author = author;
	}

	static generateTestCard() {
		return new Card("Be cool", "It's so easy. Be cool.", "Marina");
	}

	get author() {
		return this._author;
	}

	get title() {
		return this._title;
	}

	set title(title) {
		this._title = title;
	}
}

