export class Card {
	constructor(title, description, author) {
		this._title = title;
		this._description = description;
		this._author = author;
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

export class CardImage extends Card {
	constructor(title, description, author, image) {
		super(title, description, author);
		this._image = image;
	}

	get image() {
		return this._image;
	}
}
