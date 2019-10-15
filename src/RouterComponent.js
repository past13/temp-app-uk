import React, { Component, Fragment } from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'; 
import Home from './Home/Home';
import Category from './Category';
import ProjectDetail from './ProjectDetail';

class RouterComponent extends Component {

  state ={}
  
  async componentDidMount() {
    const projects = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
    this.setState({ projects })
  }

  render() {
    const { projects } = this.state;

    return (
      <BrowserRouter>
      <Fragment>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/projectdetail">Project Detail</Link>
          </li>
        </ul>

        <hr/>
        <Switch>
          <Route exact path="/" render={() => <Home />}/>

          <Route path="/categories" render={
            props => <Category {...props} projects={projects} />
          } />
          <Route path="/project" render={
            props => <ProjectDetail {...props} projects={projects} />
          } />
          {/* <Route path='/project/:id' component={ProjectDetail} /> */}
          <Route render={() => <div>Not Found</div>} />
        </Switch>
      </Fragment>
      </BrowserRouter>
    );
  }
}

export default RouterComponent;