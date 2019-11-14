import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import { Container, Row, Col } from 'react-bootstrap';

import './Routes.css';

import Home from '../Home/Home';
import Main from '../Home/Main';
import Category from '../Category';
import ProjectDetail from '../ProjectDetail';
import DetailPage from '../Pages/DetailPage';

class Routes extends Component {
    state ={}

    async componentDidMount() {
        const projects = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
        this.setState({ projects })
    }

    render() {
        const { projects } = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                    <Switch>
                        <Route exact path="/" render={() => <Home />}/>
                        
                        <Route path="/main" render={() => <Main />}/>
                        
                        <Route path="/details" render={() => <DetailPage />} />
                        
                        <Route path="/categories" render={
                            props => <Category {...props} projects={projects} />
                        } />
                        <Route path="/project" render={
                            props => <ProjectDetail {...props} projects={projects} />
                        } />
                        <Route path='/project/:id' component={ProjectDetail} />
                        <Route render={() => <div>Not Found</div>} />
                    </Switch>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Routes;

