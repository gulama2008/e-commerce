import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './ProductsPage.module.scss'
import { NavLink } from 'react-router-dom';
const ProductsPage = ({ products,category}) => {
  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>
          {[
            category.charAt(0).toUpperCase(),
            category.slice(1, category.length),
          ].join("")}
        </h2>
        <span>{products.length} products</span>
      </div>

      <div className={styles.products_list}>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
      <NavLink to='/'>
        <button className={styles.btn}>Back</button>
      </NavLink>
    </div>
  );
}

export default ProductsPage