import { Box, Button, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams, useNavigate } from "react-router";
import { Category } from "@mui/icons-material";
import CategorySelect from "./CategorySelect";
import tema from "../../assets/cotalog.jpg";

const EditProduct = () => {
  const { saveChanges, oneProduct, getOneProduct } = useProducts();
  const [error, setError] = useState(false)
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    price: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);
  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  return (
    <div
      style={{
        backgroundImage: "url(" + tema + ")",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "50vw",
          height: 400,
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <TextField
          value={product.title}
          onChange={handleInput}
          name="title"
          label="Title"
          fullWidth
          variant="outlined"
        />
        <TextField
          value={product.description}
          onChange={handleInput}
          name="description"
          label="Description"
          fullWidth
          variant="outlined"
        />
        <CategorySelect product={product} handleInput={handleInput} />
        <TextField
          value={product.image}
          onChange={handleInput}
          name="image"
          label="Image URL"
          fullWidth
          variant="outlined"
        />
        <TextField
          value={product.price}
          onChange={handleInput}
          name="price"
          label="Price"
          fullWidth
          variant="outlined"
        />
        <Button
          style={{
            fontFamily: "600",
            fontSize: "24px",
            color: "black",
            backgroundColor: "#5F9EA0",
            borderRadius: "15px",
          }}
          onClick={() => {
            if(!product.title || !product.description || !product.category || !product.image || !product.price){
                setError(true)
                return
               }
            saveChanges(id, product);
            navigate("/products");
          }}
        >
          Сохранить
        </Button>
        {error ? (<p style={{color: "red"}}>Заполните поля чтобы сохранить изменения</p>) : ("")}
      </Box>
    </div>
  );
};

export default EditProduct;
