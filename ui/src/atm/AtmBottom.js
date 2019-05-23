import React, { Component } from 'react';
import './AtmBottom.css';
import AtmScreen from "./AtmScreen";

export default class AtmBottom extends Component {

	constructor(props) {
		super(props);
		this.state = {
			instructions: "Please make a choice...",
			topLeftButton: "Withdraw",
			bottomLeftButton: "Balance",
			topRightButton: "Deposit",
			bottomRightButton: "Re-Enter PIN",
		}
	}

	buttonClick(e, buttonName) {
		console.log(buttonName, " was clicked.");
	}

	render() {
		const {
			instructions,
			topLeftButton,
			bottomLeftButton,
			topRightButton,
			bottomRightButton
		} = this.state;

		return (
			<div className="AtmBottom">
				<img className="credit-cards" src={require("./credit-cards.png")}/>
				<div className="screen-and-buttons-container">
					<div className="button-column">
						<button onClick={(e) => this.buttonClick(e, null)} className="atm-button"/>
						<button onClick={(e) => this.buttonClick(e, null)} className="atm-button"/>
						<button onClick={(e) => this.buttonClick(e, topLeftButton)} className="atm-button"/>
						<button onClick={(e) => this.buttonClick(e, bottomLeftButton)} className="atm-button"/>
					</div>
					<AtmScreen 
						instructions={instructions}
						topLeftButton={topLeftButton}
						bottomLeftButton={bottomLeftButton}
						topRightButton={topRightButton}
						bottomRightButton={bottomRightButton}
					/>
					<div className="button-column">
						<button onClick={(e) => this.buttonClick(e, null)} className="atm-button"/>
						<button onClick={(e) => this.buttonClick(e, null)} className="atm-button"/>
						<button onClick={(e) => this.buttonClick(e, topRightButton)} className="atm-button"/>
						<button onClick={(e) => this.buttonClick(e, bottomRightButton)} className="atm-button"/>
					</div>
				</div>
			</div>
		);
	}
}
