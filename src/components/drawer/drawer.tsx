import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import RutasMegafiestas from '../../routes/rutas';

const drawerWidth = 240;

const links = ['Inicio', 'Paquetes', 'Servicios', 'Info General', 'Contacto'];

const ResponsiveDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderDrawer = () => (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {links.map((text, index) => (
          <Link key={index} to={`/${text.toLowerCase()}`} style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text.toUpperCase()} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );

  const renderAppBar = () => (
    <AppBar position="fixed" sx={{ backgroundColor: '#ffdc00', height: 64 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          MEGAFIESTAS
        </Typography>
      </Toolbar>
    </AppBar>
  );

  const renderGrid = () => (
    <Grid container spacing={0} justifyContent="center">
      <Grid item xs={12} sm={10} md={8}>
        <RutasMegafiestas />
      </Grid>
    </Grid>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {renderAppBar()}
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {renderDrawer()}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {renderDrawer()}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, height: '100%', overflow: 'auto' }}>
        <Toolbar />
        {renderGrid()}
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;