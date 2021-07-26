import React from 'react';
import ReactDOM from 'react-dom';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import Ratings from './components/RatingsAndReviews/Ratings/Ratings.jsx';
import Reviews from './components/RatingsAndReviews/Reviews/Reviews.jsx';

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

        <RatingsAndReviews
          ratingsLeft={<Ratings />}
          reviewsRight={<Reviews />} />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));