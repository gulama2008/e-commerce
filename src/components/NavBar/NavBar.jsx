import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss';
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div>Baby Planet</div>
      <div className={styles.navlinks}>
        <NavLink to="/" className={styles.navlinks_link}>
          Home
        </NavLink>
        <NavLink to="/romper" className={styles.navlinks_link}>
          Romper
        </NavLink>
        <NavLink to="/sleepwear" className={styles.navlinks_link}>
          Sleepwear
        </NavLink>
        <NavLink to="/shoes" className={styles.navlinks_link}>
          Shoes
        </NavLink>
        <NavLink to="cart" className={styles.navlinks_link}>
          <img src="src/assets/cart.png" alt="" className={ styles.cart} />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
