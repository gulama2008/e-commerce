import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../services/products-service";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";

const ProductsPageLoader = () => {
  const { category } = useParams();
  const [products, setProducts] = useState(null)
  useEffect(() => {
    getProductsByCategory(category)
      .then((products) => console.log(products))
      .catch((e) => console.log(e));
  }, []);
  return <ProductsPage products={ products} />;
};

export default ProductsPageLoader;
