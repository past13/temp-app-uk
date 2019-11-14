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
    return (
      <div>
      <ul>
      </ul>
    </div>
    )
  }
}

export default FetchData;
