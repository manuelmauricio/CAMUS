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
import FormularioNotaMedica from './pages/FormularioNotaMedica';
import FormularioPadecimiento from './pages/FormularioPadecimiento';
import ExplorarCategorias from './pages/ExplorarCategorias';
import ExplorarLaboratorios from './pages/ExplorarLaboratorios';
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
            <PrivateRoute exact path="/" component={Index} />
            <Route exact path="/Conocenos" component={Conocenos} />
            <Route exact path="/login" component={Login} exact/>
            <Route exact path="/logout" component={Logout} exact />
            <Route exact path="/Servicios" component={Servicios} />
            <Route exact path="/Directorio" component={Directorios} />

            <Route exact path="/Pacientes" component={Pacientes} />

            <Route exact path="/RegistroDeUsuarios" component={RegistroDeUsuarios} />
            <Route exact path="/Consultorio" component={Consultorio} />
            <Route exact path="/ModificarPerfilMedico" component={ModificarPerfilMedico} />
            <Route exact path="/Laboratorio" component={Laboratorio} />
            <Route exact path="/FormularioLaboratorio" component={FormularioLaboratorio} />
            <Route exact path="/FormularioAnalisis" component={FormularioAnalisis} />
            <Route exact path="/FormularioCita" component={FormularioCita} />
            <PrivateRoute exact path="/FormularioEspecialidad" component={FormularioEspecialidad} />
            <Route exact path="/FormularioMensaje" component={FormularioMensaje} />
            <Route exact path="/FormularioNotaMedica" component={FormularioNotaMedica} />
            <Route exact path="/FormularioPadecimiento" component={FormularioPadecimiento} />
            <PrivateRoute exact path="/ExplorarCategorias" component={ExplorarCategorias} />
            <Route exact path="/ExplorarLaboratorios" component={ExplorarLaboratorios} />
            
          </Switch>
        </NavBar>
      </Router>
    </Fragment>
  );
}

export default App;
