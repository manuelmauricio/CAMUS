import React from 'react'
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';



const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
  }));

export default function FormularioMensaje() {
    return (
        <Container>


           <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:2}}>
                   Escriba un mensaje:
            </Typography>

            <form>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="idfk_destinatario" label="Destinatario:" variant="outlined" required></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="texto" label="Mensaje:" variant="outlined" required></TextField>
            </FormControl>

            <FormControl sx={{m:1, mb:5}}>
            <ColorButton type="submit" variant="contained">Enviar</ColorButton>
            </FormControl>

            
           </form>
        </Container>
    )
}
