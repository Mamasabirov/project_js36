import React, { createContext, useContext, useReducer, useState } from 'react';
import { ACTIONS, API_PRODUCTS } from '../helpers/consts';
import axios from 'axios';
import { useNavigate } from 'react-router';
export const productContext = createContext()
export const useProducts = () => useContext(productContext)

const INIT_STATE = {
    products: [],
    oneProduct: null
}

const reducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCTS:
            return {...state, products: action.payload}
        case ACTIONS.GET_ONE_PRODUCT:
            return {...state, oneProduct: action.payload}
        default:
            break;
    }
}
   
const ProductContextProvider = ({children}) => {
    const [categoryToNavigate, setCategoryToNavigate] = useState(false)
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const navigate = useNavigate()
    const addProduct = async(newProduct) => {
        await axios.post(API_PRODUCTS, newProduct)
    }
    
      const getProducts = async () => {
    const result = await axios.get(`${API_PRODUCTS}${window.location.search}`);
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: result.data });
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API_PRODUCTS}/${id}`)
    getProducts()
  }
  const getOneProduct = async (id) => {
    const result = await axios.get(`${API_PRODUCTS}/${id}`);
    dispatch({ type: ACTIONS.GET_ONE_PRODUCT, payload: result.data });
  };

    const saveChanges = async (id, editedProduct) => {
    await axios.patch(`${API_PRODUCTS}/${id}`, editedProduct);
    navigate('/products');
  };
   
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value === 'all') {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };


    const values = {
        addProduct,
        getProducts,
        products: state.products,

        deleteProduct,
        oneProduct: state.oneProduct,
        getOneProduct,
        saveChanges,
        fetchByParams,

        setCategoryToNavigate,
        categoryToNavigate
}
    return (
       <productContext.Provider value={values}>{children}</productContext.Provider>
    );
};

export default ProductContextProvider;