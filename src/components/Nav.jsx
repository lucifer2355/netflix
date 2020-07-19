import React, { useState, useEffect } from "react";
import "../style/nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
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
