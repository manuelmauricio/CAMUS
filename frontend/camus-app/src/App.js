import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import Conocenos from './pages/Conocenos';
import Servicios from './pages/Servicios';
import Directorios from './pages/Directorios';
import Pacientes from './pages/school/Pacientes';
import Login from './pages/Login';
import RegistroDeUsuarios from './pages/RegistroDeUsuarios';
import Consultorio from './pages/Consultorio';
import ModificarPerfilMedico from './pages/ModificarPerfilMedico';
import Laboratorio from './pages/Laboratorio';
import FormularioLaboratorio from './pages/FormularioLaboratorio';
import TopBar from './components/TopBar';
import { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <Router>
        <NavBar>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/Conocenos" component={Conocenos} />
            <Route exact path="/Servicios" component={Servicios} />
            <Route exact path="/Directorio" component={Directorios} />

            <Route exact path="/Pacientes" component={Pacientes} />

            <Route exact path="/Login" component={Login} />
            <Route exact path="/RegistroDeUsuarios" component={RegistroDeUsuarios} />
            <Route exact path="/Consultorio" component={Consultorio} />
            <Route exact path="/ModificarPerfilMedico" component={ModificarPerfilMedico} />
            <Route exact path="/Laboratorio" component={Laboratorio} />
            <Route exact path="/FormularioLaboratorio" component={FormularioLaboratorio} />
          </Switch>
        </NavBar>
      </Router>
    </Fragment>
  );
}

export default App;
