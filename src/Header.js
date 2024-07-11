import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const items = [
  {
    id: 1,
    title: 'Standard license',
    description: 'Full resolution 1920x1080 • JPEG',
    imageUrl: '/static/images/grid/complex.jpg',
    price: '$19.00',
  },
  {
    id: 2,
    title: 'Standard license',
    description: 'Full resolution 1920x1080 • JPEG',
    imageUrl: '/static/images/grid/complex.jpg',
    price: '$19.00',
  },
];

const Header = () => {
  return (
    <>
    <section>
      {items.map((item) => (
        <Paper
          key={item.id}
          sx={{
            p: 2,
            margin: '2rem',
            maxWidth: 500,
            flexGrow: 1,
            color: 'white',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#fff' : '#0A0127',
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt={item.title} src={item.imageUrl} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {item.description}
                  </Typography>
                  <Typography variant="body2">
                    ID: {item.id}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    View
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  {item.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </section>
    </>
  );
};

export default Header;
