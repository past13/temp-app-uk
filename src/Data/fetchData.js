import React, { Component } from 'react';

class FetchData extends Component {
    state = {};
    componentDidMount() {
        fetch('http://localhost:5000/projects/')
        .then(res => {
            return res.json()
         })
        .then(projects => { 
            this.setState({ projects })
         });
    }

  render() {
    const projects = this.state.projects || [];
    console.log(projects)
    return (
      <div>
      <ul>
     
      </ul>
    </div>
    )
  }
}

export default FetchData;
