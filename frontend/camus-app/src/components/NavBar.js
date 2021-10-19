import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { List } from '@mui/material';
import { Link } from 'react-router-dom';



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
  marginTop:"10px",
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
    color: "#b5d1d3",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
  }));

export default function NavBar(props) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#4d9296' }}>
        <Toolbar >
        <Grid container spacing={3}>
            <Grid item xs={4}>
            <a href="/">
              <img
              src='LogoCamus.png'
              alt="CAMUS"
              loading="Camus"
              />
            </a>
              
            </Grid>
            <Grid item xs={4}>

                <List>
                {[
                    {
                      text: "Inicio",
                      url: "/",
                    },
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
          
          <ColorButton variant="text"component={Link} to={"/login"}>Iniciar Sesión</ColorButton>  
          </Box>
          

            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
      <img src='LogoCamus.png' alt="CAMUS" loading="Camus" width="100%" height="200px"/>

      <Box component="main">
      
        {props.children}
      </Box>
    </Box>
  );
}
