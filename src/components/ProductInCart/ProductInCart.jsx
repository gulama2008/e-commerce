import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";
import styles from "./ProductInCart.module.scss";
import { toFloat } from "../../services/data-service";
import QuantityButton from "../QuantityButton/QuantityButton";
import { updateStock } from "../../services/products-service";
import deleteIcon from "../../assets/delete.png";
/* eslint-disable react/prop-types */
const ProductInCart = ({ item, isLastItem, index }) => {
  const { itemsInCart, deleteItemInCart, products } =
    useContext(ProductsContext);
  const [quantityInCart, setQuantityInCart] = useState(item.quantity);
  let containerClasses = styles.container;
  if (!isLastItem) {
    containerClasses += ` ${styles.withBottomBorder}`;
  }
  const deleteItem = () => {
    const itemAddBack = products.find((product) => product.id == item.id);
    const sizeIndex = itemAddBack.size.findIndex((size) => size == item.size);
    itemAddBack.quantity[sizeIndex] += item.quantity;
    updateStock(itemAddBack.id, itemAddBack.quantity);
    const copy = [...itemsInCart];
    copy.splice(index, 1);
    deleteItemInCart(copy);
  };

  return (
    <div className={containerClasses}>
      <div className={styles.main}>
        <img src={item.image} alt="" className={styles.img} />
        <div className={styles.info}>
          <p>{item.name}</p>
          <p className={styles.info_small}>Size: {item.size}</p>
          <p className={styles.info_small}>
            Unit price: ${toFloat(item.price)}
          </p>
          <p className={styles.info_small}>Stock: {item.stock} left</p>
        </div>
      </div>

      <div className={styles.edit}>
        <img
          src={deleteIcon}
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
