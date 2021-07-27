import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/Header.jsx';

// OVERVIEW

// RELATED PRODUCTS
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';

// RATINGS AND REVIEWS
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render () {
    return (
      <div>
        <Header />
        <h1>Team Artemis</h1>

        {/* PLACEHOLDER FOR OVERVIEW COMPONENT */}

        <RelatedProducts />

        <RatingsAndReviews />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));