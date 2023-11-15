import { Box, Button, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useNavigate } from 'react-router-dom';
import CategorySelect from './CategorySelect';

const AddProduct = () => {
    const {addProduct} = useProducts()
    const [product, setProduct] = useState({
        title: '',
        description: '',
        category: '',
        image: '',
        price: ''
    })
    const navigate = useNavigate()
    const handleInput = (e) => {
    if (e.target.name === 'price') {
      const obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
    }
    console.log(product);
    return (
        <Box sx={{ width: '50vw', height: 400, margin: '20px auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <TextField onChange={handleInput} name='title' label="Title" fullWidth variant="outlined" />
            <TextField onChange={handleInput} name='description' label="Description" fullWidth variant="outlined" />
            <CategorySelect product={product} handleInput={handleInput}/>
            <TextField onChange={handleInput} name='image' label="Image URL" fullWidth variant="outlined" />
            <TextField onChange={handleInput} name='price' label="Price" fullWidth variant="outlined" />
            <Button onClick={()=>{ addProduct(product)
            navigate('/products')}}>Add Product</Button>
        </Box>
    );
};

export default AddProduct;