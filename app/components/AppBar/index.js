import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MuiAppBar from '@material-ui/core/AppBar';

import Logo from 'images/logo.png';

const AppBar = styled(MuiAppBar)`
  box-shadow: none;
  border-bottom: 1px solid #E7E7E7;
  padding-top: 8px;
  padding-left: 24px;
  background: white;
  color: #731FB0;
`;

const Title = styled.h3`
  margin-left: 24px;
  display: inline-block;
`;

const Img = styled.img`
  height: 31px;
  width: 42px;
`;

const AppBarTitle = ({ title }) => (
  <AppBar>
    <div>
      <Img src={Logo} alt="logo" />
      <Title>
        { title }
      </Title>
    </div>
  </AppBar>
);

AppBarTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppBarTitle;
