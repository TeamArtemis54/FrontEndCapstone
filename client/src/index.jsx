import React from 'react';
import ReactDOM from 'react-dom';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';

class App extends React.Component {
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

ReactDOM.render(<App />, document.getElementById('app'));