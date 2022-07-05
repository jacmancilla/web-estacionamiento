import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import './style.css'
import { Modal } from '@mui/material';

const Navbar = (props) => {
    const [open, setOpen] = useState(false)

    const abrirModal = () => {
        setOpen(true);
    }
    const cerrarModal = () => {
        setOpen(false);
    }


    let tipoUsuario = localStorage.getItem('tipoUsuario')
    const cerrarSesion = () => {
        localStorage.removeItem('tipoUsuario')
        localStorage.removeItem('direccion')
    }
    useEffect(() => {
        tipoUsuario = localStorage.getItem('tipoUsuario')
    }, [localStorage.getItem('tipoUsuario')])


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/" sx={{ color: 'white', textDecoration: 'none' }}>
                            Mi estacionamiento
                        </Link>
                    </Typography>
                    {!tipoUsuario &&
                        <Button onClick={abrirModal} color="inherit">Registro</Button>
                    }
                    {!tipoUsuario &&
                        <Button href="/login" color="inherit">Login</Button>
                    }
                    {tipoUsuario === 'cliente' &&
                        <Button href="/micuentacli" color="inherit">Mi Cuenta</Button>
                    }
                    {tipoUsuario &&
                        <Button href='/' onClick={cerrarSesion} color="inherit">Cerrar Sesión</Button>
                    }

                </Toolbar>
            </AppBar>

            <Modal
                open={open}
                onClose={cerrarModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginBottom: 3 }}>
                        Selecciona el tipo de cuenta para registrar:
                    </Typography>

                    <div>

                        <Button href="/registro/admin" fullWidth variant="contained" color="success" sx={{ margin: 1 }} >Registro administrador</Button>

                        <Button href="/registro/cliente" fullWidth variant="contained" color="success" sx={{ margin: 1 }} >Registro cliente</Button>

                    </div>


                </Box>
            </Modal>
        </Box>
    );
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
    display: 'flex',
    width: 600,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5
};

export default Navbar