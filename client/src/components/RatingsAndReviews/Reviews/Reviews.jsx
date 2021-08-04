import React, {useState} from 'react';
import Review from './Review.jsx';
import Button from './../../reusable_components/Button.jsx';

const Reviews = ({reviews}) => {
  const [next, setNext] = useState(0);
  let reviewList = reviews.slice(next, next + 2);

  return (
    <div className='reviews_right'>
      <div className='reviews_right__reviews'>
        {reviewList.map((review, idx) => {
          return (
            <Review
              key={idx}
              review={review} />
          )
        })}
      </div>
      <Button
        onClick={() => setNext(next + 2)}
        className='more_reviews'>More Reviews</Button>
      <Button
        className='add_a_review'>Add a Review</Button>

    </div>
  )
};
export default Reviews;