import React, { useContext, useState } from 'react'
import styles from './ProductPage.module.scss'
import { ProductsContext } from '../../context/ProductsContextProvider';
import { saveItemsToSessionStorage, toFloat } from '../../services/data-service';
import { NavLink } from 'react-router-dom';
const ProductPage = ({ product,category }) => {
  const { itemsInCart,updateCart } = useContext(ProductsContext);
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
    const index = e.target.getAttribute('index');
    setActiveSizeIndex(index);
    setQuantity(product.quantity[index]);
    
  }
  const changeQuantityPurchase = (e) => {
    setQuantityAdd(parseInt(e.target.value))
  }
  const addToCart = () => { 
    setIsAddedToCart(true);
    // setQuantity(quantity - parseInt(quantityAdd));
    setQuantityAdd(1);
    setQuantityInCart(quantityInCart + parseInt(quantityAdd));
    const newItem = {
      ...product,
      size: product.size[activeSizeIndex],
      quantity: quantityAdd,
      stock: quantity
    };
    console.log(newItem);
    // saveItemsToSessionStorage(newItem);
    updateCart(newItem);
  }
  console.log(itemsInCart);
  // updateCart({id:123,size:12,quantity:5})
  return (
    <div>
      <div className={styles.container}>
        <img src={product.image} alt="" className={styles.img} />
        <div className={styles.info}>
          <p>{product.name}</p>
          <p>${toFloat(product.price)}</p>
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
          <p>In stock: {quantity} left</p>
          <input
            type="number"
            min={1}
            max={quantity}
            value={quantity == 0 ? 0 : quantityAdd}
            onChange={changeQuantityPurchase}
          />
          {quantity == 0 && <p>Sorry, no stock left</p>}
          <button onClick={addToCart} disabled={ quantity==0}>Add to Cart</button>
        </div>
      </div>
      <NavLink to={`/${category}`}>Back</NavLink>
    </div>
  );
}

export default ProductPage

// className={ activeSizeIndex==index?`{styles.btn}`:`{styles.btn} {styles.btn_active}`}>