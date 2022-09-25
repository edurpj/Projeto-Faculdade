/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { FaJava, FaDatabase, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { Habi } from './style';

const iconTypes = {
  java: FaJava,
  oracle: FaDatabase,
  react: FaReact,
  html: FaHtml5,
  css: FaCss3,
};

function Icones({ name, ...props }) {
  const Icon = iconTypes[name];
  return <Icon {...props} />;
}

function IconesHabi(props) {
  return (
    <Habi title={props.title}>
      <div>
        {props.title} <Icones name={props.icone} />{' '}
      </div>
    </Habi>
  );
}
export default IconesHabi;
