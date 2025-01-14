import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount(){
      axios
        .get("http://localhost:3333/smurfs")
        .then(response => this.setState({smurfs: response.data}))
        .catch(error => console.log(error));
  }

  // Notice what your map function is looping over and returning inside of Smurfs.

  // You'll need to make sure you have the right properties on state and pass them down to props.
  
  
  render() {
        const { smurfs } = this.state
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />

        <Route path="/" exact render={(props) => <Smurfs {...props} smurfs={smurfs} />} />


      </div>
    );
  }
}

export default App;
