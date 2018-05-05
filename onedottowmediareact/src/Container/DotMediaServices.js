import React, { Component } from 'react';
import '../css/dot-style.css'
import Dot from './Dot.js'
import Scroll from './ScrollDots.js';
import '../css/div-nav-style.css';

class DotMediaServices extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"Film and tv equipments rental",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot media",img:"dot media1",id:"section1"},
		{content:"Film crew",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot media",img:"dot media2",id:"section2"},
		{content:"Location permission",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot media",img:"dot media3",id:"sectio31"},
		{content:"Post production",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot media",img:"dot media4",id:"section4"}
		

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



export default DotMediaServices;
