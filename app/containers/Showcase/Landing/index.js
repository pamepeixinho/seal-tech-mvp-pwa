/**
 *
 * Showcase
 *
 */

import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

import AppBar from 'components/AppBar';

export class Landing extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar />
      </div>
    );
  }
}

export default Landing;
