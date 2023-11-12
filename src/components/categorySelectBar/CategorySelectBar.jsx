import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const categories = [
  {id: 1, title: 'Телефоны'},
  {id: 2, title: 'Ноутбуки'},
  {id: 3, title: 'Аксессуары'},
  {id: 4, title: 'Приставки'},
  
]

export default function CategorySelectBar() {
  return (
      <AppBar sx={{backgroundColor: 'black'}} position='sticky'>
        <Toolbar>
              {categories.map((category) => 
                <Button sx={{color: "white"}} key={category.id}>
                  {category.title}
                  </Button>
              )}
        </Toolbar>
      </AppBar>
  );
}