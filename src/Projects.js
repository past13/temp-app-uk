import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

import ProjectDetail from './ProjectByCategory';

class Projects extends Component {

  render() {
    const projects = this.props.projects || [];
    const url = this.props.match.url;

    return (
      <div>
        Projects
        <ul>
        {projects.map( (item) => (
          <li key={item.id}>
            <Link to={{ 
                pathname: `${url}/` + item.id,
                id: item.id
              }}>
              {item.id}. {item.title}
            </Link>
          </li>
          ))}
        </ul>
        <Route path={`${url}/:id`} render={
          (id) => <ProjectDetail {...projects.find(project => project.id === id)}/>
        }/>
      </div>
    )
  }
}

export default Projects;
