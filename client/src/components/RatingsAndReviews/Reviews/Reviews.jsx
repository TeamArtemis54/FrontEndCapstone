import React from 'react';
import Review from './Review.jsx';

const Reviews = ({reviews}) => {
  return (
    <div className='reviews_right'>
      <div className='reviews_right__reviews'>
        {reviews.map((review, idx) => {
          return (
            <Review
              key={idx}
              review={review} />
          )
        })}
      </div>
    </div>
  )
};
export default Reviews;