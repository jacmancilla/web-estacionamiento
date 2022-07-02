import { Button } from '@mui/material'
import React from 'react'
import './style.css'
import globos from '../../assets/globos.png'
import usuario2 from '../../assets/usuario2.png'
import marcador from '../../assets/marcador.png'



const Iniciocliente = () => {
    return (
        <div className="contenedor-inicio">
      <h2>Bienvenido</h2>

      <div class="imagen">

        <div>
          <a href="">
            <img src={marcador} className="imag-inicio" alt='img-marcador' />
          </a>
            <h2 class="tipo-letra">Estacionamiento</h2>
        </div>

        <div>
          <a href="">
            <img src={usuario2} className="imag-inicio" alt='img-usuario2' />

          </a>

          <h2>Mi cuenta</h2>
        </div>

        <div>
          <a href=""> 
          <img src={globos} className="imag-inicio" alt='img-globos' />
          </a> 
          <h2>Comentarios</h2>
        </div>

       </div>
      </div>

        
    )
}

export default Iniciocliente