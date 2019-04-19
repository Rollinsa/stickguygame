import React, { Component } from 'react';
import './App.css';
import Atm from "./atm/Atm";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Atm />
			</div>
		);
	}
}

export default App;
