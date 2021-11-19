import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import Conocenos from './pages/Conocenos';
import Servicios from './pages/Servicios';
import Directorios from './pages/Directorios';
import Pacientes from './pages/school/Pacientes';
//import Login from './pages/Login';
import RegistroDeUsuarios from './pages/RegistroDeUsuarios';
import Consultorio from './pages/Consultorio';
import ModificarPerfilMedico from './pages/ModificarPerfilMedico';
import Laboratorio from './pages/Laboratorio';
import FormularioLaboratorio from './pages/FormularioLaboratorio';
import FormularioAnalisis from './pages/FormularioAnalisis';
import FormularioCita from './pages/FormularioCita';
import FormularioEspecialidad from './pages/FormularioEspecialidad';
import FormularioMensaje from './pages/FormularioMensaje';
import FormularioConsultorio from './pages/FormularioConsultorio';
import FormularioNotaMedica from './pages/FormularioNotaMedica';
import FormularioPadecimiento from './pages/FormularioPadecimiento';
import ExplorarCategorias from './pages/ExplorarCategorias';
import ExplorarLaboratorios from './pages/ExplorarLaboratorios';
import ExplorarConsultorios from './pages/ExplorarConsultorios';
import ExplorarMedicos from './pages/ExplorarMedicos';

import TopBar from './components/TopBar';
import { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import PrivateRoute from './components/session/PrivateRoute';
import Login from './components/session/Login';
import Logout from './components/session/Logout';
import history from './utils/History';


import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <Router history={history}>
        <NavBar>
          <Switch>
            <PrivateRoute exact path="/" component={ExplorarMedicos} />
            <PrivateRoute exact path="/Conocenos" component={Conocenos} />
            <Route exact path="/login" component={Login} exact/>
            <Route exact path="/logout" component={Logout} exact />
            <PrivateRoute exact path="/Servicios" component={Servicios} />
            <PrivateRoute exact path="/Directorio" component={Directorios} />

            <PrivateRoute exact path="/Pacientes" component={Pacientes} />

            <PrivateRoute exact path="/RegistroDeMedicos" component={RegistroDeUsuarios} />
            <PrivateRoute exact path="/Consultorio/:id" component={Consultorio} />
            <PrivateRoute exact path="/ModificarPerfilMedico" component={ModificarPerfilMedico} />
            <PrivateRoute exact path="/Laboratorio" component={Laboratorio} />
            <PrivateRoute exact path="/FormularioLaboratorio" component={FormularioLaboratorio} />
            <PrivateRoute exact path="/FormularioAnalisis" component={FormularioAnalisis} />
            <PrivateRoute exact path="/FormularioConsultorio" component={FormularioConsultorio} />
            <PrivateRoute exact path="/FormularioCita" component={FormularioCita} />
            <PrivateRoute exact path="/FormularioEspecialidad" component={FormularioEspecialidad} />
            <PrivateRoute exact path="/FormularioMensaje" component={FormularioMensaje} />
            <PrivateRoute exact path="/FormularioNotaMedica" component={FormularioNotaMedica} />
            <PrivateRoute exact path="/FormularioPadecimiento" component={FormularioPadecimiento} />
            <PrivateRoute exact path="/ExplorarCategorias" component={ExplorarCategorias} />
            <PrivateRoute exact path="/ExplorarConsultorios" component={ExplorarConsultorios} />
            <PrivateRoute exact path="/ExplorarLaboratorios" component={ExplorarLaboratorios} />
            
          </Switch>
        </NavBar>
      </Router>
    </Fragment>
  );
}

export default App;
