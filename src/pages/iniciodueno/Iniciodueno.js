import React from 'react'
import './style.css'
import parkin from '../../assets/parkin.png'
import usuario from '../../assets/usuario.png'
import comentario from '../../assets/comentario.png'


const Iniciodueno = () => {
  return (
    <div className="contenedor-inicio">
      <h2>Bienvenido</h2>

      <div class="contenedor-imagen">

        <div>
          <img src={parkin} className="imagen-inicio" alt='img-parking' />
          <h2 class="tipo-letra">Estacionamiento</h2>
        </div>

        <div>
          <a href="/micuentadueno">
            <img src={usuario} className="imagen-inicio" alt='img-usuario' />

          </a>

          <h2>Mi cuenta</h2>
        </div>

        <div>
          <img src={comentario} className="imagen-inicio" alt='img-comentario' />
          <h2>Comentarios</h2>
        </div>


      </div>



    </div>

  )
}


export default Iniciodueno