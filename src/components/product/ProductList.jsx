import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import ProductCard from './ProductCard';
import { Box } from '@mui/system';
import { useSearchParams } from 'react-router-dom';
import PaginationControlled from './Pagination';

const ProductList = () => {
    const {getProducts, products} = useProducts()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        getProducts()
    }, [searchParams])
    // Pagination
    const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const itemPerPage = 3;
  const count = Math.ceil(products.length / itemPerPage);

  function currentData() {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;

    return products.slice(begin, end);
  }
  
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '75%', margin: 'auto'}}>
            {currentData().map((item) =>          
                  <ProductCard key={item.id} item={item}/>
            )}
            <PaginationControlled 
            count = {count}
            page={page}
            handleChange={handleChange}
            />
        </Box>
    );
};

export default ProductList;