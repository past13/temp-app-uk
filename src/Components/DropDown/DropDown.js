import React, { Component } from 'react';

import { Dropdown } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

import CustomMenu  from './CustomMenu';
import CustomToggle from './CustomToggle';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.testHandle = this.testHandle.bind(this);

        this.state = {
            locations: [],
            targetLocation: ""
        }
    }
    

    componentDidMount() {
        const locations = this.props.locations || [];
        console.log(locations);

        if (locations.length !== 0) {
            this.setState({ locations: locations })
        }
    }
    
    testHandle(e) {
        this.setState({ targetLocation: e.target.text })
    }

    render() {
        const locations = this.props.locations || [];
        if (locations.length === 0) {
            return <p>Sorry, the list is empty.</p>;
          } else {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <Button id="ddllocation" type="submit">aaa</Button>
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                    {locations.map(item => (
                        <Dropdown.Item onClick={this.testHandle} key={item._id} eventKey={item._id}>{item.city}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            )
        }
    }
}

export default DropDown;