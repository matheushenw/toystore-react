import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Produtos from './components/Produtos'
import Login from './components/Login'
import CadastrarUsuario from './components/CadastrarUsuario'
import Contato from './components/Contato'
import Sobre from './components/Sobre'
import Error from './components/Error'
import Footer from './components/Footer'
import './styles/global.css'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <main className="main animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<CadastrarUsuario />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}