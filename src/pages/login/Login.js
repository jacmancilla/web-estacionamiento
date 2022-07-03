import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './style.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')
        const clave = data.get('password')
        if (email === 'dueno@gmail.com' && clave === '112233') {
            navigate('/iniciodueno')
        }
        if (email === 'cliente@gmail.com' && clave === '112233') {
            navigate('/reservar')
        }
    };
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Ingresar
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Ingresa tu Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        variant="filled"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Ingresa tu Clave"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Iniciar Sesión
                    </Button>

                    <Link href="/recuperar" variant="body2">
                        Olvidaste Tu Contraseña
                    </Link>

                </Box>
            </Box>
        </Container>
    )
}

export default Login
