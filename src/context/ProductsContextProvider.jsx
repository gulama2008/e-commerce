import { useState,useEffect } from "react";
import { createContext } from "react";
import { getAllProducts } from "../services/products-service";
export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children}) => {
  const [products, setProducts] = useState([]);
  const refreshProducts = () => { 
    getAllProducts()
      .then(products => setProducts(products))
      .catch(e => console.log(e));
  }
  useEffect(() => {
    refreshProducts();
  }, []);
  return (
      <ProductsContext.Provider value={{ products, setProducts,refreshProducts }}>{children}</ProductsContext.Provider>
  )
}

export default ProductsContextProvider