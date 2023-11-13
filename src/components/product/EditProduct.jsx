import { Box, Button, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useParams, useNavigate } from 'react-router';

const EditProduct = () => {
    const {saveChanges, oneProduct, getOneProduct} = useProducts()
    
    const [product, setProduct] = useState({
        title: '',
        description: '',
        category: '',
        image: '',
        price: ''
    })
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        getOneProduct(id)
    },[])
    useEffect(()=>{
       if(oneProduct){
        setProduct(oneProduct)
       }
    },[oneProduct])
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
        <Box sx={{ width: '50vw', height: 400, margin: '20px auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <TextField value={product.title} onChange={handleInput} name='title' label="Title" fullWidth variant="outlined" />
            <TextField value={product.description} onChange={handleInput} name='description' label="Description" fullWidth variant="outlined" />
            <Select/>
            <TextField value={product.image} onChange={handleInput} name='image' label="Image URL" fullWidth variant="outlined" />
            <TextField value={product.price} onChange={handleInput} name='price' label="Price" fullWidth variant="outlined" />
            <Button onClick={()=>{
                saveChanges(id, product)
                navigate('/products')
                }}>Save changes</Button>
        </Box>
    );
};

export default EditProduct;