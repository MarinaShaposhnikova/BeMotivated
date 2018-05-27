/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import "./assets/scss/app.scss";
import css from "./assets/css/app.css";
import {Card} from "./js/card";

class Leaf extends React.Component {
	render() {
		return <div id="main">
			<CardBlock card={this.props.card}/>
		</div>;
	}
}

class CardBlock extends React.Component {
	handleClick() {
		let myName = prompt("Please enter your name.");

		localStorage.setItem("name", myName);
	}

	render() {
		return <div id="card">
			<h1 onClick={this.handleClick}>{this.props.card.title}</h1>
			<img src="./assets/media/icon.png"/>
		</div>;
	}
}

// Here must be all cards
const CARDS = [
	Card.generateTestCard()
];

ReactDOM.render(
	<Leaf card={CARDS[0]}/>,
	document.getElementById("container")
);
