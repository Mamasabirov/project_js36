import React, { createContext, useContext } from 'react';
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
    const addProduct = async(newProduct) => {
        await axios.post(API_PRODUCTS, newProduct)
    }
    const values = {
        addProduct
}
    return (
       <productContext.Provider value={values}>{children}</productContext.Provider>
    );
};

export default ProductContextProvider;