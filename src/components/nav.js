import React, { Component } from 'react';
import logo from './assets/logo.png';

class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<img className="logo" src={logo} alt={"logo"}/>
				<p>SOLUTIONS</p>
				<p>CUSTOMERS</p>
				<p>PRICING</p>
			</div>
		);
	}
}

export default Nav;