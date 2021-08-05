import React from 'react';

const Star = (props) => {
  const {review} = props;
  let width;
  if (review.rating === 1) {
    width = 20;
  } else if (review.rating === 2) {
    width = 40;
  } else if (review.rating === 3) {
    width = 60;
  } else if (review.rating === 4) {
    width = 80;
  } else if (review.rating === 5) {
    width = 100;
  }
  console.log(review)
  return (
    <div className='star'>

      <div className='star__container'>
        <div className='star__underlay'>
          <div
            className='star__underlay--star-container'
            style={{ width: width, background: '#030a0a' }}>
            {[1, 2, 3, 4, 5].map((item, idx) => {
              return (
                <div key={idx} className='star__underlay--star-container_star'>
                  <img className='star__underlay--star-container_star__image' src='star.png' />
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  )
};
export default Star;