import React from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
// import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import AppBar from 'components/AppBar';
// import injectReducer from '../../utils/injectReducer';

class QuestionsAndComments extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar />
        {'name'}
        {'link'}
      </div>
    );
  }
}

QuestionsAndComments.propTypes = {
  search: PropTypes.func.isRequired,
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
)(QuestionsAndComments);
