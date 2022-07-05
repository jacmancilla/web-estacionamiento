
import './style.css'
import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { InputLabel, MenuItem, Select } from '@mui/material';


const Estacionamiento = () => {
    const [comuna, setcomuna] = useState('')
    const cambiarEstadoComuna = (evento) => {
        setcomuna(evento.target.value)
    }
    return (


        <div className="contenedor-mi-cuenta-est">
            <h2 class="titulo-est">Registro Estacionamiento</h2>
            <div class="formulario-est">

                <form class="form-est">
                    <div className='contenedor-mi-cuenta-div'>
                        <label className="label-est">Dirección:</label>
                        <input className="input-est"></input>
                    </div>

                    <div className='contenedor-mi-cuenta-div'>
                        <label class="label-est">Número:</label>
                        <input class="input-est"></input>
                    </div>
                    <div className='contenedor-mi-cuenta-div'>
                        <label class="label-est">Sector:</label>
                        <input class="input-est"></input>
                    </div>
                   

                    <div className='contenedor-mi-cuenta-div'>
                        <label class="label-est">Comuna:</label>
                        <FormControl sx={{ width: 315, textAlignLast: 'left', padding: 1, margin: '8px' }} >
                            <Select className='micuenta-select'
                                labelId="select-comuna"
                                id="select-comuna"
                                value={comuna}
                                label=""
                                onChange={cambiarEstadoComuna}
                            >
                                <MenuItem value={10}> Cerrillos</MenuItem>
                                <MenuItem value={20}>Cerro Navia</MenuItem>
                                <MenuItem value={30}>Conchalí</MenuItem>
                                <MenuItem value={40}>Estación Central</MenuItem>
                                <MenuItem value={50}>Huechuraba</MenuItem>
                                <MenuItem value={60}>Independencia</MenuItem>
                                <MenuItem value={70}>La Florida</MenuItem>
                                <MenuItem value={80}>La Reina</MenuItem>
                                <MenuItem value={90}>Maipú</MenuItem>
                                <MenuItem value={100}>Ñuñoa</MenuItem>
                                <MenuItem value={110}>Pudahuel</MenuItem>
                                <MenuItem value={120}>Quilicura</MenuItem>
                                <MenuItem value={130}>Santiago</MenuItem>
                                <MenuItem value={140}>Providencia</MenuItem>


                            </Select>
                        </FormControl>
                    </div>
                    <div className='contenedor-mi-cuenta-div'>
                        <label class="label-est">Fecha:</label>
                        <input type="date" class="input-est"></input>
                    </div>
                    <div className='contenedor-mi-cuenta-div'>
                        <label class="label-est">Hora inicio:</label>
                        <input type="time" class="input-est"></input>
                    </div>
                    <div className='contenedor-mi-cuenta-div'>
                        <label class="label-est">Hora termi:</label>
                        <input type="time" class="input-est"></input>
                    </div>
                   
                   

                    <div>
                        <button class="boton-modi-est">Registrar</button>
                    </div>
                </form>
            </div>

        </div>

    )


}

export default Estacionamiento
