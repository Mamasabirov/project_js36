import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/consts";
import {
  calcTotalPrice,
  getLocalStorage,
  calcSubPrice,
  getProductsCountInCart,
} from "../helpers/functions";

export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getProductsCountInCart(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);


  const getCart = () => {
  
    let cart = getLocalStorage();

    if (!cart) {     
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
   
    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };
 
  const addProductToCart = (product) => {
  
    let cart = getLocalStorage();

 
    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }


    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

 
    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

   
    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

   
    cart.totalPrice = calcTotalPrice(cart.products);

    
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };

 
  const checkProductInCart = (id) => {
    let cart = getLocalStorage();

    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    }
  };

 
  const changeProductCount = (id, count) => {
   
    let cart = getLocalStorage();
  
    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });

    cart.totalPrice = calcTotalPrice(cart.products);


    localStorage.setItem("cart", JSON.stringify(cart));


    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const deleteProductFromCart = (id) => {
    let cart = getLocalStorage();
   
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
  
    cart.totalPrice = calcTotalPrice(cart.products);

   
    localStorage.setItem("cart", JSON.stringify(cart));
  
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const cartCleaner = () => {
 
    localStorage.removeItem("cart");
    dispatch({ type: ACTIONS.GET_CART, payload: { products: [], totalPrice: 0 } });
  };

  const values = {
    getCart,
    cart: state.cart,
    addProductToCart,
    checkProductInCart,
    changeProductCount,
    cartCleaner,
    deleteProductFromCart,
    getProductsCountInCart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
