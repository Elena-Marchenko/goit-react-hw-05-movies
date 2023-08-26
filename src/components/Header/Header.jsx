import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="">
        <NavLink className="" to="/">
          Home
        </NavLink>
        <NavLink className="" to="/movies">
          Movies
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
