import React, { Component } from 'react';
import Dot from './Dot.js';
import Scroll from './ScrollDots.js';
import '../css/div-nav-style.css';
import '../css/dot-style.css';


//import x from '../js/div-nav.js'

class DotAcademy extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"Understanding camera TV",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy1",id:"section1"},
		{content:"News reporting and video preperation",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy2",id:"section2"},
		{content:"IOS/Android MOJO video and photography editing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy3",id:"section3"},
		{content:"TV Editing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy4",id:"section4"},
		{content:"Broadcasting",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy5",id:"section5"},
		{content:"Spokes person",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy6",id:"section6"},
		{content:"TV Reporting",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy7",id:"section7"},
		{content:"Visual story telling",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy8",id:"section8"},
		{content:"Content Marketing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy9",id:"section9"},
		{content:"Social media managment",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy10",id:"section10"},
		{content:"Facebook and instagram adversting",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy11",id:"section11"},
		{content:"Twitter advertsing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy12",id:"section12"},
		{content:"Mobile marketing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy13",id:"section13"},
		{content:"Google Adwords",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy14",id:"section14"},
		{content:"Search engine optimization",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy15",id:"section15"},
		{content:"Email marketing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy16",id:"section16"},
		{content:"Photography for journalism",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy17",id:"section17"},
		{content:"Online journalism",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy18",id:"section18"},
		{content:"In depth journalism",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy19",id:"section19"},
		{content:"TV directing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy20",id:"section20"},
		{content:"In depth journalism",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",folder:"dot academy",img:"dot academy21",id:"section21"}
		]
	}

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



export default DotAcademy;
