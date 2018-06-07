import React, { Component } from 'react';
import Data from '../data.json';

import HeroImage from './hero';

const title = Data.results[0].data.header_group[0].title[0].text;
const text = Data.results[0].data.subhead[0].text

class Center extends Component {
	render() {
		return (
			<div className="vIcon">
				<img src={Data.results[0].data.header_group[0].icon.url} alt="cloud"/>
				<p>{title}</p>
				<p className="biLine">{text}</p>
				<HeroImage />
			</div>
		);
	}
}

export default Center;



// console.log(Data.results[0].data.header_group[0].icon.url)
// console.log(Data.results[0].data.body[0].items[0].feature_description[0].text)
// console.log(Data)
// console.log(Data.results[0].data.header_group[0].title[0].text)
// console.log(Data.results[0].data.subhead[0].text)