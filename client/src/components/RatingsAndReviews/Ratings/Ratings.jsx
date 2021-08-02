import React, {useEffect} from 'react';
import Stars from './../../reusable_components/Stars.jsx';

const Ratings = (props) => {
  const {review_meta} = props;

  return (
    <div className='ratings_left'>
      <p>left ratings section...</p>
      <div className='ratings_left__average'>
        <Stars review_meta={review_meta} />

      </div>

      <div className='ratings_left__ratings-bars'>
        {props.ratingsBars}
      </div>

      <div className='ratings_left__ratings-styles'>
        {props.ratingsStyles}
      </div>

    </div>
  )
};
export default Ratings;