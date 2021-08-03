import React, {useEffect} from 'react';
import Stars from './../../reusable_components/Stars.jsx';
import Bar from './../../reusable_components/Bar.jsx';

const Ratings = (props) => {
  const {review_meta, product_id} = props;
  // console.log('meta in ratings', review_meta)

  return (
    <div className='ratings_left'>
      <p>left ratings section...</p>
      <div className='ratings_left__average'>
        <Stars review_meta={review_meta} />

      </div>

      <div className='ratings_left__ratings-bars'>
        <Bar
          review_meta={review_meta} />
      </div>

      <div className='ratings_left__ratings-styles'>
        {props.ratingsStyles}
      </div>

    </div>
  )
};
export default Ratings;