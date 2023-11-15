import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router";
import { ADMIN } from "../../helpers/consts";
import { useAuth } from "../../contexts/AuthContextProvider";

export default function ProductCard({ item }) {
  const {
    user: { email },
  } = useAuth();
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 250, margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
          <IconButton></IconButton>
        )}
      </CardActions>
    </Card>
  );
}
