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

export default function ModificarPerfilMedico() {
    return (
        <Container>

            <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:2}}>
                            Modificar Perfil Médico:
            </Typography>

            <form>
            <FormControl fullWidth sx={{m:1, mt:2}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="fkespecialidad" label="Especialidad" variant="outlined" required></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="descripcion" label="Agregue una descripción..." variant="outlined" required></TextField>
            </FormControl>

            <FormControl sx={{m:1, mb:5}}>
            <ColorButton type="submit" variant="contained">Guardar Cambios</ColorButton>
            </FormControl>
           </form>


           <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:2}}>
                            Modificar Datos del Consultorio:
            </Typography>

            <form>
            <FormControl fullWidth sx={{m:1, mt:2}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="ubicacion" label="Ubicación del consultorio:" variant="outlined" required></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="horario" label="Horario:" variant="outlined" required></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} type="number" name="precio_consulta" label="Precio por Consulta:" variant="outlined" required></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} type="file" name="imagen_consultorio" label="Agregar imagen:" variant="outlined" required></TextField>
            </FormControl>

            <FormControl sx={{m:1, mb:5}}>
            <ColorButton type="submit" variant="contained">Guardar Cambios</ColorButton>
            </FormControl>

            
           </form>
        </Container>
    )
}
