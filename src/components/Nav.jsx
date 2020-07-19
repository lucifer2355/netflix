import React from "react";

function Nav() {
  return (
    <div className='nav'>
      <img
        className='nav__logo'
        src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
        alt='Netflix Logo'
      />
      <img
        className='nav__avatar'
        src='https://i.pinimg.com/474x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1--horse-stuff-sleepover.jpg'
        alt='Profile Logo'
      />
    </div>
  );
}

export default Nav;
