import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Clothings from '../src/Assets/Clothings.webp'
import List from './List';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  marginTop: '1rem',
  marginBottom: '1rem',
  color: theme.palette.text.secondary,
}));

const Hero = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <List />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Item>
                <img src={Clothings} alt='Clothings' width='100%' height='387px'/>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Hero;
