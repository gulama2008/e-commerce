import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../services/products-service";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";

const ProductsPageLoader = () => {
  const { category } = useParams();
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(category);
  useEffect(() => {
    setIsLoading(true);
    getProductsByCategory(category)
      .then((products) => setProducts(products))
      .catch((e) => setError(e.message))
      .finally(setIsLoading(false));
  }, [category]);
  return (
    <>
      {isLoading && <p>is loading...</p>}
      {error && <p>{ error}</p>}
      {products && <ProductsPage products={products} category={ category} />}
    </>
  )
    
};

export default ProductsPageLoader;
