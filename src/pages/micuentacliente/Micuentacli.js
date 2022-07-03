import React from 'react'
import './style.css'


const Micuentacli = () => {
  return (
    <div >
      <h2 class="parrafo1">Mi cuenta</h2>

      <div class="Card">
        <div class="texto2">
          <label class="cont">Nombre:</label>
          <input class="input" value ="Juan"></input>
    
        </div>

        <div class="texto2">
          <label class="cont">Apellido Paterno:</label>
          <input class="input" value ="Rodriguez" ></input>
        </div>
        <div class="texto2">
          <label class="cont">Apellido Materno:</label>
          <input class="input" value ="Diaz" ></input>
        </div>
        <div class="texto2">
          <label class="cont">Nombre Usuario:</label>
          <input class="input" value ="rojua123"></input>
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

export default Micuentacli
