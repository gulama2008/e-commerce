import styles from "./HamburgerMenu.module.scss";
import { NavLink } from "react-router-dom";
const HamburgerMenu = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.link}>
        HOME
      </NavLink>
      <NavLink to="/romper" className={styles.link}>
        ROMPER
      </NavLink>
      <NavLink to="/sleepwear" className={styles.link}>
        SLEEPWEAR
      </NavLink>
      <NavLink to="/shoes" className={styles.link}>
        SHOES
      </NavLink>
    </div>
  );
};

export default HamburgerMenu;
