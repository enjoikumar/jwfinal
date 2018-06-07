import React, { Component } from 'react';
import Data from '../data.json';

// console.log(Data)

const innerButton = Data.results[0].data.button.text

class HeroImage extends Component {
	render() {
		return (
			<div className="HeroImage">
				<button>{innerButton.toUpperCase()}</button>
				<img src={Data.results[0].data.hero_image.url} alt="hero"/>
			</div>
		);
	}
}

export default HeroImage;



// console.log(Data.results[0].data.header_group[0].icon.url)
// console.log(Data.results[0].data.hero_image.url)
// console.log(Data.results[0].data.button.text)
// console.log(Data.results[0].data.button.url)

// console.log(Data.results[0].data.body[0].items[0].feature_description[0].text)

