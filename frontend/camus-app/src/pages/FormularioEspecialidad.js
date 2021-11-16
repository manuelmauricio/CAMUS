import React, {useState} from 'react'
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import { CreateEspecialidad } from '../api/CAMUSAPI';


const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
  }));

export default function FormularioEspecialidad() {
  
  const [especialidad, setEspecialidad] = useState({
    nombre:"",
    descripcion:""
});

const handleChange = (e) => {
  const {name, value} = e.target;
  setEspecialidad({
      ...especialidad,
      [name]:value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("submit", especialidad);
  await CreateEspecialidad(especialidad);
   alert("Se ha agregado nueva especialidad");
};

    return (
        <Container>


           <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:2}}>
                   Agregar Especialidad:
            </Typography>

            <form onSubmit={handleSubmit}>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="nombre" label="Nombre de la nueva especialidad:" variant="outlined" required
            onChange={handleChange} value={especialidad.nombre}></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="descripcion" label="Descripción:" variant="outlined" required 
            onChange={handleChange} value={especialidad.descripcion}></TextField>
            </FormControl>

            <FormControl sx={{m:1, mb:5}}>
            <ColorButton type="submit" variant="contained">Guardar</ColorButton>
            </FormControl>

            
           </form>
        </Container>
    )
}
