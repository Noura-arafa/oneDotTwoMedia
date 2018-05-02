import React, { Component } from 'react';
import '../css/dot-style.css'
import Dot from './Dot.js'

class DotVid extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"dotvid"},
		{content:"Powerful Distribution and Built-In SEO"},
		{content:"Beautiful Video Experience Unlocking Revenue on Every Screen"},
		{content:"Subscription Video on Demand"}
		]
	}

   /* showdivs(){
    	for(var i=0 ; i<this.rows.length ; i++){
						{rows[i]}
					}
    }*/
	render() {
		var rows = [];
        for (var i = 0; i < Object.keys(this.state.headlines).length; i++) {
		    {rows.push(<Dot headline={this.state.headlines[i].content} idx={i}/>);}
		}
	    return (
	    	<div className="DotVid">
				<div className="container-fluid">
					{rows[0]}
					{rows[1]}
					{rows[2]}
					{rows[3]}

				</div>
			</div>
	    );

	}
}



export default DotVid;
