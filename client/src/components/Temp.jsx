import React from 'react';
import Button from './reusable_components/Button.jsx';
import Input from './reusable_components/Input.jsx';

function Temp (props) {
  return (
    <div>
      <Input
        class='input'
        placeholder='Enter your email'
        type='email' />
      <Button
        class='button'
        type='submit'
        value='test button'
        size='small'>Test Button</Button>
    </div>
  )
}
export default Temp;