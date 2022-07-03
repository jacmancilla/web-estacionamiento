import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Componentes
import Iniciodueno from "../pages/iniciodueno/Iniciodueno";
import Registro from '../pages/registro/Registro'
import Login from '../pages/login/Login'
import Iniciocliente from '../pages/iniciocliente/Iniciocliente'
import Recuperar from '../pages/recuperar/Recuperar';
import RegistroEstacionamiento from '../pages/registroestacionamiento/Estacionamiento';
import Micuentacli from '../pages/micuentacliente/Micuentacli';
import Micuentadueno from '../pages/micuentadueno/Micuentadueno';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/Iniciodueno" element={<Iniciodueno />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/iniciocliente" element={<Iniciocliente />} />
        <Route path="/recuperar" element={<Recuperar/>}/>

        <Route path="/Micuentacli" element={<Micuentacli />} />
        <Route path="/RegistroEstacionamiento" element={<RegistroEstacionamiento />} />
        <Route path="/Micuentadueno" element={<Micuentadueno />} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default Router;