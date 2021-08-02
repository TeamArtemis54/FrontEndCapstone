import React from 'react';

const Bars = (props) => {
  const {review_meta} = props;
  console.log(review_meta);

  function ratingsResponses (obj) {
    let total = 0;

    for (let key in obj) {
      total += Number(obj[key]);
    }
    console.log('width in bars', total);
  }
  ratingsResponses(review_meta.ratings)
  return (
    <div className='bar'>
      <div className='bar__base'>
        <div className='bar__base--overlay'></div>
      </div>
    </div>
  )
};
export default Bars;