import React, { useEffect } from "react";
import { Typography, Grid, Button, Box } from '@mui/material';
import PostTab from "../../components/postagens/tabpostagem/TabPostagem";
import './Home.css';
import { Link, useNavigate } from "react-router-dom";
import { TokenState } from "../../store/tokens/TokensReducer";
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });       
        navigate("/login")
  
      }
  }, [token])
    
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Link to="/posts">
                            <Button variant="outlined" className="botao">Ver Postagens</Button>
                        </Link>
                    </Box>

                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagens">
                    <PostTab />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;