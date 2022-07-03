import { } from '@mui/material'
import React from 'react'
import './style.css'

const Comentar = () => {

    return(
       <div className="contenedor-inicio">
    
               <h2 class="coment">Gracias por utilizar "Mi Estacionamiento"</h2>
           
        
               <div class="Card3">
                    <div class="text">
                        <label class="name">Escribir comentario:</label>
                    </div>

                    <div class="text2">
                        <textarea class="area"></textarea>
                </div>

            <div class="butt">
                <button class="bot1">Enviar</button>
            </div>

           
            </div>
            </div>
        
    )
}

export default Comentar