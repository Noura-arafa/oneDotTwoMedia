import React, { Component } from 'react';

import '../../css/about.css';
import Sl from '../Home/page.js';
import BGHeader from '../../images/AboutImages//BGHeader.jpg';
import about_homeButton from '../../images/AboutImages/about_homeButton.png';
import about_serviceButton from '../../images/AboutImages/about_serviceButton.png';
import openQuotion from '../../images/AboutImages/openQuotion.png';
import closeQuotion from '../../images/AboutImages/closeQuotion.png';

const aboutSl = () => {
  return(
     <div className="header_parent showSl">
       <img src={BGHeader} className="img-fluid" />
       <h1 className="about">About</h1>
       <img src={about_homeButton} className="img-fluid leftButton"  />
       <img src={about_serviceButton} className="img-fluid rightButton" />
       <div className="header_whiteBlock">
         <p className="para_white">Make change. Work with quality, experience, and innovative digital media and platforms professionals</p>
       </div>
       <img src={openQuotion} className="img-fluid openQuotion" />
       <img src={closeQuotion} className="img-fluid closeQuotion" />
       <div className="header_redBlock">
         <p className="para_red">1.2Media is the parent company of dotdev, dotacademy and dotmedia. We focus on providing the most creative, innovative and profitable ways for the business sector and individuals in various fields, in extremely high quality, timely, accurate, and tailor-made according to customer requirements to enable them to make the right decisions, raise their capabilities, improve their performance and coped with technology evolution</p>
       </div>
       <div className="gray_block text-center">
         <h1 className="para_grayBlock">1.2Media Companies</h1>
       </div>
      </div>

  );

};

export default aboutSl;
