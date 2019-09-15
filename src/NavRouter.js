import React from 'react';
import { Link } from "react-router-dom";

class NavRouter extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projectList">Project list</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default NavRouter;