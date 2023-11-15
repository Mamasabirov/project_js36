import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import { useProducts } from "../../contexts/ProductContextProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router";
import { ADMIN } from "../../helpers/consts";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useCart } from "../../contexts/CartContextProvider";

export default function ProductCard({ item }) {
  const {
    user: { email },
  } = useAuth();
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();
  return (
<<<<<<< HEAD
    <Card sx={{ width: 300, margin: "10px" }}>
=======
    <Card sx={{ width: {lg: '250px', sm: "350px", xs: "500px"}, margin: "10px" }}>
>>>>>>> ba74b6150844b20ae1b4155bd6cd7d240aac4e3a
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {email === ADMIN ? (
          <>
            <Button onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
            <Button onClick={() => deleteProduct(item.id)}>Delete</Button>
          </>
        ) : (
          <IconButton
            sx={{
              backgroundColor: checkProductInCart(item.id) ? "black" : "",
              color: checkProductInCart(item.id) ? "white" : "",
            }}
            onClick={() => addProductToCart(item)}
          >
            <AddShoppingCartIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
