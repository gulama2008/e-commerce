import React from "react";
import CarouselBox from "../../components/Carousel/CarouselBox";
import CategoriesContainer from "../../containers/CategoriesContainer/CategoriesContainer";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import styles from './HomePage.module.scss'
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <CarouselBox />
      {/* <CategoriesContainer/> */}
      <div className={styles.container}>
        <NavLink to="/romper">
          <CategoryCard />
        </NavLink>
        <NavLink to="/sleepwear">
          <CategoryCard />
        </NavLink>
        <NavLink to="/shoes">
          <CategoryCard />
        </NavLink>
      </div>
    </>
  );
};

export default HomePage;
