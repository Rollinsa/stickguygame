import React, { Component } from 'react';
import './AtmScreen.css';

export default class AtmScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			instructions: "Please make a choice...",
			descriptors: {
				descriptor1: "Withdraw",
				descriptor2: "Balance",
				descriptor3: "Deposit",
				descriptor4: "Re-Enter PIN"
			}
		}
	}

	render() {
		const { descriptor1, descriptor2, descriptor3, descriptor4 } = this.state.descriptors;

		return (
			<div className="AtmScreen">
				<div className="instructions">{this.state.instructions}</div>
				<div className="buttonDescriptors">
					<div className="descriptor-row">
						<span className="descriptor">{descriptor1}</span>
						<span className="descriptor">{descriptor2}</span>
					</div>
					<div className="descriptor-row">
						<span className="descriptor">{descriptor3}</span>
						<span className="descriptor">{descriptor4}</span>
					</div>
				</div>
			</div>
		);
	}
}
