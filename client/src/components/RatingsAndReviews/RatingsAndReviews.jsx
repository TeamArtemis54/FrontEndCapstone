import React, { Component } from 'react';

// app components
import Reviews from './Reviews/Reviews.jsx';

// axios
import axios from 'axios';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props);
    const { reviewsData } = this.props;
    this.state = {
      reviewsData: []
    }
  }

  componentDidMount () {
    axios.get('/api/reviews/17071')
    .then((response) => {
      this.setState({
        reviewsData: response.data.results
      })
    })
    .catch((error) => {
      console.error(`ERROR ::: ${error}`);
    });

  }

  render() {
    const {reviewsData} = this.state;

    return (
      <div className='ratings_and_reviews'>
        <h3 className='ratings_and_reviews__title'>Ratings and Reviews</h3>
        <div className='ratings_and_reviews__ratings-left'>
          {/* ratingsLeft */}
        </div>
        <div className='ratings_and_reviews__reviews-right'>
        {/* reviewsRight */}
        <Reviews
          reviewsData={reviewsData} />
        </div>
      </div>
    )
  }
}

export default RatingsAndReviews;