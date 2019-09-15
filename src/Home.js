import React, { Component } from 'react';
import NavRouter from './NavRouter';

class Home extends Component {
  render() {
    return (
        <div>
          <NavRouter />
          <div>Home</div>
        </div>
    );
  }
}

export default Home;