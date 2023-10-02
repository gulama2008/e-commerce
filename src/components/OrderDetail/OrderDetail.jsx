import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContextProvider'
import styles from './OrderDetail.module.scss'
const OrderDetail = () => {
  const { itemsInCart } = useContext(ProductsContext);
  const total = itemsInCart.reduce((a, b) => { return a + b.price * b.quantity }, 0)
  const [deliveryCost, setDeliveryCost] = useState(5);
  const changeDelivery = () => { 
    setDeliveryCost(e.target.value);
  }
  return (
    <div className={styles.container}>
      <div className={styles.delivery_section}>
        <h3>Delivery Method</h3>
        <div className={styles.delivery}>
          <input
            type="radio"
            id="standard"
            name="delivery"
            value={5}
            checked={deliveryCost === 5}
            onChange={changeDelivery}
          />
          <label htmlFor="standard" className={styles.delivery_label}>
            <h4 className={styles.delivery_label_title}>
              Standard Shipping $5
            </h4>
            <span className={styles.delivery_label_desc}>
              Between 5-10 business days
            </span>
          </label>
        </div>
        <div className={styles.delivery}>
          <input
            type="radio"
            id="express"
            name="delivery"
            value={15}
            checked={deliveryCost === 15}
            onChange={changeDelivery}
          />
          <label htmlFor="express" className={styles.delivery_label}>
            <h4 className={styles.delivery_label_title}>
              Express Shipping $15
            </h4>
            <span className={styles.delivery_label_desc}>
              Between 1-3 business days
            </span>
          </label>
        </div>
        <div></div>
      </div>
      <div className={styles.summary_section}>
        <h3>Order Details</h3>
        <div className={styles.summary}>
          <span>Item Total</span>
          <span>${total}</span>
        </div>
        <div className={styles.summary}>
          <span>Delivery Cost</span>
          <span>${deliveryCost}</span>
        </div>
        <div className={styles.summary}>
          <span>Order Total</span>
          <span>${total + deliveryCost}</span>
        </div>
        <button>Check Out</button>
      </div>
    </div>
  );
}

export default OrderDetail