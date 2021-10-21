import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

export default function BasicList() {
  return (
    <Container>
      <Typography component="div" variant="h2" sx={{color:"#4d9296", mt:3}}>
          SOBRE CAMUS
      </Typography>

      <img src='banner1.jpg' alt="CAMUS" loading="Camus" width="100%" height="300px"/>

      <Typography component="div" variant="h6" sx={{color:"#4d9296", mt:3}}>
          ¿QUÉ BUSCAMOS?
      </Typography>
      <Typography component="div" sx={{mt:1}}>
      La innovación en administración y atención medica. Agendar citas de manera rápida y
segura. Conocer distintas opciones para una
misma enfermedad o paciente. Conocer el historial medico de un
paciente.
      </Typography>

      <Typography component="div" variant="h6" sx={{color:"#4d9296", mt:3}}>
          PROPÓSITO DE LA APLICACIÓN WEB
      </Typography>
      <Typography component="div" sx={{mt:1}}>
      Basta con unos cuantos clics
para: Agendar una cita medica con tu doctor, Consultar laboratorios y los análisis y/o estudios que
podrás realizar, Conocer costos, Direcciones de los hospitales, clínicas, y 
laboratorios más cercanos, Atención medica online.
      </Typography>

      <Typography component="div" variant="h6" sx={{color:"#4d9296", mt:3}}>
      ¿POR QUÉ ES MEJOR LA APP?
      </Typography>
      <Typography component="div" sx={{mt:1, mb:1}}>
      Búsquedas simplificada. Amplio catálogo de médicos de diferentes especialidades. Información sobre las indicaciones
antes de cualquier examen o análisis a realizar. Acceso fácil y rápido a historiales médico. Facilita el proceso a personas que 
tienen problemas al encontrar un consultorio acorde a sus necesidades y poder adquisitivo.
      </Typography>

    </Container>
  );
}
