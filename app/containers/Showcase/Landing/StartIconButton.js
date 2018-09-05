import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ButtonSvg from '../../../assets/images/botao_normal.svg';

const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 8px;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.img`
  justify-content: center;
  margin-right: 0;
  filter: FlipH;
  height: 164px;
`;

const StartIconButton = () => (
  <Link to="/showcase/game">
    <ButtonWrapper>
      <Icon src={ButtonSvg} role={'presentation'} />
    </ButtonWrapper>
  </Link>
);

export default StartIconButton;
