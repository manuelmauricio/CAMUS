import React, {useState, useEffect, Fragment} from 'react';
import { Container } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead,
TableRow, Paper, Typography, Box, Button, Grid  } from '@mui/material';
import { GetAllEspecialidad } from '../api/CAMUSAPI';
export default function ExplorarCategorias() {
    const [especialidades, setEspecialidades] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const especialidadRes = await GetAllEspecialidad();
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
        </Container>
    )
}
