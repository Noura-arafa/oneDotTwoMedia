import React, { Component } from 'react';
import '../css/div-nav-style.css';

class ScrollDots extends Component{
	render(){
		return(
			<li>
				<a href=  {'#' + this.props.section} data-number = {this.props.data}>
					<span className="cd-dot"></span>
					<span className="cd-label"> {this.props.headline} </span>
				</a>
			</li>
		);
	}
}

export default ScrollDots;