import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
	static defaultProps = {
		name: '기본 이름'
	}
	
	static propTypes = {
		name: PropTypes.string,
		age: PropTypes.number.isRequired
	}

	render(){
		return(
			<div>
				<p>I'm {this.props.name}.</p>
				<p>I'm {this.props.age} years old.</p>
			</div>
		)
	}
}

export default MyComponent;