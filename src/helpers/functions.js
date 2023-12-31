
export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return cart;
};


export const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => (acc += curr.subPrice), 0);

  return totalPrice;
};

export const calcSubPrice = (product) => {
  return +product.item.price * product.count;
};

export const getProductsCountInCart = () => {
  let cart = getLocalStorage();
  return cart ? cart.products.length : 0;
};
