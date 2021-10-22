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

export default function FormularioAnalisis() {
    return (
        <Container>


           <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:2}}>
                    Analisis:
            </Typography>

            <form>

            <FormControl fullWidth sx={{m:1, mt:2}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="idfk_paciente" label="Paciente:" variant="outlined" required></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1, mt:2}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="asunto" label="Asunto:" variant="outlined" required></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1, mt:2}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="descripcion" label="Descripción:" variant="outlined" required></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} type="date" name="fecha" label="Fecha:" variant="outlined" required></TextField>
            </FormControl>

            <FormControl sx={{m:1, mb:5}}>
            <ColorButton type="submit" variant="contained">Guardar</ColorButton>
            </FormControl>

            
           </form>
        </Container>
    )
}
