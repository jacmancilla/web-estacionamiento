import React from 'react'
import './style.css'



const Login = () => {
    return (
        <div className="contenedor-inicio">
           <h2 class="txt">Iniciar sesión</h2> 

           <div class="Card1">
            <div class="texto1">
                <label class="usua">Usuario:</label>
                <input class="txt2"></input>
            </div>

            <div class="txt3">
                <label class="contras">Contraseña:</label>
                <input ></input>
            </div>

            <div class="but0">
                <button class="btn">Iniciar Sesión</button>
            </div>

            <div class="olvcontra">
                <a class="ettc" href="/recuperar">¿Olvidaste contraseña?</a>
            </div>
            

           </div>

       
        </div>

      

        

    )
}


export default Login