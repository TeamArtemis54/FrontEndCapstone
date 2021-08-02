import React from 'react';

const Bar = (props) => {
  const {ratings} = props;

  return (
    <div className='bar'>
      <div className='bar__base'>
        <div className='bar__base--overlay'></div>
      </div>
    </div>
  )
};
export default Bar;