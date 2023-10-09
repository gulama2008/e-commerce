import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Hamburger from "../Hamburger/Hamburger";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { ProductsContext } from "../../context/ProductsContextProvider";
import fav1 from "../../assets/fav1.png";
import user from "../../assets/user.png";
import cart from "../../assets/cart.png";
import logo from "../../assets/logo-img.png";
const NavBar = () => {
  const { quantityInCart, setQuantityInCart } = useContext(ProductsContext);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState();
  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };
  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.hamburger} onClick={toggleHamburger}>
          <Hamburger />
        </div>
        <NavLink to="/" className={styles.logo}>
          Baby Planet
          <img src={logo} alt="" className={styles.logo_img} />
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
          <NavLink to="favourites">
            <img src={fav1} alt="" className={styles.icon_fav} />
          </NavLink>
          {/* <NavLink>
            <img src={user} alt="" className={styles.icon_fav} />
          </NavLink> */}
          <NavLink to="cart" className={styles.cart}>
            <img src={cart} alt="" className={styles.icon_cart} />
            {quantityInCart !== 0 && (
              <div className={styles.quantity}>{quantityInCart}</div>
            )}
          </NavLink>
        </div>
      </div>
      {isHamburgerOpen && <HamburgerMenu />}
    </nav>
  );
};

export default NavBar;
