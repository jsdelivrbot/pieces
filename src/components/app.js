import React, { Component } from 'react';
import { subscribeToTimer } from '../api';

export default class App extends Component {
  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }
  state = {
    timestamp: ''
  };
  render() {
    return (
      <div className="App">
        <p className="App-intro">
        This is the time of the values: {this.state.timestamp.date}
        </p>
      </div>
    );
  }
}
