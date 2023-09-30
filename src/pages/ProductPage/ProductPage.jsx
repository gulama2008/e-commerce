import React, { useState } from 'react'
import styles from './ProductPage.module.scss'
const ProductPage = ({ product }) => {
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(product.quantity[0]);
  const [quantityAdd, setQuantityAdd] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantityInCart, setQuantityInCart] = useState(0);
  const onClickSizeButton = (e) => { 
    setQuantityAdd(1);
    const index = e.target.getAttribute('index');
    setActiveSizeIndex(index);
    setQuantity(product.quantity[index]);
    
  }
  const changeQuantityPurchase = (e) => {
    setQuantityAdd(e.target.value)
  }
  const addToCart = () => { 
    setIsAddedToCart(true);
    setQuantity(quantity - parseInt(quantityAdd));
    setQuantityAdd(0);
    setQuantityInCart(quantityInCart + parseInt(quantityAdd));
  }
  console.log(quantityInCart);
  return (
    <div>
      <img src={product.image} alt="" />
      <div>
        <p>{product.name}</p>
        <p>${product.price}</p>
        {product.size.map((size,index )=> { 
          return <button key={index} index={ index} onClick={onClickSizeButton} className={ styles.btn}>
            { size}
          </button>
        })}
        <p>In stock: { quantity} left</p>
        <input type="number" min={1} max={quantity} value={quantityAdd} onChange={changeQuantityPurchase}/>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductPage

// className={ activeSizeIndex==index?`{styles.btn}`:`{styles.btn} {styles.btn_active}`}>