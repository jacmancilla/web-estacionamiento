import { Button, Text} from '@mui/material'
import React from 'react'
import './style.css'
import mapa from '../../assets/mapa.png'

const Estacionamiento = () =>{
    return(
        <div className="contenedor-inicio">
            <h2>Encuentra el mejor estacionamiento.</h2>

            <div className="bot-mapa">
                <button className="bot-mapa1" hreft="">
                    <label className="label-mapa">Abrir Mapa</label>
                    <img src={mapa} className="imge-mapa" alt='img-mapa'  />
                </button>
            </div>

            <div>
                <label className="textolabel" for="start">Seleccione Fecha Desde:</label>
                <input type="date" id="start" name="trip-start"
                        value="2018-07-22"
                        min="2022-01-01" max="2025-12-31" />
                
            </div>

            <div>
                <label className="textolabel2" for="start">Seleccione Fecha Hasta:</label>
                <input type="date" id="start" name="trip-start"
                        value="2018-07-22"
                        min="2022-01-01" max="2025-12-31" />
                
            </div>

            <div>
                <label className="hora">Seleccione Hora</label>
                <button>08:00</button>
                <button>09:00</button>
                <button>12:00</button>
                <button>14:00</button>
                <button>15:00</button>
                <button>17:00</button>
            </div>

            <div>
                <button>Reservar Hora</button>
            </div>
            
        </div>
    )
}

export default Estacionamiento