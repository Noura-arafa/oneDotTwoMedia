import React, { Component } from 'react';
import DotVid from './Container/DotVid.js'
import Page404 from './Container/Page404.js'
import './App.css';
import './css/404-style.css'



class App extends Component {
  render() {
    return (
      <div className="App">
        <DotVid />
      </div>
    );
  }
}

export default App;
