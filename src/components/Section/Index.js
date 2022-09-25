import React from 'react';
import Card from '../Card/Index';
import { Highlight, Info } from '../Card/styles';
import SubTitle from '../SubTitle/Index';
import Title from '../Title/Index';
import { SectionHeading } from '../Title/styles';
import { Sections, RedesSociais, AlinharImg } from './styles';
import IconesRedes from '../Sociais/index';
import dadosRedes from '../../service/dadosRedes';
import dadoshabi from '../../service/dadosHabilidades';
import IconesHabi from '../Skills/index';
import ExibirImagens from '../Images/index';

function Section({ profile }) {
  return (
    <>
      <Sections id="about">
        <Title texto="Olá pessoal, sou o" />
        <SectionHeading>
          {profile.nome} <Highlight>{profile.sobrenome}</Highlight>
        </SectionHeading>
        <Info>
          {profile.cidade} - {profile.estado}{' '}
        </Info>
        <p>{profile.biografia}</p>
        <div id="contacts">
          <Title texto="Contatos" />
          <SubTitle texto={`Celular: ${profile.contato}`} />
          <Highlight>
            <SubTitle texto={`Email:  ${profile.email}`} />
          </Highlight>
        </div>
      </Sections>
      <Sections id="experience">
        <Title texto="Experiência" />
        {profile.experiencia.map((val) => (
          <Card
            key={val.id}
            subTitle={val.cargo}
            subTitleH3={val.empresa}
            date={val.periodo}
            info={val.atividades}
          />
        ))}
      </Sections>
      <Sections id="skills">
        <Title texto="Habilidades" />

        {dadoshabi.map((val) => (
          <IconesHabi title={val.title} icone={val.icone} />
        ))}
      </Sections>
      <Sections id="projects">
        <Title texto="Projetos" />
        <AlinharImg>
          {profile.projetos.map((tes) => (
            <ExibirImagens link={tes.link} img={tes.imga} />
          ))}
        </AlinharImg>
      </Sections>
      <RedesSociais id="Sociais">
        <div>
          <p>Redes Sociais</p>
          {dadosRedes.map((res) => (
            <IconesRedes title={res.title} link={res.link} icone={res.icone} />
          ))}
        </div>
      </RedesSociais>
    </>
  );
}

export default Section;
