import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/Header.jsx';

// RELATED PRODUCTS
import RelatedProductsWidget from './components/RelatedProducts/RelatedProductsWidget.jsx';
import RelatedList from './components/RelatedProducts/relatedList.jsx';

// RATINGS AND REVIEWS
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import Ratings from './components/RatingsAndReviews/Ratings/Ratings.jsx';
import Reviews from './components/RatingsAndReviews/Reviews/Reviews.jsx';

// OVERVIEW

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
        <RelatedProductsWidget />

        <RatingsAndReviews
          ratingsLeft={<Ratings />}
          reviewsRight={<Reviews />} />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));