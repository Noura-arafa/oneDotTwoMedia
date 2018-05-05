import React, { Component } from 'react';
import '../css/dot-style.css'
import Dot from './Dot.js'
import img1 from '../images/red-white rectangle.png'
import img2 from '../images/threeDots-red.png'
import img3 from '../images/dot press/dot press4.png'

class DotPress extends Component {

	constructor(props) {
	    super(props);
	}

	state = {
		headlines : [
		{content:"dotpress", p:"DOTPRESS is a Web-based seamless Content Management Software (CMS) for online news portals, online magazines, online directories, or any other information resources. DOTPRESS is a comprehensive and holistic organization management tool. It comprises a set of significant, intelligent and sophisticated features that avail the end-user of following:",folder:"dot press",img:"dot press1",id:"with-padding"},
		{content:"Effortless Website Content Management",p:"DOTPRESS mainly enables non-technical application users news editors, Website administrators, and so forth) to manage content by accessing the back-end through front-end of the user interface. DOTPRESS covers popular traditional content publishing portlets such as news portals, calendars, classNameNameifieds, opinions/editorials, as well as new media publishing portlets such as; polls and URLs directory.",folder:"dot press",img:"dot press2",id:"with-padding"},
		{content:"Minimized Website Administration Time",p:"DOTPRESS' handiness lies in its focus on minimizing Website administration time, labor, and cost. DOTPRESS users basically require no web page design, HTML, or programming skills to manage content. Additionally, DOTPRESS provides content control tools that enable scheduling for automatic content display or removal, and reviewing of content for approval or prohibition.",folder:"dot press",img:"dot press3",id:"with-padding"},
		{content:"Internal Communication & Team Management Features",p:"DOTPRESS is an interface through which team members and leaders can communicate and manage their everyday tasks. The following is the set of tools DOTPRESS presents to its users, in order to cover all forms of internal communication between the team members, manage target engagement for special events, and task lists.",folder:"dot press",img:"dot press6",id:"with-padding"},
		{content:"Email Server",p:"DOTPRESS is a Web-based seamless Content Management Software (CMS) for online news portals, online magazines, online directories, or any other information resources. DOTPRESS is a comprehensive and holistic organization management tool. It comprises a set of significant, intelligent and sophisticated features that avail the end-user of following:",folder:"dot press",img:"dot press7",id:"with-padding"},
		{content:"Human Resources Management Features",p:"Now you can simply launch your portal in a matter of days or weeks, not months. Simply add graphics and content. Our skillful Web designers can apply unique visual designs to your site, while our experienced programmers can customize the product according to your specific business processes and requirements.",folder:"dot press",img:"dot press8",id:"with-padding"}

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
		    {rows.push(<Dot headline={this.state.headlines[i].content} paragraph={this.state.headlines[i].p} folder={this.state.headlines[i].folder} img={this.state.headlines[i].img} id={this.state.headlines[i].id} idx={i}/>);}
		}
		
	    return (
    		<div className="content">
				<div className="container-fluid">
					
					{rows[0]}
					{rows[1]}


					<div className="row row-striped" id="with-padding">
				<div className="col-md-6">
					<div className="row">
						<div className="col-md-12">
							<img className="threeDots" src={img2}/>
							<h1 className="h1-dot"><b>Search Engine Optimization (SEO)</b></h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<p className="paragraph-dot">Analyzing and measuring the ranking potential of your Website pages grants you insights into demographic information and other engagement metrics for individuals who have interacted with your Website. DOTPRESS gives you the tools to perform full analysis and evaluation on your Website content. This helps in defining the effective fixes for content advertising issues, and areas in need of improvement.</p>


							<div className="row">
								<div className="col-md-6">
									<p className="paragraphRec">Analyzing and measuring the ranking potential of your Website pages grants you insights into demographic information and other engagement metrics for individuals who have interacted with your Website. DOTPRESS gives you the tools to perform full analysis and evaluation on your Website content. This helps in defining the effective fixes for content advertising issues, and areas in need of improvement.</p>
								</div>

								<div className="col-md-6">
									<p className="paragraphRec">Analyzing and measuring the ranking potential of your Website pages grants you insights into demographic information and other engagement metrics for individuals who have interacted with your Website. DOTPRESS gives you the tools to perform full analysis and evaluation on your Website content. This helps in defining the effective fixes for content advertising issues, and areas in need of improvement.</p>
								</div>
							</div>



							<img className="paragraphRectangle" src={img1}/>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<img id="image" className="img-responsive" src={img3}/>
				</div>
			</div>



					{rows[2]}


					<div className="row row-striped" id="with-padding">
						<div className="col-md-6">
							<div className="row">
								<div className="col-md-12">
									<img className="threeDots" src={img2}/>
									<h1 className="h1-dot"><b>URL Shortening</b></h1>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<p className="paragraph-dot">URL shortening is a technique on the World Wide Web in which a Uniform Resource Locator (URL) may be made substantially shorter in length and still direct to the required page.</p>
									<img className="paragraphRectangle" src={img1}/>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<img id="image" className="img-responsive"/>
							<div className="row row-striped" id="with-padding">
								<div className="col-md-12">
									<div className="URLbackground">
										<div className="row">
											<div className="col-md-12 URLhead">
												<img className="threeDots" src={img2}/>
												<h1 className="h1"><b>Orginal URL</b></h1>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12 URLlink">
												<p className="paragraph-dot">http://dotemirates.com/ar/details/1278681?form=dot</p>
											</div>
										</div>
									</div>

									<div className="URLbackground">
										<div className="row">
											<div className="col-md-12 URLhead">
												<img className="threeDots" src={img2}/>
												<h1 className="h1"><b>Shortened URL</b></h1>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12 URLlink">
												<p className="paragraph-dot">http://dotu.ae/nHTL7</p>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>



					{rows[3]}
					{rows[4]}
					{rows[5]}
					{rows[6]}
				
					
				</div>
			</div>
	    );

	}
}



export default DotPress;
