import React from 'react';
import Review from './Review.jsx';
import Button from './../../reusable_components/Button.jsx';

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
      <Button
        className='write_a_review'>Write a Review</Button>
    </div>
  )
};
export default Reviews;