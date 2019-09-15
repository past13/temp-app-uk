import React from 'react';
import NavRouter from './NavRouter';
import ProjectListService from './service/ProjectList.service';

class ProjectList extends React.Component {
  render() {
    return (
        <div>
          <NavRouter />
          <ProjectListService />
        </div>
    );
  }
}

export default ProjectList;