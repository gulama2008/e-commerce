// export const getItemsInCart = () => { 
//     const currentItemsInCart = window.sessionStorage.getItem("cart");
//     return currentItemsInCart ? currentItemsInCart : [];
// }

export const saveItemsToSessionStorage = (newItems) => { 
    let itemsList = [];
    const currentItemsInCart = window.sessionStorage.getItem("cart");
    if (currentItemsInCart) {
      itemsList = JSON.parse(currentItemsInCart);
    }
    itemsList.push(newItems);
    window.sessionStorage.setItem("cart", JSON.stringify(itemsList));
}