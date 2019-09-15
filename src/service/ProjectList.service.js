import React from 'react';

class ProjectListService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: []
    };
    this.numbers = [1, 2, 3, 4, 5];
  }

  async componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({ list: data, loading: false});
      console.log("state", this.state.list)
    })
    .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.list);
      return (
        <div>
          {this.state.list.map((item, index) => 
            <div key={index}>
              <div>{item.id}</div>
              <div>{item.title}</div>
            </div>
          )};
        </div>
      );
  }
}

export default ProjectListService;
