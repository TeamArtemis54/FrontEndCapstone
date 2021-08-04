import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const Recommend = (props) => {
  return (
    <div className='recommend'>
      <div className='recommend__text'><span><FontAwesomeIcon icon={faCheck} /></span> I recommend this product</div>
    </div>
  )
};
export default Recommend;