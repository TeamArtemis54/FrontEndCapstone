import React from 'react';

function Review (props) {


  return (
    <div className='review'>

      <div className='review__top'>
        <div className='review__top--stars'>
          {/* STARS COMPONENT WILL GO HERE */}
        </div>

        <div className='review__top--user'>
          <p className='review__top--reviewer'>
            <span className='review__top--reviewer-name'>{props.reviewer_name}, </span>
            <span className='review__top--reviewer-date'>{props.date}</span>
          </p>
        </div>
      </div>

      <div className='review__middle'>
        <p className='review__summary'>
          <span>{props.summary}</span>
        </p>
        <p className='review__summary'>
          <span>{props.body}</span>
        </p>
      </div>

      <div className='review__bottom'>
        <div className='review__bottom--helpful'>
          <p className='review__bottom--helpful-help'>Helpful?
            <span><u>Yes </u>{props.helpful}</span>
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