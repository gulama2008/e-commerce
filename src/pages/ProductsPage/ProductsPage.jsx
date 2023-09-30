import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './ProductsPage.module.scss'
const ProductsPage = ({ products,category}) => {
  console.log(products);
  return (
    <div>
      <div className={ styles.heading}>
        <h2>{category}</h2>
        <span>({ products.length} results)</span>
      </div>

      <ul className={ styles.products_list}>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ul>
    </div>
  );
}

export default ProductsPage