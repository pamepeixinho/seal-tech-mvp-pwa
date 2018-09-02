import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ButtonSvg from '../../../assets/images/botao_normal.svg';

const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 24px;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const Icon = styled.img`
  background-color: white;
  justify-content: center;
  margin-right: 0;
  filter: FlipH;
  height: 180px;
`;

const StartIconButton = () => (
  <Link to="/showcase/game">
    <ButtonWrapper>
      <Icon src={ButtonSvg} role={'presentation'} />
    </ButtonWrapper>
  </Link>
);

export default StartIconButton;
