import React, { Component } from 'react';
import '../css/dot-style.css'
import Dot from './Dot.js'
import Scroll from './ScrollDots.js';
import '../css/div-nav-style.css';

class DotDevServices extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"System architecture and design",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dotdev services",img:"dotdev services1",id:"section1"},
		{content:"Software development",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dotdev services",img:"dotdev services2",id:"section2"},
		{content:"Software security services",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dotdev services",img:"dotdev services3",id:"section3"},
		{content:"Mobile solutions",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dotdev services",img:"dotdev services4",id:"section4"},
		{content:"E-Commerce solution",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dotdev services",img:"dotdev services5",id:"section5"},
		{content:"Web hosting solutions",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dotdev services",img:"dotdev services6",id:"section6"},
		{content:"Integerated digital marketing strategy",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dotdev services",img:"dotdev services7",id:"section7"},
		{content:"Digital advertising managment",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dotdev services",img:"dotdev services8",id:"section8"},
		{content:"Analytics and conversion rate optimization",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dotdev services",img:"dotdev services9",id:"section9"}

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



export default DotDevServices;
