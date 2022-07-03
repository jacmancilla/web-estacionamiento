import React from 'react'
import './style.css'


const Estacionamiento = () => {
    return (
        <div >
            <h2 class="parrafo1">Registro Estacionamientos</h2>

            <div class="Card">
                <div class="texto1">
                    <label class="cont">Calle:</label>
                    <input class="input" ></input>
                </div>
                <div class="texto2">
                    <label class="cont">Numero:</label>
                    <input class="input" ></input>
                </div>
                <div class="texto2">
                    <label class="cont">Sector:</label>
                    <select name="cars" id="cars" class="combo">
                        <option value="volvo">Norte</option>
                        <option value="saab">Sur</option>
                        <option value="saab">Este</option>
                        <option value="saab">Oeste</option>

                    </select>

                </div>

               

                <div class="button0">
                    <button class="boton1">Registrar</button>
                </div>



            </div>


        </div>





    )


}

export default Estacionamiento
