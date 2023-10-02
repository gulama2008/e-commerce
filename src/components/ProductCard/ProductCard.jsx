import React from 'react'
import styles from './ProductCard.module.scss'
import { Link, NavLink } from 'react-router-dom';
import { toFloat } from '../../services/data-service';
const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Link to={`${product.id}`} className={styles.card}>
      <img className={styles.img} src={product.image} alt="" />
      <h3>${toFloat(product.price)}</h3>
      <p>{product.name}</p>
    </Link>
  );
}

export default ProductCard