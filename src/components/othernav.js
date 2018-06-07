import React, { Component } from 'react';
import Data from '../data.json';

const innerButton = Data.results[0].data.button.text
const url = Data.results[0].data.button.url

class Othernav extends Component {
	render() {
		return (
			<div className="othernav">
				<p>COMPANY</p>
				<p>CAREERS</p>
				<p>DEVELOPER</p>
				<p>SUPPORT</p>
				<p>SIGN-IN</p>
				<button><a href={url}>{innerButton.toUpperCase()}</a></button>
			</div>
		);
	}
}

export default Othernav;