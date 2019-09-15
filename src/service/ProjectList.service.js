import React from 'react';

class ProjectListService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      list: null
    };
  }

  async componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({ list: data});
      console.log("state", this.state.list)
    })
    .catch(error => console.log(error))
  }

  render() {
      return (
        <div>
          {
            this.state.list.map(((project, index) =>
              <div>
                <div>
                  aaa
                </div>
              </div>
            ))
          }
        </div>
      );
  }
}

export default ProjectListService;

{/* <div><pre>{JSON.stringify(this.state.list, null, 2) }</pre></div> */}
