import React, { Component } from 'react';

import '../../css/about.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image2Copy from '../../images/AboutImages/image2Copy.jpg';
import logoblue from '../../images/AboutImages/logoblue.png'


const firstRow = () => {
  return(
      <div>
          <div className="rectangle"></div>
          {/*<!-- page rest --> */}
          <div className="container">
             {/* <!-- first row --> */}
             <div className="row rectangle">
                 {/* <!-- div row into two cols --> */}
                 {/* <!-- first col --> */}
                 <div className="col-6">
                   <img src={image2Copy} className="img-fluid" id="row1_image" />
                 </div>
                 {/* <!-- second col --> */}
                 <div className="col text-center offset-1">
                     <img src={logoblue} className="img-fluid blue_logo" />
                     <p id= "Software_company"> Software company</p>
                     <p id="pioneering"> A pioneering, innovation-driven software solutions and service company that offers e-commerce solutions, software development, systems architecture and design, mobile solutions and hosting solutions. We use a combination of smart innovative process and talented professionals to deliver high performance solutions and technical objectives  </p>
                     <br/>
                     <button className="button_visit_the_website " type="button">Visit the website</button>
                 </div>
             </div>
          </div>
      </div>
  );
};

export default firstRow;
