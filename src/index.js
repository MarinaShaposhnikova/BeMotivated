/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import "./assets/scss/app.scss";
import css from "./assets/css/app.css";
import {generateCards} from "./js/data/data";

class Leaf extends React.Component {
	constructor(props) {
		super(props);
		this.cards = this.props.cards;
		this.state = {
			card: this.props.cards[0],
			position: 0
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
			position: position
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
		return <div id="card" onClick={this.onClick}>
			<img id="card-image" src={this.props.card.image}/>
			<h1 id="card-title">{this.props.card.title}</h1>
			<h3 id="card-author">{this.props.card.author}</h3>
		</div>;
	}
}

// Here must be all cards
ReactDOM.render(
	<Leaf cards={generateCards()}/>,
	document.getElementById("container")
);
