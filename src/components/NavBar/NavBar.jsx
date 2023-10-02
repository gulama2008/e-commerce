import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>Baby</div>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/romper'>Romper</NavLink>
        <NavLink to='/sleepwear'>Sleepwear</NavLink>
        <NavLink to='/shoes'>Shoes</NavLink>
        <NavLink to='cart'>Cart</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
