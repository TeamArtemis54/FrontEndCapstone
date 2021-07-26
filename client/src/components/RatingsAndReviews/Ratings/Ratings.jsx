import React from 'react';

function Ratings(props) {
  return (
    <div className='ratings_left'>
    <p>left ratings section...</p>
      <div className='ratings_left__average'>
        {props.averageRating}
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