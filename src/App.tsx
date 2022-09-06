import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from "./pages/login/Login"
import { Grid } from "@material-ui/core";
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>       
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/cadastrousuario' element={<CadastroUsuario />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
