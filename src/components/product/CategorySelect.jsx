import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CategorySelect({handleInput, product}) {
  const [category, setCategory] = React.useState('');


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="category"
          onChange={handleInput}
          label="Category"
          defaultValue={""}
        >
          <MenuItem value='Телефоны'>Телефоны</MenuItem>
          <MenuItem value='Ноутбуки'>Ноутбуки</MenuItem>
          <MenuItem value='Аксессуары'>Аксессуары</MenuItem>
          <MenuItem value='Приставки'>Приставки</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}