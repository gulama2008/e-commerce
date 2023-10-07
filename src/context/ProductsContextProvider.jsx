import { useState,useEffect } from "react";
import { createContext } from "react";
import {
  addProductInCart,
  getAllProducts,
  subscribeToProducts,
} from "../services/products-service";
import { getItemsInCart, saveItemsToSessionStorage } from "../services/data-service";
export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children}) => {
  const [products, setProducts] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(getItemsInCart());
  const [itemsInSessionStorage, setItemsInSessionStorage] = useState(getItemsInCart());
  const refreshProducts = () => { 
    getAllProducts()
      .then(products => setProducts(products))
      .catch(e => console.log(e));
  }

  const updateCart = (newItem) => {
    if (itemsInCart.length === 0) { 
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
    saveItemsToSessionStorage(newItemsArray);
    setItemsInCart(newItemsArray);
  }

  const changeItemQuantityInCart = (index,newQuantity) => { 
    const copy = [...itemsInCart];
    copy[index].quantity = newQuantity;
    saveItemsToSessionStorage(copy)
    setItemsInCart(copy);
  }
  useEffect(() => {
    
    const newItemsListInSessionStorage = getItemsInCart();
    setItemsInSessionStorage(newItemsListInSessionStorage);
  }, [itemsInCart])

  useEffect(() => {
    // refreshProducts();
    const unsub = subscribeToProducts(setProducts);
    return () => unsub();
  }, []);
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        refreshProducts,
        itemsInCart,
        setItemsInCart,
        updateCart,
        deleteItemInCart,
        changeItemQuantityInCart,
        itemsInSessionStorage,
        setItemsInSessionStorage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider