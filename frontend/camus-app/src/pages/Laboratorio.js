import React from 'react';
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


const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#4d9296",
    '&:hover': {
      backgroundColor: "#23585b",
    },
  }));

export default function Laboratorio() {
    return (
        <Container>
            <Card sx={{ display: 'flex', mt:3, backgroundColor:"#ebf6f4" }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 400, margin:"15px", height:400}}
                    image="/laboratorio_placeholder.jpg"
                    variant="outlined"
                    
                />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h2" sx={{color:"#4d9296"}}>
                        Laboratorio_A
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800, fontSize:30}}>
                            Laboratorio
                        </Typography>
                        <Typography component="div" sx={{mt:2}}>
                        Lorem ipsum dolor sit .amet, consectetur adipiscing elit. Nunc quis laoreet ex, ut vehicula ex.
                        </Typography>
                        <Typography component="div" sx={{mt:2}}>
                            Horario: 9:00am - 11:00pm
                        </Typography>
                        <Typography component="div" sx={{mt:2}}>
                           Dirrección: Calle 7, número 132, agrícola Pantitlán, Ciudad De México Delegación Izatacalco 08100
                        </Typography>
                        <Typography component="div" sx={{mt:2}}>
                            Precio Exámenes: $500
                        </Typography>
                        </CardContent>
                    </Box>
            </Card>

           

    </Container>
    )
}

