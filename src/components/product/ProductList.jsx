import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import ProductCard from './ProductCard';
import { Box } from '@mui/system';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
    const {getProducts, products} = useProducts()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        getProducts()
    }, [searchParams])
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '75%', margin: 'auto'}}>
            {products.map((item) =>          
                  <ProductCard item={item}/>
            )}
        </Box>
    );
};

export default ProductList;