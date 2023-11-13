import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import iphone from '../assets/iphone-15.png'
import './Catalog.css'


export default function Catalog() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'black', color: 'white'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            IPHONE
        </Typography>
        <Typography variant="body2" color="white">
            Инновационный, стильный, мощный.
        </Typography>
        <CardMedia
        sx={{
            height: 300,
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.2s', 
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        image={iphone}
        title="IPHONE"
      />
      </CardContent>
      <CardActions sx={{justifyContent: 'flex-end'}}>
        <Button size="small" sx={{ backgroundColor: '#007bff', color: '#ffffff'}} className='button'>Выбрать</Button>
      </CardActions>
    </Card>
    
  );
}