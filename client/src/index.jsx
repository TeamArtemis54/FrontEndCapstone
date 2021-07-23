import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='main-container'>
        <h1>Team Artemis</h1>
      </div>
    )
  }
};
ReactDom.render(<App />, document.getElementById('app'));