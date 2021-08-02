import React, { Component } from 'react';
import Response from './Response.jsx';
import Recommend from './Recommend.jsx';
import moment from 'moment';

const Review = (props) => {
  const {review} = props;
  let date = moment(review.date)
  return (
    <div className='review'>

      <div className='review__top'>
        <div className='review__top--stars'>
          {/* STARS COMPONENT WILL GO HERE */}
        </div>

        <div className='review__top--user'>
          <p className='review__top--user--reviewer'>
            <span className='review__top--user--reviewer-name'>{review.reviewer_name}, </span>
            <span className='review__top--user--reviewer-date'>{review.date}</span>
          </p>
        </div>
      </div>

      <div className='review__middle'>
        <p className='review__summary'>
          <span><b>{review.summary}</b></span>
        </p>
        <p className='review__summary'>
          <span>{review.body.slice(0, 188)}</span>
        </p>
      </div>

      <div className='conditions'>
        {review.recommend ? <Recommend /> : null}

        {review.response ? <Response response={review.response} /> : null}
      </div>

      <div className='review__bottom'>
        <div className='review__bottom--helpful'>
          <p className='review__bottom--helpful-help'>Helpful?
            <span><u>Yes </u>{review.helpful}</span>
          </p>
        </div>

        <div className='review__bottom--report'>
          <p className='review__bottom--report-text'><b><u>Report</u></b></p>
        </div>
      </div>

    </div>
  )
};
export default Review;