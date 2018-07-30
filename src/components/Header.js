import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
	// shouldComponentUpdate(nexProps, nextState) {
	// 	return false;
	// }
	render() {
		console.log('Header');
		return (
			<div>
				<h1 className="f1">Robo Homies</h1>
				<CounterButton color={'red'} />
			</div>
		)
	}
}

export default Header;