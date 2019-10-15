import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'; 
import ProjectDetail from './ProjectDetail';

class Detail extends Component {
  
  render() {
    const projects = this.props.projects || [];
    return (
      <div>
      <ul>
      {projects.map( (item) => (
        <li key={item.id}>
          <Link to={{ pathname: '/projects/' + item.id}}>
            {item.id}
          </Link>
        </li>
      ))}
      </ul>
      <Route path="/projects/:id" component={ProjectDetail} />
    </div>
    )
  }
}

export default Detail;
