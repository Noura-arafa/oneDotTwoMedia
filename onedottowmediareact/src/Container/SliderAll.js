import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/about.css';
import '../css/page.css'
import backgroundimage from '../images/HomeImages/packground.png'
import Packground from '../Components/Home/packground'
import Homefirstrow from '../Components/Home/Homefirstrow'
import Homesecondrow from '../Components/Home/Homesecondrow'
import Homethirdrow from '../Components/Home/Homethirdrow'
import serviceButton from '../images/HomeImages/serviceButton.png'
import more from '../images/HomeImages/more+.png';
import about from '../images/about.png';
import home from '../images/home.png';
import BGHeader from '../images/AboutImages//BGHeader.jpg';
import about_homeButton from '../images/AboutImages/about_homeButton.png';
import about_serviceButton from '../images/AboutImages/about_serviceButton.png';
import openQuotion from '../images/AboutImages/openQuotion.png';
import closeQuotion from '../images/AboutImages/closeQuotion.png';
import '../css/service-contact-style.css'
import background from '../images/Services.jpg'
import Servicebox from '../Components/serviceComponents/serviceCol'
import Navbar from './navbar'
import ReactDOM from 'react-dom';
import aboutbutton from '../images/HomeImages/aboutbuttonx.png'
import backgroundandlogo from '../images/HomeImages/backgroundandlogo.png'
import videoicon from '../images/HomeImages/lastvideoicon.png'
import Home from './Home';
import AboutSlide from '../Components/About/AboutSlide'

class SliderAll extends Component{
	render(){
		return (
      <div>
        <div className="slide home_parent">
  			<Packground image={backgroundimage}/>
  			<div className="container-fluid row_nav">
          <div className="row secondrow">
                <div className="col-lg-4 firstcol">
                   <input type="image" src={aboutbutton} className="aboutbutton" onClick= {() => plusSlides(-1)} ></input>
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
            <div className="slideright">
                    <img src={serviceButton} className="servicesbutton" onClick= {() => plusSlides (1)} />
                </div>
                <div className="row">
                    <div className="thecard thirdrow">
                        <p className="p4">we focus on providing the most creative,innovative and profitable</p>
                        <p className="p5">ways for the business sector.we focus on providing the most</p>
                        <p className="p6">creative,innovative and profitable ways for the business sector.</p>
                        <img src={more} className="more"></img>
                    </div>
                </div>
  			</div>
  			</div>

      {/*Service*/}
        <div className="slide showSl" id="serviceHidden">
          <div className="service_parent">
           <img className= "img-fluid" src={background}/>
           <div className="container">
             <img className="about_img" src={about} onClick={() => plusSlides(1)} />
             <img className="home_img" src={home} onClick={() => plusSlides(-1)} />
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
        </div>
        {/*About*/}
        <div className="slide showSl" id="abouthidden"  >
        <div className="header_parent ">
          <img src={BGHeader} className="img-fluid" />
          <h1 className="about">About</h1>
          <img src={about_homeButton} className="img-fluid leftButton"  onClick={() => plusSlides(1)} />
          <img src={about_serviceButton} className="img-fluid rightButton" onClick = {() => plusSlides (-1)}/>
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
       </div>
         </div>

			);
	}
}

  var slideIndex=1;
  document.innerHTML=""
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
         {/*bay5fy kol aly ablyh*/}
      slides[i].style.display = "none";
  }

    {/*dah aly byzhrny*/}
     slides[slideIndex-1].style.display = "block";
}
function gotoStyle(){
    document.getElementById("whiteSlider").style.backgroundColor ='white'
}
export default SliderAll;
