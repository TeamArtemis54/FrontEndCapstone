import React from 'react';
function Button(props) {
  return (
    <button
      onClick={props.handleClick}
      name={props.name}
      {/*default type is button which
      is best for having onclick events*/}
      type={props.type}
      value={props.value}
      className={`btn__${props.size} btn__${props.color}`}>
      {/* props.children will be text that gives a description
      to the button for what it does
      this should be done for accesibility
      it can be hidden with css */}
      {props.children}
    </button>
  )
};
export default Button;