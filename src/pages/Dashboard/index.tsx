import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form } from './styles';
import Repository from '../Repository';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="post">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img src="https://avatars1.githubusercontent.com/u/9591024?s=460&u=7f03855f6cd0735b56a14d026763911a14274d2d&v=4" />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
