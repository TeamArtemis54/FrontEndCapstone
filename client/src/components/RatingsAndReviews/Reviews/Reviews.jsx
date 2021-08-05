import React, {useState} from 'react';
import Review from './Review.jsx';
import Button from './../../reusable_components/Button.jsx';
import ReviewForm from './ReviewForm.jsx';

const Reviews = ({reviews}) => {
  // console.log(reviews)
  const [next, setNext] = useState(0);
  const [show, setShowReviewForm] = useState(false);
  let reviewList = reviews.slice(next, next + 2);

  function seeMore () {
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
      <div className='form-section'>
        {show ? <ReviewForm /> : null}
        <Button
          onClick={() => seeMore()}
          className='more_reviews'>More Reviews</Button>
        <Button
          onClick={() => setShowReviewForm(true)}
          className='add_a_review'>Add a Review</Button>
      </div>
    </div>
  )
};
export default Reviews;