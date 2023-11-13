import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useNavigate } from 'react-router';

export default function ProductCard({item}) {
    const {deleteProduct} = useProducts()
    const navigate = useNavigate()
  return (
    <Card sx={{ width: 250, margin: '10px' }}>
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
        <Button onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
        <Button onClick={()=>deleteProduct(item.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}