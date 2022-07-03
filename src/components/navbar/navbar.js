import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import './style.css'

const Navbar = (props) => {
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
                        <Button href="/registro" color="inherit">Registro</Button>
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
        </Box>
    );
}


export default Navbar