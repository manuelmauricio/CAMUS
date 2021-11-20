import React, {useState, useEffect, Fragment} from 'react'
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import { CreateLaboratorio } from '../api/CAMUSAPI';
import { Link } from 'react-router-dom';
import { GetLaboratorio } from '../api/CAMUSAPI';
import { UpdateLaboratorio } from '../api/CAMUSAPI';
import { DeleteLaboratorio } from '../api/CAMUSAPI';
import {useParams} from "react-router-dom";
import { useAuth0 } from '../hooks/react-auth0-spa';




const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
  }));

export default function EditarLaboratorio() {
    const { id } = useParams();

  const [laboratorio, setLaboratorio] = useState({
    descripcion:"",
    detalle:"",
    ubicacion:"",
    hora_apertura:"",
    hora_cierre:"",
    precio_consulta:""
});

const {getTokenSilently} = useAuth0();

useEffect(() => {
    async function fetchData(){
        const token = await getTokenSilently();
        const laboratorioRes = await GetLaboratorio(id,token);
        setLaboratorio(laboratorioRes);
    } 
    fetchData();
   },[]);

const handleChange = (e) => {
  const {name, value} = e.target;
  setLaboratorio({
      ...laboratorio,
      [name]:value
  });
};

const handleSubmit = async (e) => {
    const token = await getTokenSilently();
  e.preventDefault();
  console.log("submit", laboratorio);
  await UpdateLaboratorio(id,laboratorio,token);
   alert("Se ha actualizado este laboratorio");
};

const handleClick = async (e) => {
    const token = await getTokenSilently();
    await DeleteLaboratorio(id,token);
     alert("Se ha borrado el registro de este laboratorio");
     window.location.href = 'http://localhost:3000/ExplorarLaboratorios';
  };

    return (
        <Container>
           <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:2}}>
                    Datos del Laboratorio
            </Typography>

            <form onSubmit={handleSubmit} autocomplete="off">

            <FormControl fullWidth sx={{m:1, mt:2}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="descripcion" label="Nombre del laboratorio:" variant="outlined" required
            onChange={handleChange} value={laboratorio.descripcion}></TextField>
            </FormControl>

            <FormControl fullWidth sx={{m:1, mt:2}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="detalle" label="Detalles sobre el laboratorio:" variant="outlined" required
            onChange={handleChange} value={laboratorio.detalle}></TextField>
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
            <ColorButton type="submit" variant="contained">Actualizar Cambios del Laboratorio</ColorButton>
            </FormControl>

            <FormControl sx={{m:1}} >
              <ColorButton onClick={handleClick} variant="contained">[X] Borrar Laboratorio</ColorButton>
              </FormControl>

              

           </form>

           <Link to="/ExplorarLaboratorios" sx={{m:1}} color="#4d9296">
              Volver a la lista de laboratorios
            </Link>
            <br/>
            <br/>
            <br/>
        </Container>
    )
}
