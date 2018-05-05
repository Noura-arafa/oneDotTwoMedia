import React, { Component } from 'react';

import '../../css/about.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/AboutImages/logo.png';
import imageCopy from '../../images/AboutImages/imageCopy.jpg';

const thirdRow = () => {
  return(
    <div className="container">
      <div className="row rectangle">
        <div className="col-6">
          <img src={imageCopy} className="img-fluid"/>
        </div>
        <div className="col-5 text-center offset-1">
          <img src={logo} className="img-fluid Media_logo"/>
          <p id="dotmedia">dotmedia</p>
          <p id="Video_production">Training academy</p>
          <p className="para_row3">Our continuous development is our ladder to excellence and achieving the maximum productivity A training academy that provide courses that enhances the experience across most of the media fields from concepts to practical operation, which is gainful for the media workers, governmental sectors and individuals whom are interested in the media field.</p>
          <br/>
          <button className="button_visit_the_website " type="button">Visit the website</button>
        </div>
      </div>
    </div>

  );
};

export default thirdRow;
