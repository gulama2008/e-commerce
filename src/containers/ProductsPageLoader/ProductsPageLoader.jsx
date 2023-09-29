import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../../services/products-service';
import ProductsPage from '../../pages/ProductsPage/ProductsPage';

const ProductsPageLoader = () => {
  const { category } = useParams();
  console.log(category);
  // const [products, setProducts] = useState(null)
  useEffect(() => { 
    console.log(category);
    getProductsByCategory(category)
      .then(products => console.log(products))
    // .catch(e=>console.log(e))
  },[])
  return (
    <ProductsPage  />
  )
}

export default ProductsPageLoader