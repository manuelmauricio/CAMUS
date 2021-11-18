import React, {useState, useEffect, Fragment} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import { Container } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../hooks/react-auth0-spa';
import { GetAllConsultorios } from '../api/CAMUSAPI';
import { GetAllEspecialidad } from '../api/CAMUSAPI';
import { CreateUsuario } from '../api/CAMUSAPI';



const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
  }));

export default function RegistroDeUsuarios() {
  const [consultorios, setConsultorios] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);

  const [usuario, setUsuario] = useState({
    nombre:"",
    fecha_nacimiento:"",
    email:"",
    fkespecialidad:"",
    fkconsultorio:""
  });
  const {getTokenSilently} = useAuth0();

  useEffect(() => {
    async function fetchData(){
        const token = await getTokenSilently();
        const consultorioRes = await GetAllConsultorios(token);
        setConsultorios(consultorioRes);
        const especialidadRes = await GetAllEspecialidad(token);
        setEspecialidades(especialidadRes);
    } 
    fetchData();
   },[]);

   const handleChange = (e) => {
    const {name, value} = e.target;
    setUsuario({
        ...usuario,
        [name]:value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit", usuario);
    await CreateUsuario(usuario);
     alert("Se ha agregado nueva médico");
  };


    return (
        <Card sx={{ minWidth: 275, ml:30, mr:30, mt:5}}>
        <CardContent alignItems="center">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography sx={{ fontSize: 40 }} color="text.primary" gutterBottom>
            Registro de Médicos
          </Typography>
          </Box>
  
          <Container>
          <form onSubmit={handleSubmit}>

              <FormControl fullWidth sx={{m:1}}>
              <TextField name="nombre" label="Nombre Completo" variant="outlined" required
              onChange={handleChange} value={usuario.nombre}></TextField>
              </FormControl>

              <FormControl fullWidth sx={{m:1}}>
              <InputLabel id="demo-simple-select-label">Especialidad</InputLabel>
              <Select
              onChange={handleChange} value={usuario.fkespecialidad}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="fkespecialidad"
              label="Especialidad"
              required
              >
              {especialidades.map((item, index) =>(
              <MenuItem key={item._id} value={item._id}>{item.nombre}</MenuItem>
              ))}
              </Select>
              </FormControl>

              <FormControl fullWidth sx={{m:1}}>
              <InputLabel id="demo-simple-select-label">Consultorio</InputLabel>
              <Select
              onChange={handleChange} value={usuario.fkconsultorio}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="fkconsultorio"
              label="Consultorio"
              required
              >
              {consultorios.map((item, index) =>(
              <MenuItem key={item._id} value={item._id}>{item.descripcion}</MenuItem>
              ))}
              </Select>
              </FormControl>

              <FormControl fullWidth sx={{m:1}}>
              <TextField type="date" name="fecha_nacimiento" label="Fecha de nacimiento" variant="outlined" required
              onChange={handleChange} value={usuario.fecha_nacimiento} ></TextField>
              </FormControl>

              <FormControl fullWidth sx={{m:1}}>
              <TextField type="email" name="email" label="Correo electrónico:" variant="outlined" required 
              onChange={handleChange} value={usuario.email}></TextField>
              </FormControl>

              <FormControl fullWidth sx={{m:1}}>
              <TextField type="file" name="imagenchar" label="Foto de perfil:" variant="outlined" ></TextField>
              </FormControl>
  
              <FormControl fullWidth sx={{mt:3}}>
                     
              </FormControl>
  
              <Box display="flex" justifyContent="center" alignItems="center">
              <FormControl sx={{m:1}} >
              <ColorButton  type="submit" variant="contained">Registrar</ColorButton>
              </FormControl>
              </Box>
  
          </form>

          <Box display="flex" justifyContent="center" alignItems="center">
            <FormControl sx={{m:1}} >
            <Link to="/login" color="#4d9296">
              Iniciar Sesión
            </Link>
            </FormControl>
            </Box>
          </Container>
  
        </CardContent>
      </Card>
    )
}
