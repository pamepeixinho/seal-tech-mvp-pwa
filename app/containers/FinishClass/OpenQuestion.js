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
    return (
      <div style={{ marginBottom: 16 }}>
        <li style={{ paddingBottom: 16 }}>
          {this.props.question}
        </li>
        <div style={{ marginLeft: 16 }}>
          <StarRatingComponent
            name={this.props.keyName}
            starCount={startsCount}
            value={this.props.value}
            renderStarIcon={this.renderCustomIcon}
            starColor="#731FB0"
            emptyStarColor="#DFE0E1"
            onStarClick={this.props.updateOpenQuestionByType}
          />
        </div>
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
