import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';

class NavRouter extends React.Component {
  render() {
    return (
      <Router>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projectList">Project List</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
        <Route exact path="/" component={Home} />
        <Route path="/projectList" component={ProjectList} />
        <Route path="/about" component={About} />
      </div>
    </Router>
    );
  }
}

export default NavRouter;