import React, { Component } from 'react';
import DotVid from './Container/DotVid.js'
import DotPress from './Container/DotPress.js'
import DotAcademy from './Container/DotAcademy.js'
import DotAnalytics from './Container/DotAnalytics.js'
import DotDevServices from './Container/DotDevServices.js'
import Page404 from './Container/Page404.js'
import DotMediaServices from './Container/DotMediaServices.js'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './Container/navbar';
import About from './Container/About';
import Footer from './Components/Footer/Footer'
import ContactUS from './Container/contactUs'




class App extends Component {
  render() {
    return (


      <Router>
      	<div>
      	<Navbar/>

         <Route exact path="/" render={() => <div className="App"> <About/> </div>}/>
      		<Route exact path="/404" render={() => <div className="App"> <Page404/> </div>}/>
      		<Route exact path="/DotAcademy" render={() => <div className="App">
      		 <DotAcademy/>  </div>}/>
      		<Route exact path="/DotAnalytics" render={() => <div className="App"> <DotAnalytics/> </div>}/>
      		<Route exact path="/DotDevServices" render={() => <div className="App"> <DotDevServices/> </div>}/>
      		<Route exact path="/DotMediaServices" render={() => <div className="App"> <DotMediaServices/> </div>}/>
      		<Route exact path="/DotPress" render={() => <div className="App"> <DotPress/> </div>}/>
      		<Route exact path="/DotVid" render={() => <div className="App"> <DotVid/> </div>}/>
          <Route exact path="/contactUs" render={() => <div className="App"> <ContactUS/> </div>}/>
<Footer />
        </div>

      </Router>

    );
  }
}

export default App;
