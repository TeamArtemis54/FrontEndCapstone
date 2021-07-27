import React, { Component } from 'react';

// axios
import axios from 'axios';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: []
    }
  }

  componentDidMount () {
    axios.get('/api/reviews/17071', {
      'Authorization': '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'
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(`ERROR ::: ${error}`);
    });

  }

  render() {
    return (
      <div className='ratings_and_reviews'>
        <h3 className='ratings_and_reviews__title'>Ratings and Reviews</h3>
        <div className='ratings_and_reviews__ratings-left'>
          {this.props.ratingsLeft}
        </div>
        <div className='ratings_and_reviews__reviews-right'>
          {this.props.reviewsRight}
        </div>
      </div>
    )
  }
}

export default RatingsAndReviews;