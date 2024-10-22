import React from 'react';
import '../styles/Sobre.css';

export default function Sobre() {
  return (
    <div className="sobre-container">
      <h2 className="sobre-title">Sobre a Hot Wheels</h2>
      <div className="sobre-content">
        <p className="mb-4">
          A Hot Wheels é uma marca icônica de carros em miniatura, criada pela Mattel em 1968. 
          Desde então, tem sido uma parte importante da infância de milhões de pessoas ao redor do mundo.
        </p>
        <p className="mb-4">
          Nossa missão é inspirar o espírito de corrida e aventura em todas as idades, 
          oferecendo modelos detalhados e de alta qualidade dos carros mais incríveis do mundo.
        </p>
        <p className="mb-4">
          Com uma vasta coleção de modelos, desde clássicos até os mais modernos supercarros, 
          a Hot Wheels continua a inovar e emocionar colecionadores e entusiastas de todas as idades.
        </p>
        <p>
          Junte-se a nós nesta jornada emocionante e descubra o mundo em miniatura da Hot Wheels!
        </p>
      </div>
    </div>
  );
}