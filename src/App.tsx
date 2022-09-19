import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from "./pages/login/Login"
import { Grid } from "@material-ui/core";
import logo from './logo.svg';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastropostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastrotema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletartema/DeletarTema';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>       
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/cadastrousuario' element={<CadastroUsuario />} />
        <Route path='/temas' element={<ListaTema />} />
        <Route path='/posts' element={<ListaPostagem />} />
        <Route path="/formularioPostagem" element={<CadastroPostagem />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
