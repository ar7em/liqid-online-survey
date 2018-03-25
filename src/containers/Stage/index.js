import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Question from "components/Question";
import Text from "components/Text";
import Radio from "components/Radio";
import Dropdown from "components/Dropdown";
import { reply } from "actions/answers";

const mapTypeToComponent = {
  "radio": Radio,
  "dropdown":Dropdown,
  "text": Text
};

const Stage = (props) => {
  const { type, label, options } = props.question;
  const ReplyComponent = mapTypeToComponent[type];

  return (
    <div>
      <Question text={label} />
      <ReplyComponent stage={props.questionIndex} options={options} label={label} onChange={props.reply} answer={props.answer}/>
    </div>
  );
};

Stage.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  reply: PropTypes.func.isRequired,
  answer: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export const mapStateToProps = (state) => {
  const question = state.questions.find( (question) => question.current );
  const questionIndex = state.questions.findIndex( (question) => question.current );
  const answer = state.answers[questionIndex];

  return {
    question,
    questionIndex,
    answer
  };
};

export const mapDispatchToProps = (dispatch) => ({
  reply: (questionIndex, answer) => {
    dispatch(reply(questionIndex, answer));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Stage);
