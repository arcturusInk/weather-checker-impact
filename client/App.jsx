import React from 'react';
import ZipForm from './ZipForm.jsx'

const apikey = "63ff46bc047c86f3"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      zipcode: '10011'
    }
    this.updateZip = this.updateZip.bind(this)
  }

  //Write a method that takes a zipcode, and updates the state with that zipcode. Don’t forget to bind this method to the App class!
  updateZip(zip) {
    this.setState({zipcode: zip})
  }
  render() {
    return (
      <div className="container">
        <h1>What's the weather?</h1>
        <ZipForm zipfunc = {this.updateZip}/>
          <h1> {this.state.zipcode}</h1>
      </div>

    )
  }
}

export default App;
