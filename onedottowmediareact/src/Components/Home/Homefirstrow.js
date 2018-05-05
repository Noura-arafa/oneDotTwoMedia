import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/page.css';
import aboutbutton from '../../images/HomeImages/aboutbuttonx.png'
import backgroundandlogo from '../../images/HomeImages/backgroundandlogo.png'
import videoicon from '../../images/HomeImages/lastvideoicon.png'
import serviceButton from '../../images/HomeImages/serviceButton.png'
import './page.js';
const Homefirstrow=(props)=>{
    return(
    	<div className="row secondrow">
            <div className="col-lg-4 firstcol">
               <input type="image" src={aboutbutton} className="aboutbutton"></input>
            </div>
            <div className="col-lg-4 secondcol">
                <img src={backgroundandlogo} className="backgroundlogo" ></img>
                 <div className="row">
                   <div className="col-lg-12">
                      <div className="theparagraph1">
                        <p className="p1">we focus on providing the most creative,</p>
                        <p className="p2">innovative and profitable ways for the </p>
                        <p className="p3">bussinesssector</p>
                      </div>
                   </div>
                </div>
            </div>
            <div className="col-lg-3 offset-1">
              <input type="image" src={videoicon} className="videoicon"></input>
            </div>
        </div>
    	);
	};

export default Homefirstrow;
