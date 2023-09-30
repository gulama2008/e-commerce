import React from 'react'
import ProductsList from '../../containers/ProductsPageLoader/ProductsPageLoader'
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductsPage = ({ products,category}) => {
  console.log(products);
  return (
    <div>
      <h2>{ category}</h2>
      <ul>
        {products.map(product => { 
          return <li key={product.id}><ProductCard product={ product} /></li>
        })}
      </ul>
    </div>
  );
}

export default ProductsPage