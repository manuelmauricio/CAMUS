import React from 'react'
import { Button, TextField } from '@mui/material' 

export default function MaterialUIEjemplo() {
    return (
        <div>
             <h1>Pagina Directorio modificar</h1>
            <br/>
            <TextField id="standard-basic" label="name" variant="outlined" />
            <br/>
            <Button variant="text" color="secondary">
                I'm a sexy button Click Me :)
            </Button>

            <Button variant="contained" color="success">
                I'm a sexy button Click Me :)
            </Button>
            <Button variant="outlined">
                I'm a sexy button Click Me :)
            </Button>
        </div>
    )
}
