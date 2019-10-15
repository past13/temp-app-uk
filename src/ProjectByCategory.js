import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

class ProjectByCategory extends Component {

render() {
    const projects = Object.values(this.props) || [];
    return (
        <div>
            ProjectByCategory
            <ul>
                {projects.map((item) => (
                    <li key={item.id}>
                        <Link to={{ 
                            pathname: '/project/' + item.id,
                            id: item.id
                        }}>
                            {item.title}
                        </Link>
                    </li> 
                ))}
            </ul>
            <Route path={`/project/:id`} render={
                (props) => <ProjectDetail {...projects.find(project => project.userId === props.location.id)}/>
            }/>
        </div>
    );
  }
}

export default ProjectByCategory;