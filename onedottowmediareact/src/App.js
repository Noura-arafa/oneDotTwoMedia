import React, { Component } from 'react';
import DotVid from './Container/DotVid.js'
import DotPress from './Container/DotPress.js'
import DotAcademy from './Container/DotAcademy.js'
import DotAnalytics from './Container/DotAnalytics.js'
import DotDevServices from './Container/DotDevServices.js'
import Page404 from './Container/Page404.js'
import DotMediaServices from './Container/DotMediaServices.js'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Page404 />
      </div>
    );
  }
}

export default App;
