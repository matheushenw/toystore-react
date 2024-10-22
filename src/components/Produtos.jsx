import React from 'react';
import '../styles/Produtos.css';

import corvetteImg from '../assets/corvette.jpg';
import mustangImg from '../assets/mustang.jpg';
import camaroImg from '../assets/camaro.jpg';
import ferrariImg from '../assets/ferrari.jpg';
import lamborghiniImg from '../assets/lamborghini.jpg';
import porscheImg from '../assets/porsche.jpg';

const produtos = [
  { id: 1, nome: 'Hot Wheels Corvette', preco: 9.99, imagem: corvetteImg },
  { id: 2, nome: 'Hot Wheels Mustang', preco: 8.99, imagem: mustangImg },
  { id: 3, nome: 'Hot Wheels Camaro', preco: 10.99, imagem: camaroImg },
  { id: 4, nome: 'Hot Wheels Ferrari', preco: 12.99, imagem: ferrariImg },
  { id: 5, nome: 'Hot Wheels Lamborghini', preco: 11.99, imagem: lamborghiniImg },
  { id: 6, nome: 'Hot Wheels Porsche', preco: 10.99, imagem: porscheImg },
];

export default function Produtos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Nossos Produtos</h2>
      <div className="product-grid">
        {produtos.map((produto) => (
          <div key={produto.id} className="product-card">
            <img src={produto.imagem} alt={produto.nome} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{produto.nome}</h3>
              <p className="product-price">R$ {produto.preco.toFixed(2)}</p>
              <button className="add-to-cart">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}