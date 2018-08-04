import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import PropTypes from 'prop-types';
// import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Toolbar from '@material-ui/core/Toolbar';

import AppBar from 'components/AppBar';
import QuestionsAndComments from './QuestionsAndComments';

// import injectReducer from '../../utils/injectReducer';

class FinishClass extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
              Test
          </Toolbar>
        </AppBar>
        <QuestionsAndComments />
      </div>
    );
  }
}

FinishClass.propTypes = {
  // search: PropTypes.func.isRequired,
};

// const mapStateToProps = createSelector(
// );

// const mapDispatchToProps = (dispatch) => ({
//   search: () => dispatch(search()),
// });

export default compose(
  // injectReducer(
  //   { key: 'homePage', reducer },
  // ),
  connect(null, null)
)(FinishClass);
