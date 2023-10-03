import React from 'react'
import styles from './CategoryCard.module.scss'
const CategoryCard = ({ children}) => {
  return (
    <div className={styles.card}>{children}</div>
  )
}

export default CategoryCard