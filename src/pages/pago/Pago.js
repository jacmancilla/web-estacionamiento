import { Button, Card, CardActions, CardContent, Grid, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { useNavigate } from "react-router-dom";

import webpayLogo from '../../assets/webpay.png'
import './style.css'

const Pago = () => {
    const datos = JSON.parse(localStorage.getItem('direccion'))
    const navigate = useNavigate();
    const cancelarOnClick = () => {
        localStorage.removeItem('direccion')
        navigate("/reservar");
    }
    const pagarOnClick = () => {
        setOpen(true);
    }
    const pagoRealizado = () => {
        localStorage.removeItem('direccion')
        navigate("/comentar");
    }
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    return (
        <div className='container-pago'>
            <Typography gutterBottom variant="h4" component="div">
                Detalle de Pago
            </Typography>
            <div className='detalle-pago'>
                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        <Card sx={{ border: 1, borderColor: '#caca' }} >
                            <CardContent>
                                <Typography color="text.secondary" gutterBottom variant="h6" align='left'>
                                    <b>Datos Reserva</b>
                                </Typography>
                                <Typography color="text.secondary">
                                    <b>Dirección: </b> {datos.direccion}
                                </Typography>
                                <Typography color="text.secondary">
                                    <b>Precio: </b>{datos.precio}
                                </Typography>
                                <Typography color="text.secondary">
                                    <b>Horas: </b> 3
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>

                        <Typography color="text.secondary" gutterBottom variant="h5" align='right'>
                            <b>Subtotal: </b>
                        </Typography>
                        <Typography color="text.secondary" gutterBottom variant="h5" align='right'>
                            <b>Iva: </b>
                        </Typography>
                        <Typography color="text.secondary" gutterBottom variant="h5" align='right'>
                            <b>Total: </b>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>

                        <Typography color="text.secondary" gutterBottom variant="h5" align='left'>
                            <b>${datos.precio * 3 - datos.precio * 3 * 0.19} </b>
                        </Typography>
                        <Typography color="text.secondary" gutterBottom variant="h5" align='left'>
                            <b>${datos.precio * 3 * 0.19} </b>
                        </Typography>
                        <Typography color="text.secondary" gutterBottom variant="h5" align='left'>
                            <b>${datos.precio * 3 * 1.19 - datos.precio * 3 * 0.19} </b>
                        </Typography>
                    </Grid>

                </Grid>

                <div className='container-buttons'>
                    <Grid container spacing={2}>
                        <Grid item xs={6} >
                            <Button fullWidth variant="contained" color="error" sx={{ marginRight: 2 }} onClick={cancelarOnClick}>Cancelar</Button>
                        </Grid>
                        <Grid item xs={6} >
                            <Button fullWidth variant="contained" color="success" sx={{ marginRight: 2 }} onClick={pagarOnClick}>Pagar</Button>
                        </Grid>
                    </Grid>
                </div>

            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img className='imagen-pago' src={webpayLogo} />
                    <Button fullWidth variant="contained" color="success" sx={{ marginRight: 2 }} onClick={pagoRealizado}>Simular Pago</Button>
                </Box>
            </Modal>


        </div >
    )
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    border: 'none',
    boxShadow: 24,
    p: 4,
};

export default Pago