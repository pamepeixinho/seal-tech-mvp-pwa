import React from 'react';
import PropTypes from 'prop-types';

import OpenQuestion from './OpenQuestion';

const SubjectQuestion = ({ title, openQuestionType, openQuestions, updateOpenQuestionByType }) => (
  <React.Fragment>
    <h4>{title}</h4>
    <ol>
      {Object.keys(openQuestionType).map((subjectQuestionKey) => {
        const subject = openQuestionType[subjectQuestionKey];
        return (
          <OpenQuestion
            question={subject.question}
            keyName={subject.key}
            value={openQuestions[subject.key]}
            updateOpenQuestionByType={updateOpenQuestionByType}
          />
        );
      })}
    </ol>
  </React.Fragment>
);

SubjectQuestion.propTypes = {
  title: PropTypes.string,
  openQuestionType: PropTypes.object,
  openQuestions: PropTypes.object,
  updateOpenQuestionByType: PropTypes.func,
};

export default SubjectQuestion;
