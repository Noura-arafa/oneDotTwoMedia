import React, { Component } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FirstRow from '../Components/About/FirstRow';
import SecondRow from '../Components/About/SecondRow';
import ThirdRow from '../Components/About/ThirdRow';
import Footer from '../Components/Footer/Footer';
import Home from './Home';
import AboutSlide from '../Components/About/AboutSlide';
import Service from './service';
import '../Components/Home/page';


//import SliderAbout from './SliderAbout';
import SliderAll from './SliderAll';
class About extends Component{

  render(){
    return(
      <div>
        <SliderAll />
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </div>
    );
  }


}

export default About;
