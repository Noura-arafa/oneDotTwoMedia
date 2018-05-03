import React, { Component } from 'react';
import '../css/dot-style.css'
import Dot from './Dot.js'

class DotVid extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"dotvid",p:"Increase visibility of your business.build customer loyalty and expand your customer base.",img:"../images/dot vid/dot vid1.png",id:"with-padding"},
		{content:"Powerful Distribution and Built-In SEO",p:"Powerful Distribution and Built-In SEO Our powerful distribution and syndication service make it easy to reach your audience across the web - on aggergator sites. social network search engines and across global markets. Powerful SEO tools bring the audience straight to your doorstep.",img:"..images/dot vid/dot vid2.png",id:"with-padding"},
		{content:"Beautiful Video Experience Unlocking Revenue on Every Screen",p:"Beautiful Video Experience Unlocking Revenue on Every Screen Broadcasters, Publishers, Distributors and Content Owners are Using DOTVID Solutions to Engage and Monetize Audience Quickly and Cost-Effectively.",img:"../images/dot vid/dot vid3.png",id:"with-padding"},
		{content:"Subscription Video on Demand",p:"Subscription Video on Demand Generate a recurring revenue stream by packaging and managing premium video content using DOTVID's elite transcoding, metadata management and content security capabilities. Drive ROI while delighting audinces whether they're on the couch or on the go.",img:"../images/dot vid/dot vid4.png",id:"with-padding"}
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



export default DotVid;
