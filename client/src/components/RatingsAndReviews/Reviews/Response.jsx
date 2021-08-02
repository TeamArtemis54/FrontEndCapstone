import React from 'react';

const Response = (props) => {
  return (
    <div className='response'>
      <div className='response__title'><span><b>Response:</b></span></div>
      <div className='response__text'>{props.response}</div>
    </div>
  )
};
export default Response;