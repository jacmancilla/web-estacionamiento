import { } from '@mui/material'
import React from 'react'
import './style.css'

const Comentar = () => {

    return(
       <div className="contenedor-inicio">
    
               <h2 class="parrafo1">Comentarios</h2>
           
        
               <div class="Card">
                    <div class="texto1">
                        <label class="usu">Nombre:</label>
                    </div>

                    <div class="texto2">
                        <input class="input1"></input>
                        <textarea class="area"></textarea>
                </div>

            <div class="button0">
                <button class="boton1">Enviar Comentario</button>
            </div>

           
            </div>
            </div>
        
    )
}

export default Comentar