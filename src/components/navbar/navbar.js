import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import './style.css'

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/" sx={{ color: 'white', textDecoration: 'none' }}>
                            Mi estacionamiento
                        </Link>
                    </Typography>

                    <Button href="/registro" color="inherit">Registro</Button>
                    <Button href="/login" color="inherit">Login</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default Navbar