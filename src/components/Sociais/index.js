/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CorRedes } from './Style';

const iconTypes = { github: FaGithub, linkedin: FaLinkedin };

function Icones({ name, ...props }) {
  const Icon = iconTypes[name];
  return <Icon {...props} />;
}

function IconesRedes(props) {
  return (
    <CorRedes href={props.link} title={props.title} target="_blank">
      {' '}
      <Icones name={props.icone} />
    </CorRedes>
  );
}
export default IconesRedes;
