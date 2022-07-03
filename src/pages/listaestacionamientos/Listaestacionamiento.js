import { Key } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";
import React from 'react'
import { useState } from 'react'
import direcciones from './direcciones'

import './style.css'

const Iframe = (props) => {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: props.src }}
        />
    );
}

export const ListaEstacionamiento = (props) => {
    const { mostrarDirecciones, tiempo } = props
    const [datosSeleccionado, setDatosSeleccionado] = useState()
    const navigate = useNavigate();

    console.log(tiempo)
    const guardarUrlIframe = (value) => {
        setDatosSeleccionado(value)
    }
    const guardarDatosLocal = () => {
        localStorage.setItem('direccion', JSON.stringify(datosSeleccionado))
        navigate("/pago");
    }
    return (
        <div className='mapas-container'>
            {
                mostrarDirecciones && <Grid container spacing={2}>
                    <Grid item xs={4} >
                        {direcciones.map((direccion, key) => (
                            <Card sx={{ border: 1, borderColor: '#caca', marginBottom: 1 }} key={`card-${key}`}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {direccion.titulo}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <b>Dirección: </b> {direccion.direccion}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <b>Precio: </b>${direccion.precio}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth onClick={() => guardarUrlIframe(direccion)}>Ver Mapa</Button>
                                </CardActions>
                            </Card>

                        ))}
                    </Grid>
                    <Grid item xs={8}>
                        {datosSeleccionado &&
                            <div className='google-map'>
                                <Iframe src={datosSeleccionado.iframe} width="700" height="700" />
                                <Button fullWidth variant="contained" sx={{ marginTop: 2 }} onClick={guardarDatosLocal}>Reservar</Button>
                            </div>}
                    </Grid>
                </Grid>
            }

        </div>

    )
}




export default ListaEstacionamiento