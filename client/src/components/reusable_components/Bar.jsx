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
          return (
            <div className='bar' key={idx}>
              <div className='bar__underlay'>
                <p className='bar__line'>
                  <u className='bar__line--underline'>{`${item} stars`}</u>
                  <span style={{
                    background: '#45a29e',
                    height: '11px',
                    width: `${barLevel(review_meta.ratings, item)}%`
                  }}></span>
                </p>
              </div>
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