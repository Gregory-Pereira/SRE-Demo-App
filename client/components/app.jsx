import React from 'react';
import Axios from 'axios';

class App extends React.Component { 
  constructor(props){
    super(props);
    this.inflate = this.inflate.bind(this);
  }
  inflate() {
    Axios.post('/memory')
      .catch(function(error) {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        <h1> welcome to the SRE Demo </h1>
        <button id = "break" onClick={this.inflate}> Break the app! </button>
      </div>
    )
  }
}

export default App;
