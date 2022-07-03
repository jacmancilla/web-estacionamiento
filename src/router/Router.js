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
import Micuentadueno from '../pages/micuentadueno/Micuentadueno';
import Comentar from '../pages/comentar/Comentar';
import Micuentacli from '../pages/micuentacliente/Micuentacli';
import Estacionamiento from '../pages/estacionamiento/Estacionamiento';
import Maps from '../pages/maps/Maps'
import Pago from '../pages/pago/Pago';
import Vercomentarios from '../pages/vercomentarios/Vercomentarios';

import ListaEstacionamiento from '../pages/listaestacionamientos/ListaEstacionamiento';



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Iniciodueno" element={<Iniciodueno />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/iniciocliente" element={<Iniciocliente />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="/RegistroEstacionamiento" element={<RegistroEstacionamiento />} />
        <Route path="/Micuentadueno" element={<Micuentadueno />} />
        <Route path="/login" element={<Login />} />
        <Route path="/iniciocliente" element={<Iniciocliente />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="/micuentadueno" element={<Micuentadueno />} />
        <Route path="/comentar" element={<Comentar />} />
        <Route path="/micuentacli" element={<Micuentacli />} />
        <Route path="/estacionamiento" element={<Estacionamiento />} />
        <Route path="/reservar" element={<Maps />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/ListaEstacionamiento" element={<ListaEstacionamiento />} />
        <Route path="/Vercomentarios" element={<Vercomentarios />} />




      </Routes>
    </BrowserRouter>
  )
}

export default Router;