import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function Products() {
  return (
    <>
            <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={ProductList}
        getOptionLabel={(option) => option.product} 
        sx={{ width: 300 }}
        renderInput={(params) => 
        <TextField {...params} 
        label="Products" />}
    />
    </>
  );
}

const ProductList = [
  { product: 'T-shirt', color: 'Red' },
  { product: 'Pants', color: 'Blue' },
  { product: 'Jersey', color: 'Green' },
  { product: 'Team Shirt', color: 'Yellow' },
  { product: 'Shorts', color: 'Black' },
  { product: 'Lycra Pants', color: 'White' },
];
