import React, {useState, useEffect, Fragment} from 'react';
import { Container } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead,
TableRow, Paper, Typography, Box, Button, Grid  } from '@mui/material';
import { GetAllUsuarios } from '../api/CAMUSAPI';
import { GetAllEspecialidad } from '../api/CAMUSAPI';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../hooks/react-auth0-spa';
import { styled, alpha } from '@mui/material/styles';


const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
}));

export default function ExplorarMedicos() {
    const [usuarios, setUsuarios] = useState([]);
    const [especialidades, setEspecialidades] = useState([]);
    const {getTokenSilently} = useAuth0();


    useEffect(() => {
        async function fetchData(){
            const token = await getTokenSilently();
            const usuarioRes = await GetAllUsuarios(token);
            setUsuarios(usuarioRes);
            const especialidadRes = await GetAllEspecialidad(token);
            setEspecialidades(especialidadRes);
        } 
        fetchData();
    },[]);

    return (
        <Container>

            <Grid container>
                <Grid xs>
                <Typography component="div" variant="h5" sx={{color:"#4d9296", mt:2}}>
                    Categorías:
            </Typography>
                    {especialidades.map((item, index) =>(
                    <Typography key={item._id}>- {item.nombre}</Typography>
                    ))}
                    <br/>
                    <Link to="/ExplorarCategorias" color="#4d9296">
                       Administrar categorías.......
                    </Link>
                </Grid>
            </Grid>

       <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:2}}>
                    Lista de Médicos
        </Typography>

                    
                    {usuarios.map((item, index) =>(
                    <div key={item._id}>
                    <Card  sx={{ display: 'flex', m:2 }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 250, margin:"15px", height:250}}
                    image="/avatar_placeholder.jpg"
                    variant="outlined"
                    />

                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4" sx={{color:"#4d9296"}}>
                        {item.nombre}
                        </Typography>
                        <Typography component="div" variant="h6" sx={{color:"#4d9296"}}>
                        {item.fkespecialidad.nombre}
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800}}>
                        {item.fkconsultorio.descripcion}
                        </Typography>
                        <br/>
                        <br/>
                        <Typography component="div">
                        {item.fkconsultorio.ubicacion}
                        </Typography>
                        <br/>
                        <Link to={`/Consultorio/${item._id}`} color="#4d9296">
                        Ver Consultorio
                        </Link>
                        </CardContent>
                    </Box>
                    </Card>
                    </div>
                    ))}

        <ColorButton  sx={{m:1, mb:4}} component={Link} to="/RegistroDeMedicos" variant="contained">Agregar Doctor</ColorButton>
        </Container>
    )
}
