import React, {useState} from 'react'

export default function Formulario() {

    //const [nombre, setNombre] = useState("");
    const [person, setPerson] = useState({
        name:'',
        lastName:'',
        showPerson: false
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPerson({
            ...person,
            [name]: value
        })
    }

    const handleClick = (e) => {
        setPerson({
             ...person,
             showPerson: !person.showPerson,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("aaa");
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <h1>Pagina servicios modificar</h1>
            Nombre: 
            <input name="name" type="text" value={person.name} onChange={handleChange} />
            <br/>
            Apellido: 
            <input name="lastName" type="text" value={person.lastName} onChange={handleChange} />

            <br/>
            <button type="button" onClick={handleClick} >Pres Me!</button>
            <button type="submit">Submit data </button>
            <br/>
            {person.showPerson && <p>{person.name}</p>}
        </form>
    )
}
