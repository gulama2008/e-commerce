import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss';
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        Baby Planet
        <img src="src/assets/logo-img.png" alt="" className={styles.logo_img} />
      </NavLink>

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
      <div className={styles.icon}>
        <NavLink
        // to="cart"
        // className={styles.navlinks_link}
        >
          <img src="src/assets/fav1.png" alt="" className={styles.icon_fav} />
        </NavLink>
        <NavLink
        // to="cart"
        // className={styles.navlinks_link}
        >
          <img src="src/assets/user.png" alt="" className={styles.icon_fav} />
        </NavLink>
        <NavLink
          to="cart"
          // className={styles.navlinks_link}
        >
          <img src="src/assets/cart.png" alt="" className={styles.icon_cart} />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
