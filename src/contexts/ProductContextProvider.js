import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS, API_PRODUCTS } from '../helpers/consts';
import axios from 'axios';
export const productContext = createContext()
export const useProducts = () => useContext(productContext)

const INIT_STATE = {
    products: []
}

const reducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCTS:
            return {...state, products: action.payload}
        default:
            break;
    }
}
   
const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const addProduct = async(newProduct) => {
        await axios.post(API_PRODUCTS, newProduct)
    }
    
      const getProducts = async () => {
    const result = await axios.get(`${API_PRODUCTS}${window.location.search}`);
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: result.data });
  };


    const values = {
        addProduct,
        getProducts,
        products: state.products
}
    return (
       <productContext.Provider value={values}>{children}</productContext.Provider>
    );
};

export default ProductContextProvider;