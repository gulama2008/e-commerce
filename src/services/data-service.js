export const getItemsInCart = () => {
    const currentItemsInCart = JSON.parse(window.sessionStorage.getItem("cart"));
  return currentItemsInCart?currentItemsInCart:[];
}

export const saveItemsToSessionStorage = (itemsInCart) => {
  window.sessionStorage.setItem("cart", JSON.stringify(itemsInCart));
};

export const toFloat = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const getQuantityInCart = () => { 
  const currentItemsInCart = getItemsInCart();
  if (currentItemsInCart.length === 0) { 
    return 0;
  }
  return currentItemsInCart.reduce((a, b) => {
    return a + b.quantity;
   },0)
}

export const getQuantity = (array,prop) => { 
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((a, b) => {
    return a + b[prop];
  }, 0);
}
