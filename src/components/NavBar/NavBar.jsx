import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss';
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Baby Planet</div>
      <div className={styles.navlinks}>
        <NavLink to="/" className={styles.navlinks_link}>
          HOME
        </NavLink>
        <NavLink to="/romper" className={styles.navlinks_link}>
          ROMPER
        </NavLink>
        <NavLink to="/sleepwear" className={styles.navlinks_link}>
          SLEEPWEAR
        </NavLink>
        <NavLink to="/shoes" className={styles.navlinks_link}>
          SHOES
        </NavLink>
      </div>
      <div className={styles.img}>
        <NavLink
          to="cart"
          // className={styles.navlinks_link}
        >
          <img src="src/assets/cart.png" alt="" className={styles.cart} />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
