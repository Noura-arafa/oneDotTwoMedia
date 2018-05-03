import React, { Component } from 'react';
import '../css/dot-style.css'
import Dot from './Dot.js'

class DotPress extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"dotpress",p:"DOTPRESS is a Web-based seamless Content Management Software (CMS) for online news portals, online magazines, online directories, or any other information resources. DOTPRESS is a comprehensive and holistic organization management tool. It comprises a set of significant, intelligent and sophisticated features that avail the end-user of following:",img:"../images/dot vid/dot vid1.png",id:"with-padding"},
		{content:"Effortless Website Content Management",p:"DOTPRESS mainly enables non-technical application users (news editors, Website administrators, and so forth) to manage content by accessing the back-end through front-end of the user interface. DOTPRESS covers popular traditional content publishing portlets such as news portals, calendars, classifieds, opinions/editorials, as well as new media publishing portlets such as; polls and URLs directory.",img:"..images/dot vid/dot vid2.png",id:"with-padding"},
		{content:"Minimized Website Administration Time",p:"Minimized Website Administration Time",img:"../images/dot vid/dot vid3.png",id:"with-padding"},
		{content:"Search Engine Optimization (SEO)",p:"Analyzing and measuring the ranking potential of your Website pages grants you insights into demographic information and other engagement metrics for individuals who have interacted with your Website. DOTPRESS gives you the tools to perform full analysis and evaluation on your Website content. This helps in defining the effective fixes for content advertising issues, and areas in need of improvement.",img:"../images/dot vid/dot vid4.png",id:"with-padding"},
		{content:"URL Shortening",p:"URL shortening is a technique on the World Wide Web in which a Uniform Resource Locator (URL) may be made substantially shorter in length and still direct to the required page.",img:"../images/dot vid/dot vid1.png",id:"with-padding"},
		{content:"Orginal URL",p:"DOTPRESS is a Web-based seamless Content Management Software (CMS) for online news portals, online magazines, online directories, or any other information resources. DOTPRESS is a comprehensive and holistic organization management tool. It comprises a set of significant, intelligent and sophisticated features that avail the end-user of following:",img:"../images/dot vid/dot vid1.png",id:"with-padding"},
		{content:"Internal Communication & Team Management Features",p:"DOTPRESS is an interface through which team members and leaders can communicate and manage their everyday tasks. The following is the set of tools DOTPRESS presents to its users, in order to cover all forms of internal communication between the team members, manage target engagement for special events, and task lists.",img:"../images/dot vid/dot vid1.png",id:"with-padding"},
		{content:"Email Server",p:"DOTPRESS is a Web-based seamless Content Management Software (CMS) for online news portals, online magazines, online directories, or any other information resources. DOTPRESS is a comprehensive and holistic organization management tool. It comprises a set of significant, intelligent and sophisticated features that avail the end-user of following:",img:"../images/dot vid/dot vid1.png",id:"with-padding"},
		{content:"Human Resources Management Features",p:"Now you can simply launch your portal in a matter of days or weeks, not months. Simply add graphics and content. Our skillful Web designers can apply unique visual designs to your site, while our experienced programmers can customize the product according to your specific business processes and requirements.",img:"../images/dot vid/dot vid1.png",id:"with-padding"},





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



export default DotPress;
