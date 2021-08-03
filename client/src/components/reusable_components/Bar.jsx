import React, { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';

const barLevel = (obj, key) => {
  let total = 0;
  for (const k in obj) {
    total += Number(obj[k]);
  }
  return ((Number(obj[key]) / total).toFixed(2) * 100);
}

const Bar = ({ review_meta }) => {

  if (review_meta.ratings) {
    return (
      <div className='bars'>
        {[5, 4, 3, 2, 1].map((item, idx) => {
          {/* console.log(review_meta.ratings) */ }
          {/* barLevel(o, item); */ }
          return (
            <div key={idx}>
              <p><span><u>
                {`${item} stars`}
              </u></span></p>

              <div>
                <div style={{
                  background: 'rgba(51, 170, 51, .8)',
                  height: '5px',

                  width: `${barLevel(review_meta.ratings, item)}%`,
                }}
                />
              </div>
              <div></div>
            </div>
          )
        }
        )}
      </div>
    )
  } else {
    return (
      <img src='loading-2.gif' alt="loading..." />
    )
  }
};
export default Bar;