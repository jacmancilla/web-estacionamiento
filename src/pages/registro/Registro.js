import React from 'react'
import './style.css'


const Registro = () => {
  return (
    <div >
      <h2 class="parrafo1">Registro</h2>

      <div class="Card">
        <div class="texto2">
          <label class="cont">Nombre:</label>
          <input class="input"></input>
    
        </div>

        <div class="texto2">
          <label class="cont">Apellido Paterno:</label>
          <input class="input" ></input>
        </div>
        <div class="texto2">
          <label class="cont">Apellido Materno:</label>
          <input class="input" ></input>
        </div>
        <div class="texto2">
          <label class="cont">Nombre Usuario:</label>
          <input class="input"></input>
        </div>
        <div class="texto2">
          <label class="cont">Contraseña:</label>
          <input class="input"></input>
        </div>

        <div class="button0">
          <button class="boton1">Registrar</button>
        </div>



      </div>


    </div>





  )


}

export default Registro
