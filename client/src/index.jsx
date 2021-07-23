import React, { Component } from 'react';
import ReactDom from 'react-dom';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render () {
    return (
      <div>
        <h1>Team Artemis</h1>
        <RelatedProducts />
      </div>
    )
  }
};

ReactDom.render(<App />, document.getElementById('app'));