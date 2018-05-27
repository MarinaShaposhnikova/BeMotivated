/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import "./assets/scss/app.scss";
import css from "./assets/css/app.css";
import {generateTestCard} from "./js/utils/mock";
import img from "./assets/media/icon.png";

class Leaf extends React.Component {
	constructor(props) {
		super(props);
		this.cards = this.props.cards;
		this.state = {
			card: this.props.cards[0],
			position:0
		};
		this.swipeCard = this.swipeCard.bind(this);
	}

	swipeCard(position) {
		position++;
		if (position >= this.props.cards.length) {
			position = 0;
		}
		this.setState({
			card: this.props.cards[position],
			position:position
		});
	}

	render() {
		return <div id="main">
			<CardBlock
				card={this.state.card}
				swipeCard={this.swipeCard}
				position={this.state.position}
			/>
		</div>;
	}
}

class CardBlock extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.swipeCard(this.props.position);
	}

	render() {
		return <div id="card">
			<h1 onClick={this.onClick}>{this.props.card.title}</h1>
			<img src={img}/>
		</div>;
	}
}

// Here must be all cards
const CARDS = [
	generateTestCard(),
	generateTestCard(),
	generateTestCard(),
	generateTestCard()
];

ReactDOM.render(
	<Leaf cards={CARDS}/>,
	document.getElementById("container")
);
