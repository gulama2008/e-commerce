import { useState } from "react";
import { createContext } from "react";
export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children}) => {
    const [products, setProducts] = useState([]);
  return (
      <ProductsContext.Provider value={{ products, setProducts }}>{children}</ProductsContext.Provider>
  )
}

export default ProductsContextProvider