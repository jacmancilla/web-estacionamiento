import { } from '@mui/material'
import React from 'react'
import './style.css'

const Comentar = () => {

    return(
       <div className="contenedor-inicio">
    
               <h2 class="coment">Comentarios</h2>
           
        
               <div class="Card3">
                    <div class="text">
                        <label class="name">Nombre:</label>
                    </div>

                    <div class="text2">
                        <input class="inp1"></input>
                        <textarea class="area"></textarea>
                </div>

            <div class="butt">
                <button class="bot1">Enviar Comentario</button>
            </div>

           
            </div>
            </div>
        
    )
}

export default Comentar