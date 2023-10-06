import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Favourites.module.scss";
import { NavLink } from "react-router-dom";
import { subscribeToProducts } from '../../services/products-service';
const Favourites = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const unsub = subscribeToProducts(setProducts);
      return () => unsub();
    }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>
          My Favourites
        </h2>
      </div>

      <div className={styles.products_list}>
              {products.filter(product => product.isFavourited).map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
      <NavLink to="/">
        <button className={styles.btn}>Back</button>
      </NavLink>
    </div>
  );
};

export default Favourites