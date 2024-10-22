import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Hot Wheels</h3>
            <p>Carros em miniatura que inspiram grandes aventuras.</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/produtos" className="footer-link">Produtos</Link></li>
              <li><Link to="/sobre" className="footer-link">Sobre</Link></li>
              <li><Link to="/contato" className="footer-link">Contato</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Siga-nos</h3>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">F</a>
              <a href="#" aria-label="Instagram">I</a>
              <a href="#" aria-label="Twitter">T</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Hot Wheels. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}