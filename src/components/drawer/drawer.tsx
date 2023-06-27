import { useState } from 'react';
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
            <ListItem
              style={{
                width:'96%',
                color: 'black', // Cambia el color del texto a negro
                background: " radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,220,0,1) 83%)",
                padding: '1px', // Añade un espacio de relleno de 1px alrededor del ListItem
                borderRadius: 7, // Agrega bordes redondeados al ListItem
                boxShadow: '0 2px 4px 2px rgba(0, 0, 0, 0.2)', // Agrega una sombra más intensa al ListItem
                fontSize: '28px', // Cambia el tamaño de fuente a 28px
                fontWeight: 'bold', // Aplica un estilo de fuente en negrita al texto
                textAlign: 'center', // Centra el texto dentro del ListItem
                textTransform: 'uppercase', // Transforma el texto a mayúsculas
                margin: '5px', // Agrega un margen de 5px alrededor del ListItem
                lineHeight: '1.5', // Ajusta el espacio entre líneas del texto
                cursor: 'pointer', // Cambia el cursor al pasar sobre el ListItem
                transition: 'background-color 0.3s ease', // Agrega una transición suave al cambiar el color de fondo
              }}
              disablePadding
            >

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

        <Typography variant="h6" sx={{ color:"black",textAlign: 'center', width: '100%' }}>
          MEGAFIESTAS DEL LLANO
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