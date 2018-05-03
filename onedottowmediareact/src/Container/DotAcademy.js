import React, { Component } from 'react';
import '../css/dot-style.css'
import Dot from './Dot.js'

class DotAcademy extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"Understanding camera TV",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy1.png",id:"section1"},
		{content:"News reporting and video preperation",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"..images/dot academy/dot academy2.png",id:"section2"},
		{content:"IOS/Android MOJO video and photography editing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy3.png",id:"section3"},
		{content:"TV Editing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy4.png",id:"section4"},
		{content:"Broadcasting",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy5.png",id:"section5"},
		{content:"Spokes person",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy6.png",id:"section6"},
		{content:"TV Reporting",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy7.png",id:"section7"},
		{content:"Visual story telling",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy8.png",id:"section8"},
		{content:"Content Marketing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy9.png",id:"section9"},
		{content:"Social media managment",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy10.png",id:"section10"},
		{content:"Facebook and instagram adversting",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy11.png",id:"section11"},
		{content:"Twitter advertsing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy12.png",id:"section12"},
		{content:"Mobile marketing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy13.png",id:"section13"},
		{content:"Google Adwords",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy14.png",id:"section14"},
		{content:"Search engine optimization",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy15.png",id:"section15"},
		{content:"Email marketing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy16.png",id:"section16"},
		{content:"Photography for journalism",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy17.png",id:"section17"},
		{content:"Online journalism",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy18.png",id:"section18"},
		{content:"In depth journalism",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy19.png",id:"section19"},
		{content:"TV directing",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy20.png",id:"section20"},
		{content:"In depth journalism",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot academy/dot academy21.png",id:"section21"}




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
		    {rows.push(<Dot headline={this.state.headlines[i].content} paragraph={this.state.headlines[i].p} img={this.state.headlines[i].img} id={this.state.headlines[i].id} idx={i}/>);}
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
					{rows[9]}
					{rows[10]}
					{rows[11]}
					{rows[12]}
					{rows[13]}
					{rows[14]}
					{rows[15]}
					{rows[16]}
					{rows[17]}
					{rows[18]}
					{rows[19]}
					{rows[20]}
				
				</div>
			</div>
	    );

	}
}



export default DotAcademy;
