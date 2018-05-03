import React, { Component } from 'react';
import '../css/dot-style.css'
import Dot from './Dot.js'

class DotAnalytics extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"Dot analytics",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot vid/dot vid1.png",id:"section1"},
		{content:"News portal analysis",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"..images/dot vid/dot vid2.png",id:"section2"},
		{content:"Social media analysis",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot vid/dot vid3.png",id:"section3"}


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
				
				
					
				</div>
			</div>
	    );

	}
}



export default DotAnalytics;
