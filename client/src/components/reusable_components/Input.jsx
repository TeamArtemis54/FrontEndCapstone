import React from 'react';
function Input(props) {
  return (
    <label htmlFor={props.htmlFor}>
      {props.label}
      <input
        accept={props.accept}
        className={props.class}
        id={props.id}
        multiple={props.multiple}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value} />
    </label>
  )
};
export default Input;