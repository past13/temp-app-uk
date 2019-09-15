import React from 'react';

import ProjectListService from './service/ProjectList.service';

class ProjectList extends React.Component {
  render() {
    return (
        <div>
          <ProjectListService />
        </div>
    );
  }
}

export default ProjectList;