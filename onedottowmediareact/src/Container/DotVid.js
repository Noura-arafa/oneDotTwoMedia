import React, { Component } from 'react';
import '../css/dot-style.css'
import Dot from './Dot.js'
import Scroll from './ScrollDots.js';
import '../css/div-nav-style.css';

class DotVid extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"dotvid",p:"Increase visibility of your business.build customer loyalty and expand your customer base.",folder:"dot vid",img:"dot vid1",id:"with-padding"},
		{content:"Powerful Distribution and Built-In SEO",p:"Powerful Distribution and Built-In SEO Our powerful distribution and syndication service make it easy to reach your audience across the web - on aggergator sites. social network search engines and across global markets. Powerful SEO tools bring the audience straight to your doorstep.",folder:"dot vid", img:"dot vid2",id:"with-padding"},
		{content:"Beautiful Video Experience Unlocking Revenue on Every Screen",p:"Beautiful Video Experience Unlocking Revenue on Every Screen Broadcasters, Publishers, Distributors and Content Owners are Using DOTVID Solutions to Engage and Monetize Audience Quickly and Cost-Effectively.",folder:"dot vid",img:"dot vid3",id:"with-padding"},
		{content:"Subscription Video on Demand",p:"Subscription Video on Demand Generate a recurring revenue stream by packaging and managing premium video content using DOTVID's elite transcoding, metadata management and content security capabilities. Drive ROI while delighting audinces whether they're on the couch or on the go.",folder:"dot vid",img:"dot vid4",id:"with-padding"}
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



export default DotVid;
