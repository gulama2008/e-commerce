import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/products-service';
import ProductPage from '../../pages/ProductPage/ProductPage';

const ProductPageLoader = () => {
    const { id,category } = useParams();
    const [product, setProduct] = useState(null);
    const[isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
      setIsLoading(true);
      getProductById(id)
        .then((product) => setProduct(product))
        .catch((e) => setError(e.message))
        .finally(setIsLoading(false));
    }, []);
    return (
      <>
        {isLoading && <p>is loading...</p>}
        {error && <p>{error}</p>}
            {product && <ProductPage product={product} category={ category} />
            }
      </>
    );
}

export default ProductPageLoader