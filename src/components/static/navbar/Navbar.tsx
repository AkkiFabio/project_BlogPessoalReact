import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
    return (
        <>
            <Box className="cursor" sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            BlogPessoal
                        </Typography>
                        
                        <Box display="flex" justifyContent="start" />

                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="white">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="white">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="white">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="white">
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/login" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="white">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;
