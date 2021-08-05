import React from 'react';
function Input(props) {
  return (
    <label>
      {props.label}
      <input
        className={props.class}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value} />
    </label>
  )
};
export default Input;