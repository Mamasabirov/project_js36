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
    const[error, setError] = useState(false)
   
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
    return (
        <Box sx={{ width: '50vw', height: 400, margin: '20px auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <TextField onChange={handleInput} name='title' label="Title" fullWidth variant="outlined" />
            <TextField onChange={handleInput} name='description' label="Description" fullWidth variant="outlined" />
            <CategorySelect product={product} handleInput={handleInput}/>
            <TextField onChange={handleInput} name='image' label="Image URL" fullWidth variant="outlined" />
            <TextField onChange={handleInput} type='number' name='price' label="Price" fullWidth variant="outlined" />
            <Button onClick={()=>{
               if(!product.title || !product.description || !product.category || !product.image || !product.price){
                setError(true)
                return
               }
              addProduct(product)
            navigate('/products')}}>Добавить продукт</Button>
            {error ? (<p style={{color: "red"}}>Заполните поля чтобы добавить продукт</p>) : ("")}
        </Box>
    );
};

export default AddProduct;