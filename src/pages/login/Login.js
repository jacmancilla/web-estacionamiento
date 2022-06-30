import React from 'react'
import './style.css'



const Login = () => {
    return (
        <div className="contenedor-inicio">
           <h2 class="parrafo1">Iniciar sesión</h2> 

           <div class="Card">
            <div class="texto1">
                <label class="usu">Usuario:</label>
                <input class="input1"></input>
            </div>

            <div class="texto2">
                <label class="cont">Contraseña:</label>
                <input ></input>
            </div>

            <div class="button0">
                <button class="boton1">Iniciar Sesión</button>
            </div>

            <div class="olvcont">
                <a class="etc" href="">¿Olvidaste contraseña?</a>
            </div>
            

           </div>

       
        </div>

      

        

    )
}


export default Login