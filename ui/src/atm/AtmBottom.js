import React, { Component } from 'react';
import './AtmBottom.css';
import AtmScreen from "./AtmScreen";

export default class AtmBottom extends Component {
render() {
	return (
		<div className="AtmBottom">
			<img className="credit-cards" src={require("./credit-cards.png")}/>
			<div className="screen-and-buttons-container">
				<div className="button-column">
					<button className="atm-button"/>
					<button className="atm-button"/>
					<button className="atm-button"/>
					<button className="atm-button"/>
				</div>
				<AtmScreen />
				<div className="button-column">
					<button className="atm-button"/>
					<button className="atm-button"/>
					<button className="atm-button"/>
					<button className="atm-button"/>
				</div>
			</div>
		</div>
	);
}
}
