import { Button } from '@mui/material'
import React from 'react'
import './style.css'

const Vercomentarios = () => {

    return (
        <div>

            <div className="titulocomentarioscli">
                <h2>Comentarios de clientes:</h2>
            </div>

            <div className="cards-list">

                <div className="cardsf 1">
                    <div class="card_title title-black">
                        <p>Manuel Soto</p>
                    </div>

                    <div class="card_parrafot title-black">
                        <p>Estacionamiento espacioso, buen trato con el dueño.</p>
                    </div>
                </div>

                <div class="cardsf 2">
                    <div class="card_title title-black">
                        <p>Carla Díaz</p>
                    </div>

                    <div class="card_parrafot title-black">
                        <p>Estacionamiento con poca visibilidad, demarcado y espacioso.</p>
                    </div>
                </div>

                <div class="cardsf 3">
                    <div class="card_title">
                        <p>Claudia Martinez</p>
                    </div>

                    <div class="card_parrafot title-black">
                        <p>Estacionamiento con poca demarcaciones, dificil acceso a la zona del estacionamiento.</p>
                    </div>
                </div>

                <div class="cardsf 4">
                    <div class="card_title title-black">
                        <p>Francisco Muñoz</p>
                    </div>

                    <div class="card_parrafot title-black">
                        <p>Estacionamiento con buena visibilidad, espacioso, demarcaciones en buen estado y limpio. </p>
                    </div>
                </div>

            </div>

        </div>

    )
}


export default Vercomentarios