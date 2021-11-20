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
import { GetUsuario } from '../api/CAMUSAPI';
import { CreateOpinion } from '../api/CAMUSAPI';
import { GetAllOpinionesDoc } from '../api/CAMUSAPI';


import { Link } from 'react-router-dom';

import { useAuth0 } from '../hooks/react-auth0-spa';




const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
  }));

export default function Consultorio() {
    const { id } = useParams();
    const {getTokenSilently} = useAuth0();
    const [usuario, setUsuario] = useState({
        nombre: "",
        email: "",
        fkespecialidad: "",
        fkconsultorio: ""
    });

    const [opinion, setOpinion] = useState({
        idfk_doctor: id,
        texto: ""
    });

    const [opinionesdoc, setOpinionesdoc] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setOpinion({
            ...opinion,
            [name]:value
        });
      };

    const handleSubmit = async (e) => {
        const token = await getTokenSilently();
        e.preventDefault();
        console.log("submit", opinion);
        await CreateOpinion(opinion, token);
         alert("Se publico la nueva opinion");
         window.location.reload();
      };

    function myimage(e){
        if(e==""){
            return "avatar_placeholder.jpg";
        } else return e;

    }

    useEffect(() => {
        async function fetchData(){
            const token = await getTokenSilently();
            const usuarioRes = await GetUsuario(id,token);
            setUsuario(usuarioRes);
            const opinionesdocRes = await GetAllOpinionesDoc(id,token);
            setOpinionesdoc(opinionesdocRes);
        } 
        fetchData();
    },[]);

    
        return (
        <Container>

            <Card sx={{ display: 'flex', mt:3, backgroundColor:"#ebf6f4" }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 400, margin:"15px", height:400}}
                    image={`/${myimage(usuario.imagenchar)}`}
                    variant="outlined"
                    
                />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h2" sx={{color:"#4d9296"}}>
                            {usuario.nombre}
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800, fontSize:30}}>
                        {usuario.fkespecialidad.nombre}
                        </Typography>
                        <Typography component="div" sx={{mt:2}}>
                        {usuario.fkconsultorio.descripcion}
                        </Typography>
                        <Typography component="div" sx={{mt:2}}>
                            Horario: {usuario.fkconsultorio.hora_apertura} - {usuario.fkconsultorio.hora_cierre}
                        </Typography>
                        <Typography component="div" sx={{mt:2}}>
                        {usuario.fkconsultorio.ubicacion}
                        </Typography>
                        <Typography component="div" sx={{mt:2}}>
                            Precio Consulta: ${usuario.fkconsultorio.precio_consulta}
                        </Typography>
                        <Typography component="div" sx={{mt:2}}>
                            Contacto: {usuario.email}
                        </Typography>
                        
                        <ColorButton  component={Link} to={`/EditarMedicos/${id}`} variant="contained" sx={{mt:2}}>Editar...</ColorButton>
 
                        </CardContent>
                    </Box>
            </Card>

            <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:4}}>
                            Galería del consultorio:
            </Typography>

    
     <ImageList sx={{ width: 1000, height: 300 }} cols={3} rowHeight={150}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

            <Typography component="div" variant="h4" sx={{color:"#4d9296", mt:2}}>
                            Comentarios:
            </Typography>

            {opinionesdoc.map((item, index) =>(
            <div key={item._id}>
            <Card sx={{ display: 'flex', mt:3, backgroundColor:"#FFFFFF" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 100, margin:"15px", height:100}}
                    image="/user.jpg"
                    variant="outlined"
                    
                />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6" sx={{color:"#4d9296", fontSize:20}}>
                            Usuario X
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontSize:20}}>
                        {item.texto} 
                        </Typography>
                        <Typography component="div">
                            Publicado el {item.fecha_publicacion} 
                        </Typography>
                        </CardContent>
                    </Box>
            </Card>
            </div>
            ))}



        <form onSubmit={handleSubmit} autocomplete="off">
            <FormControl fullWidth sx={{m:1, mt:5}}>
            <TextField sx={{backgroundColor:"#FFFFFF"}} name="texto" label="Escribe una opinión..." variant="outlined" required
            onChange={handleChange} value={opinion.texto}></TextField>
            </FormControl>

            <FormControl sx={{m:1, mb:5}}>
            <ColorButton type="submit" variant="contained">Publicar</ColorButton>
            </FormControl>
           </form>

        </Container>
    )
}

const itemData = [
    {
      img: '/consultorio.jpg',
      title: 'Img1',
    },
    {
      img: '/consultorio.jpg',
      title: 'Img2',
    },
    {
      img: '/consultorio.jpg',
      title: 'Img3',
    },
  ];
