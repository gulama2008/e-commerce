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
