import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";
import styles from "./ProductInCart.module.scss";
import { toFloat } from "../../services/data-service";
import QuantityButton from "../QuantityButton/QuantityButton";
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
      <div className={styles.info}>
        <p>{item.name}</p>
        <p className={styles.info_small}>Size: {item.size}</p>
        <p className={styles.info_small}>Unit price: ${toFloat(item.price)}</p>
        <p className={styles.info_small}>Stock: {item.stock} left</p>
        {/* <p>Subtotal: ${toFloat(item.price * item.quantity)}</p> */}
      </div>
      <div className={styles.edit}>
        <img
          src="src/assets/delete.png"
          alt=""
          className={styles.delete}
          onClick={deleteItem}
        />
        <QuantityButton
          item={item}
          quantityInCart={quantityInCart}
          setQuantityInCart={setQuantityInCart}
          index={index}
        />
        <p>Subtotal: ${toFloat(item.price * item.quantity)}</p>
      </div>
    </div>
  );
};

export default ProductInCart;