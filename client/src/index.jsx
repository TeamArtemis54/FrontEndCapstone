import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Temp from './components/Temp.jsx';

class App extends Component {
  constructor () {
    super();
    this.state = {};
  }


  render () {

    return (
      <div className='main-container'>
        <h1>Team Artemis</h1>
        <Temp />
      </div>
    )
  }
};
ReactDom.render(<App />, document.getElementById('app'));