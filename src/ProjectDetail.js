import React, { Component } from 'react';

class ProjectDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.setState({
            projects: this.props.projects,
            id: this.props.location.id
        });
        try {
            this.setState({
                isLoading: true
            });
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(projects => projects.json())
            .then((projects) => {
                this.setState(() => ({ 
                    projects: projects
                }))
            })
        } catch (error) {
            console.log('Error fetching projects: ', error);
        } 
    }

    render() {
        const { projects }  = this.state || [];
        if (!projects) {
            return null;
        } 
        const project = projects.find( x => x.id === this.state.id);
        return (
            <div>
            { project
                ? 
                 <li key={project.id}>
                    ID: {project.id} 
                    Title:{project.title}
                </li> 
                : null
              }
            </div>
        );
    }
}

export default ProjectDetail;
