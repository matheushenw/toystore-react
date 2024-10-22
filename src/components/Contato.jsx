import React, { useState } from 'react';
import '../styles/Contato.css';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio de mensagem aqui
    console.log('Mensagem enviada:', nome, email, mensagem);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
      <form onSubmit={handleSubmit} className="contato-form">
        <div className="form-group">
          <label htmlFor="nome" className="form-label">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensagem" className="form-label">Mensagem:</label>
          <textarea
            id="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="form-submit">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}