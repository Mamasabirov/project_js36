import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import ProductCard from './ProductCard';
import { Box } from '@mui/system';

const ProductList = () => {
    const {getProducts, products} = useProducts()
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {products.map((item) =>          
                  <ProductCard item={item}/>
            )}
        </Box>
    );
};

export default ProductList;