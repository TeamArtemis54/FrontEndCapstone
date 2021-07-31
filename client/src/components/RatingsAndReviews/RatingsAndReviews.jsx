import React, {useState, useEffect} from 'react';
import Reviews from './Reviews/Reviews.jsx';
import axios from 'axios';

const RatingsAndReviews = ({reviews, review_meta}) => {
  return (
    <div className='ratings_and_reviews'>
      <div className='ratings_and_reviews__ratings-left'>
        <h3 className='ratings_and_reviews__title'>Ratings and Reviews</h3>
        {/* ratingsLeft */}
      </div>
      <div className='ratings_and_reviews__reviews-right'>
        <Reviews
          reviews={reviews} />
      </div>
    </div>
  )
}
export default RatingsAndReviews;