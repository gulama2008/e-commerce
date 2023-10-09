import React from "react";
import CarouselBox from "../../components/Carousel/CarouselBox";
import styles from "./HomePage.module.scss";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <CarouselBox />
      <div className={styles.container}>
        <NavLink to="/romper">
          <div className={styles.card}>
            <img src="src/assets/romper.avif" alt="" className={styles.img} />
            <div className={styles.title}>ROMPER</div>
          </div>
        </NavLink>
        <NavLink to="/sleepwear">
          <div className={styles.card}>
            <img
              src="src/assets/sleepwear.avif"
              alt=""
              className={styles.img}
            />
            <div className={styles.title}>SLEEPWEAR</div>
          </div>
        </NavLink>
        <NavLink to="/shoes">
          <div className={styles.card}>
            <img src="src/assets/shoes.avif" alt="" className={styles.img} />
            <div className={styles.title}>SHOES</div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default HomePage;
