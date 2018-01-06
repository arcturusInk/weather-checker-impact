import React from 'react';


class ZipForm extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   zipcode: props.zip
    // }
  }

  render(){
    return (
      <div id="zip-form">
        <input id="zipInput" placeholder='Enter your Zip Code' />
        <button onClick={(event) => {
            event.preventDefault()
            this.props.zipfunc(document.getElementById("zipInput").value)
          }}>Go</button>
      </div>
    )
  }
}

export default ZipForm;
