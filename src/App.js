import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'; 

import NavBar from './Layout/NavBar';
import Routes from './Layout/Routes';
import Footer from './Layout/Footer';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Fragment>
        
        <NavBar />
        
        <Routes />
        
        <Footer /> 
      </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;