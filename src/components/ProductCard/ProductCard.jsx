import React, { useState } from 'react'
import styles from './ProductCard.module.scss'
import { Link, NavLink } from 'react-router-dom';
import { toFloat } from '../../services/data-service';
import { changeFavouriteStatusById } from '../../services/products-service';
import fav2 from '../../assets/fav2.png';
import fav3 from "../../assets/fav3.png";
const ProductCard = ({ product }) => {
  const [isFavourite, setIsFavourite] = useState(product.isFavourited);
  console.log(product);
  console.log(isFavourite);
  const changeFavourite = () => { 
    setIsFavourite(!isFavourite);
    changeFavouriteStatusById(product.id, !isFavourite);
  }
  return (
    <div className={ styles.container}>
      <Link to={`${product.id}`} className={styles.card}>
        <img className={styles.img} src={product.image} alt="" />
        <p className={styles.card_name}>{product.name}</p>
        <p className={styles.card_price}>${toFloat(product.price)}</p>

        {/* {isFavourite ? <img src='src/assets/fav3.png' className={styles.fav} /> : <img src='src/assets/fav2.png' className={ styles.fav} />} */}
      </Link>
      <img
        src={isFavourite ? fav3 : fav2}
        alt=""
        className={styles.fav}
        onClick={changeFavourite}
      />
    </div>
  );
}

export default ProductCard