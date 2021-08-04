import React from 'react';

// THIS IS THE WIDTH OF THE
// stars__underlay--stars-container

let width = 0;
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
  average = Math.round(10 * result) / 10;

  switch (parseInt(average)) {
    case (1):
      width += 18;
      break;
    case (2):
      width += 38;
      break;
    case (3):
      width += 58;
      break;
    case (4):
      width += 78;
      break;
    case (5):
      width = 98;
      break;
    default:
      break;
  }
  if (remainder > .15 && remainder <= .35) {
    width += 8;
  } else if (remainder > .36 && remainder <= .56) {
    width += 12;
  } else if (remainder > .57 && remainder <= .77) {
    width += 16;
  }
}

const Stars = (props) => {
  const { review_meta } = props;
  getAverage(review_meta.ratings);
  return (
    <div className='stars'>

      <div className='average__container'>
        <div className='average__container--average'>
          <p className='average__container--average_text'>{average}</p>
        </div>
      </div>

      <div className='stars__container'>
        <div className='stars__underlay'>
          <div
            className='stars__underlay--stars-container'
            style={{ width: width, background: '#45a29e' }}>
            {[1, 2, 3, 4, 5].map((item, idx) => {
              return (
                <div key={idx} className='stars__underlay--stars-container_stars'>
                  <img className='stars__underlay--stars-container_stars__image' src='star.png' />
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  )
};
export default Stars;