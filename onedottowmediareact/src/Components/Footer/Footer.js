import React, { Component } from 'react';

import '../../css/footer-nav-style.css';
import top from '../../images/AboutImages/top.png';
import logo from '../../images/AboutImages/logo.png';


const footer = () =>{
  return(
    <div>
    <div className="footer">
        <img src={top} onClick={() => topFunction()} id= "topBtn" className= "top-btn-footer" title="Go to top"/>

    <div className="container width-footer">
      <div className="container-fluid">
        <div className="row text-center row-footer">
          <div className="col-md-3 logo-footer">
            <img className="img-logo-footer" src={logo} />
          </div>
          <div className="col-md-2 home-btn-footer text-center">
             <a href="">HOME</a>
          </div>
          <div className="col-md-3">

            <address>
               <strong>Contact us</strong><br /> 795 Folsom Ave, Suite 600<br /> San Francisco, CA 94107<br />
               <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
            <a className="fa fa-facebook"></a>
            <a className="fa fa-twitter"></a>
            <a className="fa fa-instagram"></a>
            <a className="fa fa-google"></a>
            <a className="fa fa-youtube"></a>

          </div>
          <div className="col-md-4">

            <address>
               <strong>Address</strong><br /> 795 Folsom Ave, Suite 600<br /> San Francisco, CA 94107<br />
               <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
          </div>
        </div>
        <div className="row text-c row-footer">
          <div className="col-md-3">
             <small>&copy; Copyright 2058, Example Corporation</small>
          </div>
          <div className="col-md-9 about-us-footer">
            <div className="about-us-with-margin-footer">
              <h2>
              About us
            </h2>
            <p className="text-cn about-us-p-footer">
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
            </p>
            </div>

          </div>
        </div>
        </div>
  </div>
</div>
    </div>
  );
};



//When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default footer;
