import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tshirt from '../src/Assets/Tshirt.jpeg'
const Images = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        margin: '1rem',
        color: theme.palette.text.secondary,
      }));


  return (
    <div>
    <Box sx={{ width: 1 , backgroundColor: 'antiquewhite' , padding: '2rem 0rem' , textAlign: 'center' , fontSize:'1.5rem'}}>
        <h1 >Gallary</h1>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 4">
          <Item>
            <img src={Tshirt} alt='Tshirt' width='100%'/>
          </Item>
        </Box>
        <Box gridColumn="span 3">
          <Item>
            <img src={Tshirt} alt='Logo' width='100%' height='295px'/>
          </Item>
        </Box>
        <Box gridColumn="span 5">
          <Item>
          <img src={Tshirt} alt='Tshirt' width='100%' height='295px'/>
          </Item>
        </Box>
        <Box gridColumn="span 5">
          <Item>
            <img src={Tshirt} alt='Tshirt' width='100%' height='295px'/>
          </Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>
        <img src={Tshirt} alt='Tshirt' width='100%'/>
          </Item>
        </Box>
        <Box gridColumn="span 3">
          <Item>
            <img src={Tshirt} alt='Tshirt' width='100%' height='295px'/>
          </Item>
        </Box>
      </Box>
    </Box>
    </div>
  )
}

export default Images