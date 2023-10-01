import React, { useContext } from 'react'
import Category from '../../components/CategoryCard/CategoryCard'
import { ProductsContext } from '../../context/ProductsContextProvider';

const CategoriesContainer = () => {
    // const { products } = useContext(ProductsContext);
  return (
    <div>
      {/* <Category filteredData={filterProductsByCategory(products, "romper")} />
      <Category filteredDat={filterProductsByCategory(products, "sleepwear")} />
      <Category filteredDat={filterProductsByCategory(products, "shoes")} /> */}
          <div>Rompers</div>
          <div>Sleepwears</div>
          <div>shoes</div>
    </div>
  );
}

export default CategoriesContainer