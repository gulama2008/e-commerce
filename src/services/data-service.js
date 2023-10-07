export const getItemsInCart = () => {
    const currentItemsInCart = JSON.parse(window.sessionStorage.getItem("cart"));
  return currentItemsInCart?currentItemsInCart:[];
}

export const saveItemsToSessionStorage = (itemsInCart) => {
  // let itemsList = [];
  // const currentItemsInCart = window.sessionStorage.getItem("cart");
  // if (currentItemsInCart) {
  //   itemsList = JSON.parse(currentItemsInCart);
  // }
  // itemsList.push(newItems);
  window.sessionStorage.setItem("cart", JSON.stringify(itemsInCart));
};

export const toFloat = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
