import React, { useContext } from 'react'
import ProductInCart from '../../components/ProductInCart/ProductInCart'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import { ProductsContext } from '../../context/ProductsContextProvider';

const CartPageLoader = () => {
    const { itemsInCart } = useContext(ProductsContext);
    console.log(itemsInCart);
    // useEffect(() => {}, []);
  return (
      <div>
          <ProductInCart />
          <OrderDetail/>
    </div>
  )
}

export default CartPageLoader