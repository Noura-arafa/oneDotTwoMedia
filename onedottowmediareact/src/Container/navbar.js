import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/footer-nav-style.css'
import logo from '../images/logo.png'


class Navbar extends Component {
	state = {

		clicked  : false,
	}
	show =e =>{
	// 	if(this.state.clicked = false){
	// 	document.getElementById("dropdown_con").style.display="block";
	// }


	};
  render() {
    return (

    	<div className="nav-bar">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<img src={logo}/>
				</div>
					<div className="col-md-6 text-right">
						<button className="search_btn"><i className="fa fa-search"></i></button>
						<div className ="dropdown">
						<button onClick ={e =>this.show(e)} className="bar_btn"><i className="fa fa-bars"></i>
						<div id="dropdown_con" className="dropdown-content">
							<a href="/">Home</a>
					    <a href="/DotAcademy">DotAcademy</a>
					    <a href="/DotAnalytics">DotAnalytics</a>
					    <a href="/DotDevServices">DotDevServices</a>
					    <a href="/DotMediaServices">DotMediaService</a>
					    <a href="/DotPress">DotPress</a>
					    <a href="/DotVid">DotVid</a>
							<a href="/contactUs">ContactUs</a>
					  </div>
						</button>
						</div>

					</div>
			</div>
		</div>
	</div>

    );
  }
}

export default Navbar;
