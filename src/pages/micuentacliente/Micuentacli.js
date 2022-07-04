import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
//combobox

import './style2.css'
import { InputLabel, MenuItem, Select } from '@mui/material';
const Micuentacli = () => {
  const [comuna, setcomuna] = useState('')
    const cambiarEstadoComuna = (evento) => {
        setcomuna(evento.target.value)
    }
  return (

    
    <div className="contenedor-mi-cuenta-cliente">
    <h2 class="titulo-cliente">Mis datos personales</h2>
    <div class="formulario-cliente">

        <form class="form-cliente">
            <div className='contenedor-mi-cuenta-div'>
                <label class="label-cliente">Nombre:</label>
                <input class="input-cliente"></input>
            </div>
            <div className='contenedor-mi-cuenta-div'>
                <label class="label-cliente">Apellidos:</label>
                <input class="input-cliente"></input>
            </div>
            <div className='contenedor-mi-cuenta-div'>
                <label className="label-cliente">Correo:</label>
                <input className="input-cliente"></input>
            </div>
            <div className='contenedor-mi-cuenta-div'>
                <label class="label-cliente">Contraseña:</label>
                <input class="input-cliente" type="password"></input>
            </div>
            <div className='contenedor-mi-cuenta-div'>
                <label className="label-cliente">Dirección:</label>
                <input className="input-cliente"></input>
            </div>


            <div className='contenedor-mi-cuenta-div'>
                <label className="label-cliente">Tipo:</label>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="casa" control={<Radio />} label="Casa" />
                        <FormControlLabel value="depto" control={<Radio />} label="Depto" />
                    </RadioGroup>
                </FormControl>
            </div>
           



            <div className='contenedor-mi-cuenta-div'>
                <label class="label-cliente">Número:</label>
                <input class="input-cliente"></input>
            </div>

         


            <div className='contenedor-mi-cuenta-div'>
                <label class="label-cliente">Comuna:</label>
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

            <div>
                <button class="boton-modi-cliente">Modificar</button>
            </div>
        </form>
    </div>

</div>





  )


}

export default Micuentacli

