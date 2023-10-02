import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";
import styles from "./ProductInCart.module.scss";
const ProductInCart = ({ item, isLastItem, index }) => {
  const { itemsInCart, deleteItemInCart, changeItemQuantityInCart } =
    useContext(ProductsContext);
  const [quantityInCart, setQuantityInCart] = useState(item.quantity);
  let containerClasses = styles.container;
  if (!isLastItem) {
    containerClasses += ` ${styles.withBottomBorder}`;
  }
  const deleteItem = () => {
    const copy = [...itemsInCart];
    copy.splice(index, 1);
    deleteItemInCart(copy);
  };

    const changeQuantity = (e) => { 
        setQuantityInCart(e.target.value);
        changeItemQuantityInCart(index,parseInt(e.target.value))
    }
  return (
    <div className={containerClasses}>
      <img src={item.image} alt="" className={styles.img} />
      <div>
        <p>{item.name}</p>
        <p>{item.size}</p>
        <p>${item.price*item.quantity}</p>
      </div>
      <div className={styles.edit}>
        <img
          src="src/assets/delete.png"
          alt=""
          className={styles.delete}
          onClick={deleteItem}
        />
        <input
          type="number"
          className={styles.quantity}
          value={quantityInCart}
          onChange={changeQuantity}
        />
      </div>
    </div>
  );
};

export default ProductInCart;
