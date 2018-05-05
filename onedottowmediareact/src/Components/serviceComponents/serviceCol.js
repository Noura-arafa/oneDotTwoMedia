import React, { Component } from 'react';
import '../../../node_modules/@icon/font-awesome/font-awesome.css';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/service-contact-style.css'
import blueLogo from '../../images/blue.png'
import plus from '../../images/plus.png'

class ServiceCol extends Component {
  render() {
    return (
    <div className="col service_block text-center ">
        <img className="img-fluid blue-image" src={blueLogo}/>
        <p className="para">We focus on providing the most creative, innovative and profitable ways for the business sector. We foucs</p>
        <img className="plus-temp img-fluid" src={plus} />
    </div>
    
    );
  }
}

export default ServiceCol;