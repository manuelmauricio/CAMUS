import React, {useState} from 'react'
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import { CreateLaboratorio } from '../api/CAMUSAPI';


const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
  }));

export default function FormularioLaboratorio() {

  const [laboratorio, setLaboratorio] = useState({
    descripcion:"",
    ubicacion:"",
    hora_apertura:"",
    hora_cierre:"",
    precio_consulta:""
});

const handleChange = (e) => {
  const {name, value} = e.target;
  setLaboratorio({
      ...laboratorio,
      [name]:value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("submit", laboratorio);
  await CreateLaboratorio(laboratorio);
   alert("Se ha agregado nueva laboratorio");
};

    return (
        <Container>
           <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:2}}>
                    Datos del Laboratorio
            </Typography>

            <form onSubmit={handleSubmit}>

            <FormControl fullWidth sx={{m:1, mt:2}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="descripcion" label="Descripción del laboratorio:" variant="outlined" required
            onChange={handleChange} value={laboratorio.descripcion}></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1, mt:2}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="ubicacion" label="Ubicación del laboratorio:" variant="outlined" required
            onChange={handleChange} value={laboratorio.ubicacion}></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="hora_apertura" label="Hora de apertura:" variant="outlined" required
            onChange={handleChange} value={laboratorio.hora_apertura}></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="hora_cierre" label="Hora de cierre:" variant="outlined" required
            onChange={handleChange} value={laboratorio.hora_cierre}></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} type="number" name="precio_consulta" label="Precio por Exámen:" variant="outlined" required
            onChange={handleChange} value={laboratorio.precio_consulta}></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} type="file" name="imagen_consultorio" label="Agregar imagen:" variant="outlined" ></TextField>
            </FormControl>

            <FormControl sx={{m:1, mb:5}}>
            <ColorButton type="submit" variant="contained">Guardar Cambios del Laboratorio</ColorButton>
            </FormControl>

            
           </form>
        </Container>
    )
}
