import React, {useState, useEffect, Fragment} from 'react';
import { Container } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead,
TableRow, Paper, Typography, Box, Button, Grid  } from '@mui/material';
import { GetAllLaboratorios } from '../api/CAMUSAPI';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';


export default function ExplorarLaboratorios() {
    const [laboratorios, setLaboratorios] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const laboratorioRes = await GetAllLaboratorios();
            setLaboratorios(laboratorioRes);
        } 
        fetchData();
    },[]);

    return (
        <Container>

       <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:2}}>
                    Lista de Laboratorios
        </Typography>

                    
                    {laboratorios.map((item, index) =>(
                    <div key={item._id}>
                    <Card  sx={{ display: 'flex', m:2 }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 250, margin:"15px", height:250}}
                    image="/laboratorio_placeholder.jpg"
                    variant="outlined"
                    />

                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4" sx={{color:"#4d9296"}}>
                        {item.descripcion}
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800}}>
                        {item.hora_apertura} - {item.hora_cierre}
                        </Typography>
                        <Link to="/Laboratorio" color="#4d9296">
                        Ver Laboratorio
                        </Link>
                        <br/>
                        <br/>
                        <Typography component="div">
                        {item.ubicacion}
                        </Typography>
                        </CardContent>
                    </Box>
                    </Card>
                    </div>
                    ))}

        </Container>
    )
}
