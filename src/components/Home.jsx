import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-center">Bem-vindo ao Mundo Hot Wheels</h1>
      <p className="text-center mb-4">Descubra a emoção dos carros em miniatura mais incríveis do mundo!</p>
      <div className="text-center mb-4">
        <Link to="/produtos" className="btn">
          Ver Produtos
        </Link>
      </div>
      <div className="grid grid-cols-3">
        <div className="card">
          <h3>Hot Wheels Corvette</h3>
          <p className="mb-4">Velocidade e estilo em um só lugar!</p>
          <Link to="/produtos" className="btn">Saiba mais</Link>
        </div>
        <div className="card">
          <h3>Hot Wheels Mustang</h3>
          <p className="mb-4">O clássico americano em miniatura!</p>
          <Link to="/produtos" className="btn">Saiba mais</Link>
        </div>
        <div className="card">
          <h3>Hot Wheels Camaro</h3>
          <p className="mb-4">Potência e design em escala!</p>
          <Link to="/produtos" className="btn">Saiba mais</Link>
        </div>
      </div>
    </div>
  );
}