

import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { InputLabel, MenuItem, Select } from '@mui/material';

import './styler.css'
const Registro = () => {
  const [comuna, setcomuna] = useState('')
  const cambiarEstadoComuna = (evento) => {
    setcomuna(evento.target.value)
  }
  return (


    <div className="contenedor-mi-cuenta-cli">
      <h2 class="titulo-cli">Registro</h2>
      <div class="formulario-cli">

        <form class="form-cli">
          <div className='contenedor-mi-cuenta-div'>
            <label class="label-cli">Nombre:</label>
            <input class="input-cli"></input>
          </div>
          <div className='contenedor-mi-cuenta-div'>
            <label class="label-cli">Apellidos:</label>
            <input class="input-cli"></input>
          </div>
          <div className='contenedor-mi-cuenta-div'>
            <label className="label-cli">Correo:</label>
            <input className="input-cli"></input>
          </div>
          <div className='contenedor-mi-cuenta-div'>
            <label class="label-cli">Contraseña:</label>
            <input class="input-cli" type="password"></input>
          </div>
        
          <div className='contenedor-mi-cuenta-div'>
            <label className="label-cli">Dirección:</label>
            <input className="input-cli"></input>
          </div>

          <div className='contenedor-mi-cuenta-div'>
            <label class="label-cli">Comuna:</label>
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
            <label class="label-cli">N cuenta:</label>
            <input class="input-cli"></input>
            
          </div>

          <div className='contenedor-mi-cuenta-div'>
            <label class="label-cli">Banco:</label>
            <input class="input-cli"></input>
            
          </div>
          <div className='contenedor-mi-cuenta-div'>
            <label class="label-cli">Patente:</label>
            <input class="input-cli"></input>
            
          </div>
          <div className='contenedor-mi-cuenta-div'>
            <label class="label-cli">Marca:</label>
            <input class="input-cli"></input>
            
          </div>
          <div className='contenedor-mi-cuenta-div'>
            <label class="label-cli">Modelo:</label>
            <input class="input-cli"></input>
            
          </div>
          <div className='contenedor-mi-cuenta-div'>
            <label class="label-cli">Año:</label>
            <input class="input-cli"></input>
            
          </div>

          <div>
            <button class="boton-modi-cli">Registrar</button>
          </div>
        </form>
      </div>

    </div>





  )


}

export default Registro
