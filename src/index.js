/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import people from "./assets/media/people.svg";
import bulb from "./assets/media/light-bulb.svg";
import global from "./assets/media/global.svg";

import "./assets/scss/app.scss";
import css from "./assets/css/app.css";
import {generateCards} from "./js/data/data";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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
			<div id="card-back-last"/>
			<div id="card-back"/>
			<CardBlock
				card={this.state.card}
				swipeCard={this.swipeCard}
				position={this.state.position}/>

		</div>;
	}
}

class CardBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.state.fade = false;
		this.fadingDone = this.fadingDone.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({fade: true});
		this.props.swipeCard(this.props.position);
	}

	componentDidMount() {
		const elm = this.refs.card;
		elm.addEventListener("animationend", this.fadingDone);
	}

	componentWillUnmount() {
		const elm = this.refs.card;
		elm.removeEventListener("animationend", this.fadingDone);
	}

	fadingDone() {
		// will re-render component, removing the animation class
		this.setState({fade: false});
	}

	render() {
		const fade = this.state.fade;
		return <div
			id="card"
			ref='card'
			onClick={this.onClick}
			className={fade ? "fade" : ""}>
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
