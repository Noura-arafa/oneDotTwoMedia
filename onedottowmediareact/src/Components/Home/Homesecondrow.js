import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/page.css';
import serviceButton from '../../images/HomeImages/serviceButton.png'
import Sl from './page.js';
const Homesecondrow=(props)=>{
	return(
		<div className="slideright">
                  <img src={serviceButton} className="servicesbutton"  />
        </div>
		);
};

export default Homesecondrow;
