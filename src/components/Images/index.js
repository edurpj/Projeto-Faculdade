import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Imagem } from './style';

function exibirImagens(props) {
  return (
    <BrowserRouter>
      <a href={props.link} target="_blank" rel="noreferrer">
        <Imagem src={props.img} />
      </a>
    </BrowserRouter>
  );
}

export default exibirImagens;
