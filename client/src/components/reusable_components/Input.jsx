import React from 'react';
function Input (props) {
  return (
    <input
      className={props.class}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value} />
  )
};
export default Input;