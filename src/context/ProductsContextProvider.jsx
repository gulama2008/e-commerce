import { useState,useEffect } from "react";
import { createContext } from "react";
import { getAllProducts } from "../services/products-service";
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
    if (itemsInCart.length === 0) { 
      return setItemsInCart([newItem]);
    }
    let foundItem = true;
    const newItemsArray = itemsInCart.map(item => {
      const itemCopy = { ...item };
      console.log(itemCopy);
      (itemCopy.id == newItem.id && itemCopy.size == newItem.size) ? itemCopy.quantity += newItem.quantity : foundItem=false;
      return itemCopy;
    })
    !foundItem && newItemsArray.push(newItem);
    saveItemsToSessionStorage(newItemsArray);
    setItemsInCart(newItemsArray);
  }

  const deleteItemInCart = (newItemsArray) => { 
    setItemsInCart(newItemsArray);
  }

  const changeItemQuantityInCart = (index,newQuantity) => { 
    const copy = [...itemsInCart];
    copy[index].quantity = newQuantity;
    setItemsInCart(copy);
  }

  useEffect(() => {
    refreshProducts();
  }, []);
  return (
      <ProductsContext.Provider value={{ products, setProducts,refreshProducts,itemsInCart,updateCart,deleteItemInCart,changeItemQuantityInCart }}>{children}</ProductsContext.Provider>
  )
}

export default ProductsContextProvider