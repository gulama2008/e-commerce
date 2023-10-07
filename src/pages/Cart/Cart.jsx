import React, { Fragment, useContext, useEffect } from "react";
import ProductInCart from "../../components/ProductInCart/ProductInCart";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import { ProductsContext } from "../../context/ProductsContextProvider";
import styles from "./Cart.module.scss";
import { getItemsInCart } from "../../services/data-service";
const Cart = () => {
  const {
    itemsInCart,
    deleteItemInCart,
    updateCart,
    changeItemQuantityInCart,
    products,
    itemsInSessionStorage,
  } = useContext(ProductsContext);
  useEffect(() => {}, [itemsInCart]);
  let lastItemIndex = itemsInCart.length - 1;
console.log(itemsInSessionStorage);
  console.log(itemsInCart);
  return (
    <div className={styles.page }>
      <p className={ styles.title}>Shopping Cart</p>
      {itemsInSessionStorage.length > 0 ? (
        <div className={styles.container}>
          <div className={styles.container_products}>
            {itemsInSessionStorage.map((item, index) => {
              return (
                <ProductInCart
                  item={item}
                  index={index}
                  key={index}
                  isLastItem={index == lastItemIndex}
                />
              );
            })}
          </div>
          <OrderDetail />
        </div>
      ) : (
          <div className={styles.empty}>
            <img src="src/assets/empty.png" alt="" />
          </div>
      )}
    </div>
  );
};

export default Cart;
