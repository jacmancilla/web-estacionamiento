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
import Micuentadueno from '../pages/micuentadueno/Micuentadueno';
import Comentar from '../pages/comentar/Comentar';
import Micuentacliente from '../pages/micuentacliente/Micuentacli';
import Estacionamiento from '../pages/estacionamiento/Estacionamiento';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Iniciodueno />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/iniciocliente" element={<Iniciocliente />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="/micuentadueno" element={<Micuentadueno />} />
        <Route path="/comentar" element={<Comentar />} />
        <Route path="/micuentacliente" element={<Micuentacliente/>}/>
        <Rote path="/estacionamiento" element={<Estacionamiento/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default Router;