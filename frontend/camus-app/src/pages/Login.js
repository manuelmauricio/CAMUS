import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import { Container } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';



const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
  }));

export default function Login() {
    return (
    <Card sx={{ minWidth: 275, ml:50, mr:50, mt:5}}>
      <CardContent alignItems="center">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography sx={{ fontSize: 40 }} color="text.primary" gutterBottom>
          LOGIN
        </Typography>
        </Box>

        <Container>
        <form>
            <FormControl fullWidth sx={{m:1}}>
            <TextField name="username" label="Nombre de Usuario" variant="outlined" required></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField type="password" name="password" label="Contraseña" variant="outlined" required ></TextField>
            </FormControl>

            <FormControl fullWidth sx={{mt:3}}>
                   
            </FormControl>

            <Box display="flex" justifyContent="center" alignItems="center">
            <FormControl sx={{m:1}} >
            <ColorButton  type="submit" variant="contained">Ingresar</ColorButton>
            </FormControl>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
            <FormControl sx={{m:1}} >
            <Link to="/RegistroDeUsuarios" color="#4d9296">
              ¿Aún no tienes cuenta? Registrate aquí.
            </Link>
            </FormControl>
            </Box>
        </form>
        </Container>

      </CardContent>
    </Card>
    )
}
