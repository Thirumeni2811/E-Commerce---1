import * as React from 'react';
import MUIList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

export default function ContactList() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  const DrawerContents = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {ProductList.map((product, index) => (
          <ListItem
            key={index}
            button
            onClick={() => handleProductClick(product)}
          >
            <ListItemText primary={product.product} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <MUIList
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' , cursor: 'pointer'}}
        aria-label="contacts"
      >
        <h1 onClick={toggleDrawer(true)}>Products</h1>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AutoAwesomeIcon />
            </ListItemIcon>
            <ListItemText primary="T-Shirt" />
            <Button variant="contained" color="success">
              New
            </Button>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Pants" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Jersey" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Team Shirt" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Shorts" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Lycra Pants" />
            <Button color="secondary">Exclusive</Button>
          </ListItemButton>
        </ListItem>
      </MUIList>

      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {selectedProduct && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">{selectedProduct.product}</Typography>
            <Typography variant="body1">Color: {selectedProduct.color}</Typography>
            <Button onClick={toggleDrawer(false)}>Close</Button>
          </Box>
        )}
        {!selectedProduct && DrawerContents}
      </Drawer>
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
