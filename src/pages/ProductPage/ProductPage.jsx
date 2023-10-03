import React, { useContext, useState } from "react";
import styles from "./ProductPage.module.scss";
import { ProductsContext } from "../../context/ProductsContextProvider";
import {
  saveItemsToSessionStorage,
  toFloat,
} from "../../services/data-service";
import { NavLink } from "react-router-dom";
import QuantityButton from "../../components/QuantityButton/QuantityButton";
const ProductPage = ({ product, category }) => {
  const { itemsInCart, updateCart, changeItemQuantityInCart } =
    useContext(ProductsContext);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(product.quantity[0]);
  const [quantityAdd, setQuantityAdd] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantityInCart, setQuantityInCart] = useState(0);
  console.log(product);
  console.log(activeSizeIndex);
  console.log(product.size[activeSizeIndex]);
  const onClickSizeButton = (e) => {
    setQuantityAdd(1);
    const index = e.target.getAttribute("index");
    setActiveSizeIndex(index);
    setQuantity(product.quantity[index]);
  };
  const changeQuantityPurchase = (e) => {
    setQuantityAdd(parseInt(e.target.value));
  };
  const increaseQuantity = (e) => {
    setQuantityAdd(quantityAdd+1)
  };
  const decreaseQuantity = (e) => {
    setQuantityAdd(quantityAdd-1)
  };
  const addToCart = () => {
    // setIsAddedToCart(true);
    // setQuantity(quantity - parseInt(quantityAdd));

    setQuantityInCart(quantityInCart + parseInt(quantityAdd));
    const newItem = {
      ...product,
      size: product.size[activeSizeIndex],
      quantity: quantityAdd,
      stock: quantity,
    };
    console.log(newItem);
    // saveItemsToSessionStorage(newItem);
    updateCart(newItem);
    setQuantityAdd(1);
  };
  console.log(itemsInCart);
  return (
    <div>
      <div className={styles.container}>
        <img src={product.image} alt="" className={styles.img} />
        <div className={styles.info}>
          <p className={styles.info_name}>{product.name}</p>
          <p className={styles.info_price}>${toFloat(product.price)}</p>
          <div>
            {product.size.map((size, index) => {
              return (
                <button
                  key={index}
                  index={index}
                  onClick={onClickSizeButton}
                  className={styles.btn}
                >
                  {size}
                </button>
              );
            })}
          </div>
          <p className={styles.info_stock}>In stock: {quantity} left</p>
          <div className={styles.quantity}>
            <button
              className={styles.quantity_btn}
              onClick={decreaseQuantity}
              disabled={quantityAdd == 1}
            >
              -
            </button>
            <input
              type="text"
              className={styles.quantity_input}
              value={ quantityAdd}
              onChange={changeQuantityPurchase}
            />
            <button
              className={styles.quantity_btn}
              onClick={increaseQuantity}
              disabled={quantityAdd == quantity}
            >
              +
            </button>
            {quantity == 0 && <p>Sorry, no stock left</p>}
          </div>
          <button onClick={addToCart} disabled={quantity == 0} className={ styles.add}>
            Add to Cart
          </button>
        </div>
      </div>
      <NavLink to={`/${category}`}>Back</NavLink>
    </div>
  );
};

export default ProductPage;

// className={ activeSizeIndex==index?`{styles.btn}`:`{styles.btn} {styles.btn_active}`}>
