import React, { Component } from 'react'

class MyComponent extends Component {
	render(){
		return(
			<div>
				I'm {this.props.name}.
			</div>
		)
	}
}

export default MyComponent;