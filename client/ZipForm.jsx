import React from 'react';


class ZipForm extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   zipcode: props.zip
    // }
  }
  const clickHandler = (event) => {
    const value = event.target
    console.log(value)
    // event.preventDefault()
    // this.props.zipfunc(document.getElementById("zipInput").value)
  }

  render(){
    return (
      <div id="zip-form">
        <input id="zipInput" placeholder='Enter your Zip Code' />
        <button onClick={clickHandler}>Go</button>
      </div>
    )
  }
}

export default ZipForm;
