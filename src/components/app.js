import React, { Component } from 'react';
import { subscribeToTimer } from '../api';
import Monitor from './monitor';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timestamp: ''
    }
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }
  render() {
    const timestamp = this.state.timestamp;
    return (
      <div className="m-t-2">
        {Monitor(timestamp)}
      </div>
    );
  }
}
