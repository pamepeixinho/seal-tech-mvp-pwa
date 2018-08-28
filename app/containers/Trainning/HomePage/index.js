import React from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import CircularProgress from '@material-ui/core/CircularProgress';
import MuiPaper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withWidth from '@material-ui/core/withWidth';

import AppBar from 'components/AppBar';
import DefaultWrapper from 'components/DefaultWrapper';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import { selectName, selectLink, selectLoading } from './selectors';
import { updateField, goToNextStep } from './actions';

const Paper = styled(MuiPaper)`
  max-width: 690px;
  min-height: 380px;
  margin: 0 auto;
  padding: 32px;
`;

class HomePage extends React.PureComponent {
  handleNameChange = (evt) => this.props.handleChange('name', evt.target.value)

  handleLinkChange = (evt) => this.props.handleChange('link', evt.target.value)

  render() {
    const buttonDisabled = this.props.name === '' || this.props.link === '';
    return (
      <div>
        <AppBar />
        <DefaultWrapper>
          <Paper style={{ position: 'relative' }}>
            <h4 style={{ marginBottom: 0 }}>
              Informe os dados para o teste e pressione o botão para começar:
            </h4>
            <form noValidate autoComplete="off">
              <div style={{ width: this.props.width === 'xs' ? '100%' : 'calc(100% - 256px)', paddingBottom: 16 }}>
                <TextField
                  id="name"
                  label="Nome"
                  value={this.props.name}
                  onChange={this.handleNameChange}
                  margin="normal"
                  fullWidth
                  required
                  style={{ display: 'block' }}
                />
              </div>
              <TextField
                id="link"
                label="Link"
                value={this.props.link}
                onChange={this.handleLinkChange}
                margin="normal"
                fullWidth
                required
                style={{ display: 'block' }}
              />
            </form>
            <p>Atenção: pedimos que nos dê acesso na webcam para colhermos alguns dados, mas fique tranquilo porque não iremos amarzenar nada :) </p>
            <Button
              color="secondary"
              variant="raised"
              onClick={this.props.goToNextStep}
              disabled={buttonDisabled}
              style={{ marginTop: 32, position: 'absolute', bottom: 22, right: 32 }}
            >
              { this.props.isLoading ? <CircularProgress size={24} /> : 'Começar' }
            </Button>
          </Paper>
        </DefaultWrapper>
      </div>
    );
  }
}

HomePage.propTypes = {
  width: PropTypes.string,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  goToNextStep: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  name: selectName,
  link: selectLink,
  isLoading: selectLoading,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldType, value) => dispatch(updateField(fieldType, value)),
  goToNextStep: () => dispatch(goToNextStep()),
});

export default compose(
  injectReducer(
    { key: 'homePage', reducer },
  ),
  connect(mapStateToProps, mapDispatchToProps),
  withWidth(),
)(HomePage);
