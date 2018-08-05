import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

import Brightness1 from '@material-ui/icons/Brightness1';

const startsCount = 5;

class OpenQuestion extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderCustomIcon = () => (
    <span style={{ marginRight: 16 }}>
      <Brightness1 />
    </span>
  )

  render() {
    debugger;
    console.log('ue');
    return (
      <div style={{ marginBottom: 16 }}>
        <li>
          {this.props.question}
        </li>
        <span style={{ marginRight: 32 }}>1 (ruim)</span>
        <StarRatingComponent
          name={this.props.keyName}
          starCount={startsCount}
          value={this.props.value}
          renderStarIcon={this.renderCustomIcon}
          starColor="#731FB0"
          emptyStarColor="#DFE0E1"
          onStarClick={this.props.updateOpenQuestionByType}
        />
        <span style={{ marginLeft: 32 }}>5 (muito bom)</span>
      </div>
    );
  }
}

OpenQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  updateOpenQuestionByType: PropTypes.func.isRequired,
};

export default OpenQuestion;
