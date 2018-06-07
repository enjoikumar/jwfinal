import React, { Component } from 'react';
import bgImage from './assets/background-image.jpg';

class Main extends Component {
	render() {
		return (
			<div>
				<img className="main" src={bgImage} alt={"background"}/>
			</div>
		);
	}
}

export default Main;
