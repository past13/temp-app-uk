import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

import { Container, Row, Col } from 'react-bootstrap';

class NavBar extends Component {
   
    render() {
        return (
        <nav id="navBar">
            <Container>
                <Row>
                    <Col>
                    <div>
                        <Link to="/home">LOGO</Link>
                    </div>
                    </Col>
                    <Col xs={4}></Col>
                    <Col>
                        <Link to="/categories">Your list</Link>
                    </Col>
                    <Col>Log out</Col>
                    <Col>image</Col>
                    <Col>test@gmail.com</Col>
                </Row>
            </Container>
        </nav>
        )
    }
}

export default NavBar;

 
