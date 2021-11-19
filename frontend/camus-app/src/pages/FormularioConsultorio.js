import React, {useState} from 'react'
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import { CreateConsultorio } from '../api/CAMUSAPI';
import { useAuth0 } from '../hooks/react-auth0-spa';
import { Link } from 'react-router-dom';




const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
  }));

export default function FormularioConsultorio() {

  const [consultorio, setConsultorio] = useState({
    descripcion:"",
    ubicacion:"",
    hora_apertura:"",
    hora_cierre:"",
    precio_consulta:""
});

const handleChange = (e) => {
  const {name, value} = e.target;
  setConsultorio({
      ...consultorio,
      [name]:value
  });
};

const {getTokenSilently} = useAuth0();

const handleSubmit = async (e) => {
  const token = await getTokenSilently();
  e.preventDefault();
  console.log("submit", consultorio);
  await CreateConsultorio(consultorio, token);
   alert("Se ha agregado nuevo consultorio");
};

    return (
        <Container>
           <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:2}}>
                    Datos del Consultorio
            </Typography>

            <form onSubmit={handleSubmit} autocomplete="off">

            <FormControl fullWidth sx={{m:1, mt:2}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="descripcion" label="Descripción del consultorio:" variant="outlined" required
            onChange={handleChange} value={consultorio.descripcion}></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1, mt:2}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="ubicacion" label="Ubicación del consultorio:" variant="outlined" required
            onChange={handleChange} value={consultorio.ubicacion}></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="hora_apertura" label="Hora de apertura:" variant="outlined" required
            onChange={handleChange} value={consultorio.hora_apertura}></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="hora_cierre" label="Hora de cierre:" variant="outlined" required
            onChange={handleChange} value={consultorio.hora_cierre}></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} type="number" name="precio_consulta" label="Precio por Consulta:" variant="outlined" required
            onChange={handleChange} value={consultorio.precio_consulta}></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} type="file" name="imagen_consultorio" label="Agregar imagen:" variant="outlined" ></TextField>
            </FormControl>

            <FormControl sx={{m:1, mb:5}}>
            <ColorButton type="submit" variant="contained">Guardar Cambios del consultorio</ColorButton>
            </FormControl>


            
           </form>
     
     
           <Link to="/ExplorarConsultorios" sx={{m:2, mb:5}} color="#4d9296">
              Volver a la lista de consultorios
            </Link>
            <br/>
            <br/>

        </Container>
    )
}
