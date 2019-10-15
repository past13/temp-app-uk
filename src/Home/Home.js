import React, { Component } from 'react';
import './Home.css';
import image from './../images/wood.jpg';

import FetchData from './../Data/fetchData';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      file: null
    };

    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(event) {
  }

  handleChange (event) {
    this.setState({
      value: event.target.name
    })
  }

  handleUploadImage(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  handleChangeFile(event) {
    console.log(event);
  }

  // onSubmit = () => {
  //   this.props.history.push('/')
  // }

  render() {
    return (
      <>
      <FetchData />
      <div>
        aaa
        <input id="fileItem" type="file" onChange={this.handleChangeFile} />
      </div>
      <div>
        bbb
        <input type="file" onChange={this.handleUploadImage}/>
        <img src={this.state.file}/>
        <img src={image}/>
      </div>
      <form id="saveForm" method="POST">
        <textarea name="textarea" onChange={this.handleChange} />
        <input placeholder="name" type="name" onChange={this.handleChange}/>
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
      </>
    );
  }
}

export default Home;