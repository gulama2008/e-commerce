export const filterProductsByCategory = (products,category) => { 
    return products.filter(product => product.type===category)
}