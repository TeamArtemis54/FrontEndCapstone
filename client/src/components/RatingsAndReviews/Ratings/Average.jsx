import React from 'react';

let average = 0;
function getAverage(obj) {
  let pointsTotal = 0;
  let numberOfResponses = 0;

  for (const key in obj) {
    numberOfResponses += Number(obj[key]);
    pointsTotal += (Number(key) * Number(obj[key]));
  }
  const result = pointsTotal / numberOfResponses;
  const remainder = result % 1;
  average = Math.round(10 * result) / 10
  return average;
}


const Average = (props) => {
  const {review_meta} = props;
  return (
    <div className='average__container'>
      <div className='average__container--average'>
        <p className='average__container--average_text'>{average = getAverage(review_meta.ratings) || 0}</p>
      </div>
    </div>
  )
};
export default Average;