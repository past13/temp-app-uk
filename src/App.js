import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';

const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/projectList',
  component: ProjectList,
}, {
  path: '/about',
  component: About,
}];

class App extends React.Component {
  render() {
    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (
        <BrowserRouter>
          {routeComponents}
        </BrowserRouter>
    );
  }
}

export default App;
