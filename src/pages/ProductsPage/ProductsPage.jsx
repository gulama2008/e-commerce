import React from 'react'
import ProductsList from '../../containers/ProductsPageLoader/ProductsPageLoader'

const ProductsPage = ({ products}) => {
  console.log(products);
  return (
    <div>
      <h2>Product Page</h2>
      {/* <ProductsList /> */}
    </div>
  );
}

export default ProductsPage