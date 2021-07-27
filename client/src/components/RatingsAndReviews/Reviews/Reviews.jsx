import React from 'react';
import Review from './Review.jsx';

const Reviews = ({reviewsData}) => {
  return (
    <div className='reviews_right'>
      <div className='reviews_right__reviews'>
        {reviewsData.map((review, idx) => {
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