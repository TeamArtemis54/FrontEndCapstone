import React, { Component } from 'react';

class Review extends Component {
  constructor(props) {
    super(props);
    const {review} = this.props;
    this.state = {
    }
  }

  render() {
    return (
      <div className='review'>

        <div className='review__top'>
          <div className='review__top--stars'>
            {/* STARS COMPONENT WILL GO HERE */}
          </div>

          <div className='review__top--user'>
            <p className='review__top--reviewer'>
              <span className='review__top--reviewer-name'>{review.reviewer_name}, </span>
              <span className='review__top--reviewer-date'>{review.date}</span>
            </p>
          </div>
        </div>

        <div className='review__middle'>
          <p className='review__summary'>
            <span>{review.summary}</span>
          </p>
          <p className='review__summary'>
            <span>{review.body}</span>
          </p>
        </div>

        {review.recommended}

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
  }
};
export default Review;