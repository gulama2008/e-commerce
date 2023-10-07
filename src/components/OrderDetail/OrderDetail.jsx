import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContextProvider'
import styles from './OrderDetail.module.scss'
import { toFloat } from '../../services/data-service';
import { NavLink } from 'react-router-dom';
const OrderDetail = () => {
  const { itemsInCart, setItemsInCart, itemsInSessionStorage } =
    useContext(ProductsContext);
  const [deliveryCost, setDeliveryCost] = useState(5);

  const changeDelivery = (e) => { 
    setDeliveryCost(parseInt(toFloat(e.target.value)));
  }

  const total = parseInt(
    itemsInSessionStorage.reduce((a, b) => {
      return a + b.price * b.quantity;
    }, 0)
  );
  const totalFloat = toFloat(total);
  const deliveryCostFloat = toFloat(deliveryCost);
  const payable = toFloat(total + deliveryCost);

  const proceedPurchase = () => { 
    setItemsInCart([]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.delivery_section}>
        <h3 className={styles.title}>Delivery Method</h3>
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
            <h4 className={styles.title}>Standard Shipping $5.00</h4>
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
            <h4 className={styles.title}>Express Shipping $15.00</h4>
            <span className={styles.delivery_label_desc}>
              Between 1-3 business days
            </span>
          </label>
        </div>
        <div></div>
      </div>
      <div className={styles.summary_section}>
        <h3 className={styles.title}>Order Details</h3>
        <div className={styles.summary}>
          <span>Item Total</span>
          <span>${totalFloat}</span>
        </div>
        <div className={styles.summary}>
          <span>Delivery Cost</span>
          <span>${deliveryCostFloat}</span>
        </div>
        <div className={[styles.summary, styles.summary_total].join(" ")}>
          <h4>Order Total</h4>
          <h4>${payable}</h4>
        </div>
        <NavLink to="/finish">
          <button className={styles.btn} onClick={proceedPurchase}>
            PROCEED TO CHECKOUT
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default OrderDetail