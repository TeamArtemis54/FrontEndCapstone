import React from 'react';
function Header (props) {

  return (
    <div className='header'>
      <div className='header__left-nav'>
        <div className='header__left-nav--logo'></div>
      </div>
      <div className='header__right-nav'>
        <ul>
          <li>About Us</li>
          <li>History</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
};
export default Header;