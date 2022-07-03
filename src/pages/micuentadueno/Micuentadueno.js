import React from 'react'
import './style.css'


const Micuentadueno = () => {
  return (
    <div >
      <h2 class="parrafo1">Mi cuenta dueño</h2>

      <div class="Card">
        <div class="texto2">
          <label class="cont">Nombre:</label>
          <input class="input" value ="Enzo"></input>
    
        </div>

        <div class="texto2">
          <label class="cont">Apellido Paterno:</label>
          <input class="input" value ="Dominguez" ></input>
        </div>
        <div class="texto2">
          <label class="cont">Apellido Materno:</label>
          <input class="input" value ="Cerda" ></input>
        </div>
        <div class="texto2">
          <label class="cont">Nombre Usuario:</label>
          <input class="input" value ="dueno1234"></input>
        </div>
        <div class="texto2">
          <label class="cont">Contraseña:</label>
          <input class="input" type="password" value ="rojua123"></input>
        </div>

        <div class="button0">
          <button class="boton1">Modificar</button>
        </div>



      </div>


    </div>





  )


}

export default Micuentadueno
