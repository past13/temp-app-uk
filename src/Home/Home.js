import React, { Component } from 'react';
import DropDown from '../Components/DropDown/DropDown';
import SubmitButton from './../Components/SubmitButton';

class Home extends Component {
  
  state = {
    locations: []
  }

  async componentDidMount() {
    const locations = await (await fetch('http://localhost:5000/locations/')).json()
    const materials = await (await fetch('http://localhost:5000/materials/')).json()

    this.setState({ 
        locations: locations,
        materials: materials
    })
  }

  render() {
      const locations = this.state.locations || [];
      return (
        <>
          <header>Header</header>
          <main>
            <DropDown locations={locations}/>
            <SubmitButton />
          </main>
        </>
        )
    }
}

export default Home;
