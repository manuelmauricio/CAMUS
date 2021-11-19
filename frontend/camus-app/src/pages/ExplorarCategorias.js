import React, {useState, useEffect, Fragment} from 'react';
import { Container } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead,
TableRow, Paper, Typography, Box, Button, Grid  } from '@mui/material';
import { GetAllEspecialidad } from '../api/CAMUSAPI';
import { useAuth0 } from '../hooks/react-auth0-spa';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
 

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
}));

export default function ExplorarCategorias() {
    const [especialidades, setEspecialidades] = useState([]);
    const {getTokenSilently} = useAuth0();

    useEffect(() => {
        async function fetchData(){
            const token = await getTokenSilently();
            const especialidadRes = await GetAllEspecialidad(token);
            setEspecialidades(especialidadRes);
        } 
    
    fetchData();
    },[]);

    return (
        <Container>
        <div>
             <Fragment>
            <Grid container>
                <Grid item xs={8}>
                <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:2}}>
                    Lista de Categorías
                 </Typography>
                </Grid>
            </Grid> 
            <Box mt={2}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>NOMBRE</TableCell>
                                <TableCell>DESCRIPCION</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {especialidades.map((item, index) =>(
                                <TableRow key={item._id}>
                                    <TableCell>{item.nombre}</TableCell>
                                    <TableCell>{item.descripcion}</TableCell>
                                </TableRow>                          
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>
        </Fragment>
        </div>

        <ColorButton  sx={{m:1, mb:4}} component={Link} to="/FormularioEspecialidad" variant="contained">Agregar Especialidad</ColorButton>

        </Container>
    )
}
