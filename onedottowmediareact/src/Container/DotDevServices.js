import React, { Component } from 'react';
import '../css/dot-style.css'
import Dot from './Dot.js'

class DotDevServices extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"System architecture and design",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dotdev services/dotdev services1.png",id:"section1"},
		{content:"Software development",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"..images/dotdev services/dotdev services2.png",id:"section2"},
		{content:"Software security services",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dotdev services/dotdev services3.png",id:"section3"},
		{content:"Mobile solutions",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dotdev services/dotdev services4.png",id:"section4"},
		{content:"E-Commerce solution",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dotdev services/dotdev services5.png",id:"section5"},
		{content:"Web hosting solutions",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dotdev services/dotdev services6.png",id:"section6"},
		{content:"Integerated digital marketing strategy",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dotdev services/dotdev services7.png",id:"section7"},
		{content:"Digital advertising managment",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dotdev services/dotdev services8.png",id:"section8"},
		{content:"Analytics and conversion rate optimization",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dotdev services/dotdev services9.png",id:"section9"}

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
		    {rows.push(<Dot headline={this.state.headlines[i].content} paragraph={this.state.headlines[i].p} img={this.state.headlines[i].img} idx={i}/>);}
		}
		
	    return (
    		<div class="content">
				<div className="container-fluid">
					
					{rows[0]}
					{rows[1]}
					{rows[2]}
					{rows[3]}
					{rows[4]}
					{rows[5]}
					{rows[6]}
					{rows[7]}
					{rows[8]}
				
					
				</div>
			</div>
	    );

	}
}



export default DotDevServices;
