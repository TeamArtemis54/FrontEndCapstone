import React from 'react';
function RatingsAndReviews (props) {
  return (
    <div className='ratings_and_reviews'>
      <h3 className='ratings_and_reviews__title'>Ratings and Reviews</h3>
      <div className='ratings_and_reviews__ratings-left'>
        {props.ratingsLeft}
      </div>
      <div className='ratings_and_reviews__reviews-right'>
        {props.reviewsRight}
      </div>
    </div>
  )
};
export default RatingsAndReviews;