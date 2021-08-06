import React from 'react';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      value={props.value}
      className={props.className}>
      {props.children}
    </button>
  )
};
export default Button;