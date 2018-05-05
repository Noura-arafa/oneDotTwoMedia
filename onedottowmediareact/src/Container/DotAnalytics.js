import React, { Component } from 'react';
import '../css/dot-style.css'
import Dot from './Dot.js'
import Scroll from './ScrollDots.js';
import '../css/div-nav-style.css';

class DotAnalytics extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"Dot analytics",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot analytics",img:"dot analytics1",id:"section1"},
		{content:"News portal analysis",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot analytics",img:"dot analytics2",id:"section2"},
		{content:"Social media analysis",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot analytics",img:"dot analytics3",id:"section3"}


		]
	}


   /* showdivs(){
    	for(var i=0 ; i<this.rows.length ; i++){
						{rows[i]}
					}
    }*/
	render() {
		var rows = [];
		var data = [];
        for (var i = 0; i < Object.keys(this.state.headlines).length; i++) {
		    {rows.push(<Dot headline={this.state.headlines[i].content} paragraph={this.state.headlines[i].p} folder={this.state.headlines[i].folder} img={this.state.headlines[i].img} id={this.state.headlines[i].id} idx={i} />);}
        	{data.push(<Scroll headline = {this.state.headlines[i].content} section = {this.state.headlines[i].id} data = {i+1} />);}
		}
		
	    return (

	    	<div>
		    	<nav id="cd-vertical-nav">
					<ul>
					 {data}
					</ul>
				</nav>
		    	<div className="content">
					<div className="container-fluid">
						{rows}
					</div>
				</div>
			</div>
	    );

	}
}



export default DotAnalytics;
