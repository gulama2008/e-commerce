import React from 'react'
import styles from './Finish.module.scss'
import { NavLink } from 'react-router-dom';

const Finish = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>THANK YOU</h1>
        <p className={styles.sub_heading}>
          Your order has completed successfully
        </p>
        <img src="src/assets/finish.png" alt="" />
        <NavLink to='/'>
          <button className={styles.back}>back</button>
        </NavLink>
      </div>
    );
}

export default Finish