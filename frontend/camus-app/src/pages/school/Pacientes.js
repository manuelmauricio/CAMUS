import React from 'react'
import { useState } from 'react'
import { Button, TextField, FormControl, IconButton } from '@mui/material'
import { Container } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { School } from '@mui/icons-material';

export default function CreateSchool() {

    const [school, setSchool] = useState({
        name: "",
        year: "",
        section: "",
        careers: [],
    })

    const [career, setCareer] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;

        setSchool({
            ...school,
            [name]:value
            
        })
    }

    const handleChangeCareer = (e) =>{
        const {value} = e.target;
        setCareer(value);
    }

    const handleAddCareer = (e) => {
        setSchool({
            ...School,
            careers: [...school.careers, career]
        })
        setCareer("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container>
             <h1>Pagina Pacientes modificar</h1>
        <form>
            <FormControl fullWidth sx = {{m:1}} >
            <TextField name="name" label="Nombre" variant="outlined" required value={school.name} onChange={handleChange} />
            </FormControl>

            <FormControl fullWidth sx = {{m:1}}>
            <TextField type="number" name="year" label="Años de fundacion" variant="outlined" value={school.year} onChange={handleChange}/>
            </FormControl>

            <FormControl fullWidth sx = {{m:1}}>
            <TextField type="text" name="section" label="Seccion" variant="outlined" value={school.section} onChange={handleChange}/> 
            </FormControl>

            <FormControl fullWidth sx = {{m:1}}>
            <TextField type="text" name="Career" label="Add Carrer" variant="outlined" onChange={handleChangeCareer} /> 
            <IconButton color="primary" aria-label="add career" component="span" onClick={handleAddCareer}>
                <AddIcon/>
            </IconButton>
            </FormControl>

           

            <FormControl fullWidth sx={{m:3}} >
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Career table">
                <TableHead>
                <TableRow>
                    <TableCell>Careers</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {school.careers.map((row) => (
                    <TableRow
                    key={row}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell scope="row">
                        {row}
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </FormControl>

            <FormControl  sx = {{m:1}}>
            <Button type="submit" variant="contained" onClick={handleSubmit} startIcon={<SaveIcon />} >Guardar</Button>
            </FormControl>

        </form>
        </Container>
    )
}
