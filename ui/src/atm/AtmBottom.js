import React, { Component } from 'react';
import './AtmBottom.css';
import AtmScreen from "./AtmScreen";

export default class AtmBottom extends Component {

	initialState = {
		instructions: "Please make a choice...",
		topLeftButton: "Withdraw",
		bottomLeftButton: "Balance",
		topRightButton: "Deposit",
		bottomRightButton: "Re-Enter PIN",
		buttonClicked: "",
		balance: 0,
	}

	constructor(props) {
		super(props);
		this.state = this.initialState;
	}

	async componentDidUpdate(prevProps, prevState) {
		if (prevState.buttonClicked !== "Balance" && this.state.buttonClicked === "Balance") {
			const res = await fetch('/atm/balance');
			const body = await res.json();

			if (res.status !== 200) {
				console.error(`Error fetching balance: ${body.message}`);
				throw Error(body.message);
			}

			const { balance } = body;
			this.setState({ balance })
		}
	}

	buttonCallbacks = {
		"Withdraw": () => null,
		"Balance": () => {
			this.setState({ 
				instructions: "Your balance is below!",
				topLeftButton: "",
				bottomLeftButton: "Go Back",
				topRightButton: "",
				bottomRightButton: "",
				buttonClicked: "Balance",
			});
		},
		"Deposit": () => null,
		"Re-Enter PIN": () => null,
		"Go Back": () => {
			this.setState(this.initialState);
		},
	}

	render() {
		const {
			instructions,
			topLeftButton,
			bottomLeftButton,
			topRightButton,
			bottomRightButton,
			balance,
			buttonClicked
		} = this.state;

		return (
			<div className="AtmBottom">
				<img className="credit-cards" src={require("./credit-cards.png")}/>
				<div className="screen-and-buttons-container">
					<div className="button-column">
						<button className="atm-button"/>
						<button className="atm-button"/>
						<button onClick={() => topLeftButton && this.buttonCallbacks[topLeftButton]()} className="atm-button"/>
						<button onClick={() => bottomLeftButton && this.buttonCallbacks[bottomLeftButton]()} className="atm-button"/>
					</div>
					<AtmScreen 
						instructions={instructions}
						topLeftButton={topLeftButton}
						bottomLeftButton={bottomLeftButton}
						topRightButton={topRightButton}
						bottomRightButton={bottomRightButton}
						balance={balance}
						buttonClicked={buttonClicked}
					/>
					<div className="button-column">
						<button className="atm-button"/>
						<button className="atm-button"/>
						<button onClick={() => topRightButton && this.buttonCallbacks[topRightButton]()} className="atm-button"/>
						<button onClick={() => bottomRightButton && this.buttonCallbacks[bottomRightButton]()} className="atm-button"/>
					</div>
				</div>
			</div>
		);
	}
}
