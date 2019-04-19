import React, { Component } from 'react';
import './Atm.css';
import AtmTop from "./AtmTop";
import AtmBottom from "./AtmBottom";

export default class Atm extends Component {
	render() {
		return (
			<div className="Atm">
				<AtmTop />
				<div className="Separator"></div>
				<AtmBottom />
			</div>
		);
	}
}
