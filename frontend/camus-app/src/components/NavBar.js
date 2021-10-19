import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0, 5, 0, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#4d9296"),
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
  }));

export default function NavBar(props) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#4d9296' }}>
        <Toolbar >
        <Grid container spacing={3}>
            <Grid item xs={4}>
            <img
            src='LogoCamus.png'
            alt="CAMUS"
            loading="Camus"
            />
              
            </Grid>
            <Grid item xs={4}>

                <List>
                {[
                    {
                        text: "Conócenos",
                        url: "/Conocenos",
                    },
                    {
                        text: "Servicios",
                        url: "/Servicios",
                    },
                    {
                        text: "Directorio",
                        url: "/Directorio",
                    },
                    {
                        text: "Pacientes",
                        url: "/Pacientes",
                    },
                ].map((item, index) => (
                    <ColorButton variant="text"component={Link} to={item.url}>{item.text}</ColorButton>                
                ))}
                
                </List>




            </Grid>
            <Grid item xs>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'Buscar' }}
                />
          </Search>
          
          <Button color="inherit">Iniciar Sesión</Button>
          </Box>
          

            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
            
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        {props.children}
      </Box>
    </Box>
  );
}
