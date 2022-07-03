import { Button } from '@mui/material'
import React from 'react'
import './style.css'

const Recuperar = () => {

    return (
        <div className="contenedor-inicio">
            <h2 class="parrafo1">Recuperar Contraseña</h2>

            <div class="Card2">
                <div class="texto2">
                    <label class="correo">Ingrese su correo:</label>
                    <input class="input2" placeholder='ejemplo@ejemplo.com' ></input>
                </div>

                <div class="text2">
                    <label class="text3">Te enviaremos un correo al mail indicado.Favor de seguir los pasos. </label>
                </div>

                <div class="butto">
                    <button class="boon1">Enviar</button>
                </div>
            </div>
        </div>

    )
}

export default Recuperar