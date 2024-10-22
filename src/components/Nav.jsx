import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container nav-container">
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/produtos" className="nav-link">Produtos</Link></li>
          <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
          <li className="nav-item"><Link to="/cadastrar" className="nav-link">Cadastrar</Link></li>
          <li className="nav-item"><Link to="/contato" className="nav-link">Contato</Link></li>
          <li className="nav-item"><Link to="/sobre" className="nav-link">Sobre</Link></li>
        </ul>
        <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </button>
      </div>
    </nav>
  );
}