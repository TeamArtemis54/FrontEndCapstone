import React, { useState } from 'react';
import Review from './Review.jsx';
import Button from './../../reusable_components/Button.jsx';
import ReviewForm from './ReviewForm.jsx';

const Reviews = ({ reviews, product_id }) => {
  const [next, setNext] = useState(0);
  const [show, setShowReviewForm] = useState(false);
  let reviewList = reviews.slice(next, next + 2);

  function seeMore() {
    setNext(next + 2);
    if (reviewList.length <= 1) {
      setNext(0);
    }
  }

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
        {show ? <ReviewForm
                  product_id={product_id}>
                  <Button
                    onClick={() => setShowReviewForm(!show)}
                    className={show ? 'cancel-review' : 'add-review'}>{show ? 'Cancel' : 'Add a Review'}</Button>
                </ReviewForm>
              : <Button
                  onClick={() => seeMore()}
                  className='more_reviews'>More Reviews</Button>}
      {show ? null : <Button
        onClick={() => setShowReviewForm(!show)}
        className='add-review'>Add a Review</Button>}
    </div>
  )
};
export default Reviews;