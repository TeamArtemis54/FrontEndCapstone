import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  constructor () {
    super();
    this.state = {};
  }


  render () {

    return (
      <h1>Team Artemis</h1>
    )
  }
};
ReactDom.render(<App />, document.getElementById('app'));