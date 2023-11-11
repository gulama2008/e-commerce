import React, { useContext } from 'react'
import styles from './Finish.module.scss'
import { NavLink } from 'react-router-dom';
import finish from "../../assets/finish.png";

const Finish = () => {
  
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>THANK YOU!</h1>
        <p className={styles.sub_heading}>
          Your order has completed successfully
        </p>
        <img src={finish} alt="" />
        <NavLink to='/'>
          <button className={styles.back} >back</button>
        </NavLink>
      </div>
    );
}

export default Finish