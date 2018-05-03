import React, { Component } from 'react';
import '../css/dot-style.css'
import Dot from './Dot.js'

class DotMediaServices extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"Film and tv equipments rental",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot media/dot media1.png",id:"section1"},
		{content:"Film crew",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"..images/dot media/dot media2.png",id:"section2"},
		{content:"Location permission",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot media/dot media3.png",id:"sectio31"},
		{content:"Post production",p:"We partner with editorial teams to identify their highest quality content -- the pieces that pique and keep reader attention. We partner with advertising teams to plan campaigns around this high-quality content so these ads are seen more often and for longer.",img:"../images/dot media/dot media4.png",id:"section4"}
		

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
					
					
				</div>
			</div>
	    );

	}
}



export default DotMediaServices;
