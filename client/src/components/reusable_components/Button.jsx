import React from 'react';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      value={props.value}
      className={props.class}>
      {props.children}
    </button>
  )
};
export default Button;