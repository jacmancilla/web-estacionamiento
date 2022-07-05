import React from 'react'
import './style.css'
import globos from '../../assets/globos.png'
import usuario2 from '../../assets/usuario2.png'
import marcador from '../../assets/marcador.png'
import detalle from '../../assets/detalle.png'


const Iniciodueno = () => {
  return (
    <div className="contenedor-inicio">
      <h2>Bienvenido administrador</h2>

      <div class="contenedor-imagen">

        <div>
          <a href="/RegistroEstacionamiento">
            <img src={marcador} className="imagen-inicio" alt='img-marcador' />
          </a>

          <h2>Estacionamiento</h2>
        </div>


        <div>
          <a href="/micuentadueno">
            <img src={usuario2} className="imagen-inicio" alt='img-usuario2' />
          </a>

          <h2>Mi cuenta</h2>
        </div>

        <div>
          <a href="/Vercomentarios">
            <img src={globos} className="imagen-inicio" alt='img-globos' />
          </a>
          <h2>Comentarios</h2>
        </div>

        <div>
          <a href="/informacion">
            <img src={detalle} className="imagen-inicio" alt='img-detalle' />
          </a>
          <h2 className="detalleclidue">Detalle Cliente</h2>
        </div>




      </div>

    </div >

  )
}


export default Iniciodueno