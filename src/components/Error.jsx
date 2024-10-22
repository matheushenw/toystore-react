import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error.css';

export default function Error() {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <h2 className="error-message">Oops! Página não encontrada</h2>
      <p className="mb-8">A página que você está procurando não existe ou foi movida.</p>
      <Link to="/" className="error-link">
        Voltar para a Home
      </Link>
    </div>
  );
}