import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import snake from '../../assets/snake.png';
import algo from '../../assets/algo.png';
import instagram from '../../assets/instagram.png';
import { Imagem, Alinharimagens } from './style';

function exibirImagens() {
  return (
    <BrowserRouter>
      <Alinharimagens>
        <a
          href="https://github.com/edurpj/Snake-Game"
          target="_blank"
          rel="noreferrer"
        >
          <Imagem src={snake} />
        </a>
        <a
          href="https://github.com/edurpj/algoritmosJava/tree/master"
          target="_blank"
          rel="noreferrer"
        >
          <Imagem src={algo} />
        </a>
        <a
          href="https://github.com/edurpj/Pagina-instagram"
          target="_blank"
          rel="noreferrer"
        >
          <Imagem src={instagram} />
        </a>
      </Alinharimagens>
    </BrowserRouter>
  );
}

export default exibirImagens;
