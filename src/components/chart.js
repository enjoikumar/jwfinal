import React, { Component } from 'react';
import Data from '../data.json';

const left = Data.results[0].data.body[1].primary
const right = Data.results[0].data.body[2].primary

function ChartData(props) {
	return(
		<div className={props.class}>
			<img src={props.url} alt="cimg"/>
			<p className="heading">{props.heading.toUpperCase()}</p>
			<p className="para">{props.para}</p>
		</div>
	)
}

class Chart extends Component {
	render() {
		return(
			<div className="chart">
				<ChartData 
					class="chart1"
					url={left.image.url}
					heading={left.section_header[0].text}
					para={left.section_text[0].text}
				/>

				<ChartData 
					class="chart2"
					url={right.image.url}
					heading={right.section_header[0].text}
					para={right.section_text[0].text}
				/>
			</div>
		)
	}
}

export default Chart;



// image- Data.results[0].data.body[1].primary.image.url
// head- Data.results[0].data.body[1].primary.section_header[0].text
// para- Data.results[0].data.body[1].primary.section_text[0].text

// console.log(left.section_header[0].text)
// console.log(left.section_text[0].text)

// console.log(right.section_header[0].text)
// console.log(right.section_text[0].text)