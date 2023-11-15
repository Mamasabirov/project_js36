import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useSearchParams } from 'react-router-dom';
import { TextField } from '@mui/material';

const categories = [
  {id: 1, title: 'Телефоны'},
  {id: 2, title: 'Ноутбуки'},
  {id: 3, title: 'Аксессуары'},
  {id: 4, title: 'Планшеты'},
]


export default function CategorySelectBar() {
  const {fetchByParams, categoryToNavigate, setCategoryToNavigate} = useProducts()
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = React.useState(searchParams.get('q') || '');
  

  React.useEffect(() => {
    if(!categoryToNavigate){
      return
    }
    setSearchParams({
      q: search,
    })
   
  }, [search]);
  return (
      <AppBar sx={{backgroundColor: 'black', color: 'white'}} position='sticky'>
        <Toolbar >
              <TextField
              sx={{input: {color: 'white'}, backgroundColor: 'gray', borderRadius: '5px'}}
              onChange={(e)=>{
                setCategoryToNavigate(true)
                setSearch(e.target.value)
              }}
              value={search}
              label='Search'
              variant='filled'
              color='secondary'
              
              />
              {categories.map((category) => 
                <Button  onClick={() => fetchByParams('category', category.title)} sx={{color: "white", marginX: {sx: '20px', md: '70px'}}} key={category.id}>
                  {category.title}
                  </Button>
              )}
        </Toolbar>
      </AppBar>
  );
}