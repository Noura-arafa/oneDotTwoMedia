import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/page.css'
import backgroundimage from '../images/HomeImages/packground.png'
import Packground from '../Components/Home/packground'
import Homefirstrow from '../Components/Home/Homefirstrow'
import Homesecondrow from '../Components/Home/Homesecondrow'
import Homethirdrow from '../Components/Home/Homethirdrow'
class Home extends Component{
	render(){
		return (
			<div className="slide home_parent">
			<Packground image={backgroundimage}/>
			<div class="container-fluid row_nav">
		    <Homefirstrow />
				<Homesecondrow />
				<Homethirdrow />
			</div>
			</div>
			);
	}
}


export default Home;
