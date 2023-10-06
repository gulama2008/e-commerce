import { useState,useEffect } from "react";
import { createContext } from "react";
import { addProductInCart, getAllProducts,subscribeToProducts } from "../services/products-service";
import { saveItemsToSessionStorage } from "../services/data-service";
export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children}) => {
  const [products, setProducts] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const refreshProducts = () => { 
    getAllProducts()
      .then(products => setProducts(products))
      .catch(e => console.log(e));
  }

  const updateCart = (newItem) => {
    console.log(newItem);
    if (itemsInCart.length === 0) { 
      // addProductInCart(newItem);
      return setItemsInCart([newItem]);
    }
    const copy = itemsInCart.map(item => ({ ...item }));
    const sameItemIndex = copy.findIndex((item) => { 
      return item.id == newItem.id && item.size == newItem.size;
    })
    sameItemIndex == -1 ? copy.push(newItem) : copy[sameItemIndex].quantity += newItem.quantity;
    saveItemsToSessionStorage(copy);
    setItemsInCart(copy);

  }

  const deleteItemInCart = (newItemsArray) => { 
    setItemsInCart(newItemsArray);
  }

  const changeItemQuantityInCart = (index,newQuantity) => { 
    const copy = [...itemsInCart];
    copy[index].quantity = newQuantity;
    setItemsInCart(copy);
  }

  // useEffect(() => {
  //   refreshProducts();
  // }, []);

  useEffect(() => {
    const unsub = subscribeToProducts(setProducts);
    return () => unsub();
  }, []);

  return (
      <ProductsContext.Provider value={{ products, setProducts,refreshProducts,itemsInCart,updateCart,deleteItemInCart,changeItemQuantityInCart }}>{children}</ProductsContext.Provider>
  )
}

export default ProductsContextProvider