import React from 'react';
function Header (props) {

  return (
    <div className='header'>
      <div className='header__left-nav'>
        <div className='header__left-nav--title'>Team Artemis</div>
      </div>
      <div className='header__right-nav'>
        <input type='search' placeholder='Search for a product' />
      </div>
    </div>
  )
};
export default Header;