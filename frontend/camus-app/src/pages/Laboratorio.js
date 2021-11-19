import React, {useState, useEffect, Fragment} from 'react';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import { CardContent } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import {useParams} from "react-router-dom";
import { GetLaboratorio } from '../api/CAMUSAPI';
import { useAuth0 } from '../hooks/react-auth0-spa';

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
  }));

export default function Laboratorio() {
    const { id } = useParams();
    const {getTokenSilently} = useAuth0();
    const [laboratorio, setLaboratorio] = useState({
        descripcion: "",
        detalle: "",
        ubicacion: "",
        hora_apertura: "",
        hora_cierre: "",
        precio_consulta: ""
    });

    useEffect(() => {
        async function fetchData(){
            const token = await getTokenSilently();
            const laboratorioRes = await GetLaboratorio(id,token);
            setLaboratorio(laboratorioRes);
        } 
        fetchData();
    },[]);

    return (
        <Container>
            <Card sx={{ display: 'flex', mt:3 }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 400, margin:"15px", height:400}}
                    image="/laboratorio_placeholder.jpg"
                    variant="outlined"
                    
                />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h2" sx={{color:"#4d9296"}}>
                        {laboratorio.descripcion}
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800, fontSize:30}}>
                        {laboratorio.detalle}
                        </Typography>
                        <br/>
                        <Typography component="div" sx={{mt:2}}>
                        {laboratorio.ubicacion}
                        </Typography>
                        <br/>
                        <br/>
                        <Typography component="div" sx={{mt:2}}>
                            Horario: {laboratorio.hora_apertura} - {laboratorio.hora_cierre}
                        </Typography>
                        <Typography component="div" sx={{mt:2}}>
                            Precio Exámenes: ${laboratorio.precio_consulta}
                        </Typography>
                        </CardContent>
                    </Box>
            </Card>

           

    </Container>
    )
}

