import * as React from 'react';
import { useState } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import './style.css'
import ListaEstacionamiento from '../listaestacionamientos/Listaestacionamiento';

const Maps = () => {
    const [fechaInicial, setFechaInicial] = useState();
    const [fechaFinal, setFechaFinal] = useState();
    const [mostrarDirecciones, setMostrarDirecciones] = useState(false)

    const validaFechas = () => {
        console.log(fechaInicial, fechaFinal)
        if (fechaInicial && fechaFinal) {
            const totalTiempo = (fechaFinal - fechaInicial / 1000);
            console.log(totalTiempo)
            setMostrarDirecciones(true)
        } else {
            setMostrarDirecciones(false)
        }
    }
    const guardarFechaInicial = (valor) => {
        setFechaInicial(valor);
        validaFechas()
    };

    const guardarFechaFinal = (valor) => {
        setFechaFinal(valor);
        validaFechas()
    };




    return (
        <div>
            <div className='datapicker'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3} className='datapicker-stack'>
                        <DateTimePicker
                            label="Fecha Inicial"
                            value={fechaInicial}
                            onChange={guardarFechaInicial}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3} className='datapicker-stack'>
                        <DateTimePicker
                            label="Fecha Final"
                            value={fechaFinal}
                            onChange={guardarFechaFinal}
                            renderInput={(params) => <TextField {...params} />}
                        />

                    </Stack>
                </LocalizationProvider>
            </div>

            <ListaEstacionamiento mostrarDirecciones={mostrarDirecciones} />



        </div>
    )
}

export default Maps