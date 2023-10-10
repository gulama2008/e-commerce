import React, { useContext, useState } from "react";
import styles from "./ProductPage.module.scss";
import { ProductsContext } from "../../context/ProductsContextProvider";
import { toFloat } from "../../services/data-service";
import { NavLink } from "react-router-dom";
import {
  changeFavouriteStatusById,
  updateStock,
} from "../../services/products-service";
import fav2 from "../../assets/fav2.png";
import fav3 from "../../assets/fav3.png";
const ProductPage = ({ product, category }) => {
  const { itemsInCart, updateCart, changeItemQuantityInCart } =
    useContext(ProductsContext);
  const [activeSizeIndex, setActiveSizeIndex] = useState(null);
  const [isSizeChosen, setIsSizeChosen] = useState(true);
  const [quantity, setQuantity] = useState(product.quantity[0]);
  const [quantityAdd, setQuantityAdd] = useState(1);
  const [quantityInStock, setQuantityInStock] = useState(product.quantity);
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [isFavourite, setIsFavourite] = useState(product.isFavourited);

  const onClickSizeButton = (e) => {
    setQuantityAdd(1);
    setIsSizeChosen(true);
    const index = e.target.getAttribute("index");
    setActiveSizeIndex(index);
    setQuantity(product.quantity[index]);
  };
  const changeQuantityPurchase = (e) => {
    setQuantityAdd(parseInt(e.target.value));
  };
  const increaseQuantity = (e) => {
    if (!activeSizeIndex) {
      setIsSizeChosen(false);
      return;
    }
    setQuantityAdd(quantityAdd + 1);
  };
  const decreaseQuantity = (e) => {
    if (!activeSizeIndex) {
      setIsSizeChosen(false);
      return;
    }
    setQuantityAdd(quantityAdd - 1);
  };
  const addToCart = () => {
    if (!activeSizeIndex) {
      setIsSizeChosen(false);
      return;
    }
    setQuantity(quantity - parseInt(quantityAdd));
    setQuantityInCart(quantityInCart + parseInt(quantityAdd));
    const newItem = {
      ...product,
      size: product.size[activeSizeIndex],
      quantity: quantityAdd,
      stock: quantity,
    };
    const newQuantityArray = [...quantityInStock];
    newQuantityArray[activeSizeIndex] =
      newQuantityArray[activeSizeIndex] - parseInt(quantityAdd);
    setQuantityInStock(newQuantityArray);
    updateStock(product.id, newQuantityArray);
    updateCart(newItem);
    setQuantityAdd(1);
  };
  const changeFavourite = () => {
    setIsFavourite(!isFavourite);
    changeFavouriteStatusById(product.id, !isFavourite);
  };
  console.log(itemsInCart);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <img src={product.image} alt="" className={styles.img} />
        <div className={styles.info}>
          <p className={styles.info_name}>{product.name}</p>
          <img
            src={isFavourite ? fav3 : fav2}
            alt=""
            className={styles.fav}
            onClick={changeFavourite}
          />
          <p className={styles.info_price}>${toFloat(product.price)}</p>
          <div>
            {product.size.map((size, index) => {
              return (
                <button
                  key={index}
                  index={index}
                  onClick={onClickSizeButton}
                  className={
                    index == activeSizeIndex ? styles.btn_active : styles.btn
                  }
                >
                  {size}
                </button>
              );
            })}
          </div>
          {activeSizeIndex !== null && (
            <p className={styles.info_stock}>
              In stock: {quantityInStock[activeSizeIndex]} left
            </p>
          )}
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
              value={quantityAdd}
              onChange={changeQuantityPurchase}
            />
            <button
              className={styles.quantity_btn}
              onClick={increaseQuantity}
              disabled={quantityAdd == quantity}
            >
              +
            </button>
            {quantity == 0 && (
              <p className={styles.outOfStock}>
                Sorry, this product is out of stock
              </p>
            )}
          </div>
          <div className={styles.add}>
            <button
              onClick={addToCart}
              disabled={quantity == 0}
              className={styles.add_btn}
            >
              ADD TO CART
            </button>
            {!isSizeChosen && (
              <p className={styles.warning}>Please choose a size</p>
            )}
          </div>
        </div>
      </div>
      <NavLink to={`/${category}`}>
        <button className={styles.back}>back</button>
      </NavLink>
    </div>
  );
};

export default ProductPage;
