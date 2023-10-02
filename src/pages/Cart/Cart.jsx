import React, { useContext, useEffect } from 'react'
import ProductInCart from '../../components/ProductInCart/ProductInCart'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import { ProductsContext } from '../../context/ProductsContextProvider'
import styles from './Cart.module.scss'
const Cart = () => {
  const { itemsInCart } = useContext(ProductsContext);
  useEffect(() => { },[itemsInCart])
  let lastItemIndex = itemsInCart.length - 1;
  
  console.log(itemsInCart);
  return (
    <div className={styles.container}>
      {
        itemsInCart.length>0&&<div className={styles.container_products}>
          {itemsInCart.map((item, index) => {
            return (
              <ProductInCart
                item={item}
                index={ index}
                key={index}
                isLastItem={index == lastItemIndex}
              />
            );
          })}
        </div>
      }

      <OrderDetail />
    </div>
  );
}

export default Cart