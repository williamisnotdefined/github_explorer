import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParam {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/9591024?s=460&u=7f03855f6cd0735b56a14d026763911a14274d2d&v=4"
            alt="its me"
          />
          <div>
            <b>lalala</b>
            <p>123214</p>
          </div>
        </header>
        <ul>
          <li>
            <b>1808</b>
            <span>stars</span>
          </li>
          <li>
            <b>48</b>
            <span>Forks</span>
          </li>
          <li>
            <b>67</b>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`/repository/a`} key={'asa'}>
          <div>
            <b>{'repository.full_name'}</b>
            <p>{'repository.description'}</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
