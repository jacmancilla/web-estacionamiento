import React from 'react'
import './informacioncli.css'

const Informacion = () =>{
  
    return(
        <div>

        <div className="titulocomentarioscli">
            <h2>Información clientes:</h2>
        </div>

        <div className="cards-list">

            <div className="cardst 1">
                <div class="card_title title-black">
                    <p>Detalle Cliente 1:</p>
                </div>

                <div class="card_parrafo title-black">
                    <p>Nombre Cliente: Manuel</p>
                    <p>Apellido Cliente:  Soto</p>
                    <p>Télefono: +569 52976453</p>
                    <p>N° Patente: LMSX12</p>
                    <p>Marca auto: Hyundai</p>
                    <p>Color auto: Amarillo</p>
                    <p>Fecha llegada: 07-07-2022</p>
                    <p>Hora llegada: 13:00</p>
                    <p>Fecha salida: 07-07-2022</p>
                    <p>Hora salida: 14:00</p> 

                </div>
            </div>

            <div class="cardst 2">
                <div class="card_title title-black">
                    <p>Detalle Cliente 2:</p>
                </div>

                <div class="card_parrafo title-black">
                    <p>Nombre Cliente: Carla </p>
                    <p>Apellido Cliente: Díaz</p>
                    <p>Télefono: +569 89741230</p>
                    <p>N° Patente: RWQL54</p>
                    <p>Marca auto: Jeep</p>
                    <p>Color auto: Rojo</p>
                    <p>Fecha llegada: 07-07-2022</p>
                    <p>Hora llegada: 17:00</p>
                    <p>Fecha salida: 07-07-2022</p>
                    <p>Hora salida: 18:00</p>
                </div>
            </div>
 
            <div class="cardst 3">
                <div class="card_title">
                    <p>Detalle Cliente 3:</p>
                </div>

                <div class="card_parrafo title-black">
                    <p>Nombre Cliente: Claudia </p>
                    <p>Apellido Cliente: Martinez</p>
                    <p>Télefono: +569 12845796</p>
                    <p>N° Patente: PGJK86</p> 
                    <p>Marca auto: Kia</p>
                    <p>Color auto: Gris</p>
                    <p>Fecha llegada: 08-07-2022</p>
                    <p>Hora llegada: 10:00</p>
                    <p>Fecha salida: 08-07-2022</p>
                    <p>Hora salida: 11:00</p>
                </div>
            </div>

            <div class="cardst 4">
                <div class="card_title title-black">
                    <p>Detalle Cliente 4:</p>
                </div>

                <div class="card_parrafo title-black">
                    <p>Nombre Cliente:Francisco</p>
                    <p>Apellido Cliente:Muñoz</p>
                    <p>Télefono: +569 78965432</p>
                    <p>N° Patente: HUVK73</p>
                    <p>Marca auto: Ford</p>
                    <p>Color auto: Azul</p>
                    <p>Fecha llegada: 09-07-2022</p>
                    <p>Hora llegada: 08:00</p>
                    <p>Fecha salida: 09-07-2022</p>
                    <p>Hora salida: 9:00</p>
                </div>
            </div>

        </div>

    </div>
 
    )
}

export default Informacion