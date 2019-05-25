import React, { Component } from 'react';
import './AtmScreen.css';

export default class AtmScreen extends Component {
	render() {
		const { 
			instructions, 
			topLeftButton, 
			bottomLeftButton, 
			topRightButton, 
			bottomRightButton, 
			balance, 
			buttonClicked, 
		} = this.props;

		return (
			<div className="AtmScreen">
				<div className="instructions">{instructions}</div>
				{buttonClicked === "Balance" ? <div className="balance">{balance}</div> : null}
				{buttonClicked === "Deposit" ? <textarea id="deposit" rows="1" cols="20"></textarea> : null}
				<div className="buttonDescriptors">
					<div className="descriptor-row">
						<span className="descriptor">{topLeftButton}</span>
						<span className="descriptor">{topRightButton}</span>
					</div>
					<div className="descriptor-row">
						<span className="descriptor">{bottomLeftButton}</span>
						<span className="descriptor">{bottomRightButton}</span>
					</div>
				</div>
			</div>
		);
	}
}
