import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/page.css';
import more from '../../images/HomeImages/more+.png'

const Homesecondrow = (props)=>{
        return (
        	<div className="row">
              <div className="thecard thirdrow">
                  <p className="p4">we focus on providing the most creative,innovative and profitable</p>
                  <p className="p5">ways for the business sector.we focus on providing the most</p>
                  <p className="p6">creative,innovative and profitable ways for the business sector.</p>
                  <img src={more} className="more"></img>
              </div>
          </div>
        	);
};
export default Homesecondrow;
