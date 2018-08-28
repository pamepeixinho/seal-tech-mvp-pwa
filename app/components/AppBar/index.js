import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MuiAppBar from '@material-ui/core/AppBar';

import Logo from 'images/logo-sealtech.png';

const AppBar = styled(MuiAppBar)`
  box-shadow: none;
  border-bottom: 1px solid #E7E7E7;
  padding: 16px;
  background: white;
  color: #731FB0;
`;

const Title = styled.span`
  margin-left: 24px;
  font-weight: bold;
  font-size: 22px;
  display: inline-block;
`;

const Img = styled.img`
  height: 31px;
`;

const AppBarTitle = ({ title }) => (
  <AppBar>
    <div>
      <Img src={Logo} alt="logo" />
      { title ?
        <Title>
          { title }
        </Title> : null
      }
    </div>
  </AppBar>
);

AppBarTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppBarTitle;
