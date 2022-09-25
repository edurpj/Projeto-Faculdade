import React from 'react';
import SubTitle from '../SubTitle/Index';
import SubTitleH3 from '../SubTitleH3/Index';
import { Highlight, Info } from './styles';

function Card({ subTitle, subTitleH3, date, info }) {
  return (
    <div>
      <SubTitle texto={subTitle} />
      <SubTitleH3 subTitleH3={subTitleH3} />
      <Info>
        <Highlight> {date}</Highlight>
      </Info>
      <p>{info}</p>
    </div>
  );
}

export default Card;
