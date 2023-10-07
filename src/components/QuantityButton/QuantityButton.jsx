import React, { useContext, useState } from 'react'
import styles from './QuantityButton.module.scss'
import { ProductsContext } from '../../context/ProductsContextProvider';
import { updateStock } from '../../services/products-service';
const QuantityButton = ({ item,index, setQuantityInCart,quantityInCart}) => {
  const { products, changeItemQuantityInCart } =
    useContext(ProductsContext);
  const [quantity, setQuantity] = useState(quantityInCart);
  const changeQuantity = (e) => {
    setQuantity(e.target.value);
    setQuantityInCart(e.target.value);
    changeItemQuantityInCart(index, parseInt(e.target.value));
  };
  const increaseQuantity = (e) => {
    const itemToBeDeductFromStock = products.find((product) => product.id == item.id);
    const sizeIndex = itemToBeDeductFromStock.size.findIndex(
      (size) => size == item.size
    );
    itemToBeDeductFromStock.quantity[sizeIndex] -= 1;
    updateStock(itemToBeDeductFromStock.id, itemToBeDeductFromStock.quantity);
    setQuantity(quantityInCart + 1);
    setQuantityInCart(quantityInCart + 1);
    changeItemQuantityInCart(index, quantityInCart+1);
  };
  const decreaseQuantity = (e) => {
    const itemToBeAddToStock = products.find(
      (product) => product.id == item.id
    );
    const sizeIndex = itemToBeAddToStock.size.findIndex(
      (size) => size == item.size
    );
    itemToBeAddToStock.quantity[sizeIndex] += 1;
    updateStock(itemToBeAddToStock.id, itemToBeAddToStock.quantity);
    setQuantity(quantityInCart - 1);
    setQuantityInCart(quantityInCart - 1);
    changeItemQuantityInCart(index, quantityInCart - 1);
  };
  return (
  
      <div className={styles.container}>
        <button
          className={styles.container_btn}
          onClick={decreaseQuantity}
          disabled={quantity == 1}
        >
          -
        </button>
        <input
          type="text"
          className={styles.container_input}
          value={quantityInCart}
          onChange={changeQuantity}
        />
        <button
          className={styles.container_btn}
          onClick={increaseQuantity}
          disabled={quantity == item.stock}
        >
          +
        </button>
        {quantity == item.stock && (
          <p className={styles.warning}>
            You reach the maximum number of stock!
          </p>
        )}
      </div>
  );
}

export default QuantityButton