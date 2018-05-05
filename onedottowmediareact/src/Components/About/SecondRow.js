import React, { Component } from 'react';

import '../../css/about.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/AboutImages/logo.png';
import image3 from '../../images/AboutImages/image3.jpg';

const secondRow = () => {
  return(
    <div>
      <div className="container-fluid">
          <div className="row rectangle">
              {/* <!-- div col into two cols two--> */}
              {/* <!-- first col --> */}
              <div className="col-6 text-center row2_background padd_row2">
                  <img src={logo} id="logo_row2" className="img-fluid Media_logo" />
                  <p id="dotmedia">dotmedia</p>
                  <p id="Video_production">Video production</p>
                  <p className="para_row2">We dont usually stick to the easy way of doing things. We prefer the Smart way,And <br/> thats
                  how we show pride in craftsmanship.<br/>A one-stop-shop rental house, which enables people and businesses to rent film
                  and TV production equipment including cameras, lenses and lighting.</p>
                  <br/>
                  <button className="button_visit_the_website " type="button">Visit the website</button>
              </div>
              {/* <!-- second col--> */}
              <div className="col-6 padd_row2">
                  <img src={image3} className="img-fluid " />
              </div>

          </div>

        </div>
    </div>
  );
};

export default secondRow;
