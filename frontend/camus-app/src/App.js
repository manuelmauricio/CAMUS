import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import Conocenos from './pages/Conocenos';
import Servicios from './pages/Servicios';
import Directorios from './pages/Directorios';
import Pacientes from './pages/school/Pacientes';

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
          </Switch>
        </NavBar>
      </Router>
    </Fragment>
  );
}

export default App;
