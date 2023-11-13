import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
    const {addProduct} = useProducts()
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: ''
    })

    const handleInput = (e) => {
    if (e.target.name === 'price') {
      const obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
    }
    return (
        <Box sx={{width: '70%', margin: 'auto'}}>
            <TextField onChange={handleInput} name='title' label="Title" fullWidth variant="outlined" />
            <TextField onChange={handleInput} name='description' label="Description" fullWidth variant="outlined" />
            <TextField onChange={handleInput} name='price' label="Price" fullWidth variant="outlined" />
            <Button onClick={()=>addProduct(product)}>Add Product</Button>
        </Box>
    );
};

export default AddProduct;