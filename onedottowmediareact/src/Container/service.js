import React, { Component } from 'react';
import '../../node_modules/@icon/font-awesome/font-awesome.css';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/service-contact-style.css'
import background from '../images/Services.jpg'
import Servicebox from '../Components/serviceComponents/serviceCol'
import Navbar from './navbar'



class Service extends Component {
  render() {
    return (

    <div className="service_parent">
     <img className= "img-fluid" src={background}/>
     <div className="container">
	     <div className="service_child">
		     <div className="row first-row text-center">
		     <h1 className="h_one"> Services </h1>
	     	</div>
	     	<div className="row service_row">
		     	<Servicebox/>
		     	<Servicebox/>
		     	<Servicebox/>
		    </div>
	     </div>

     </div>
    </div>


    );
  }
}

export default Service;
