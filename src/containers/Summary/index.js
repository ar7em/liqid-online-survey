import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SummaryComponent from "components/Summary";

export const Summary = (props) => (
  <SummaryComponent stages={
    props.questions.map((question, index) => {
      const answer = props.answers[index];
      let verboseAnswer;

      if (question.type === "text") {
        verboseAnswer = answer;
      } else {
        verboseAnswer = question.options[answer];
      }

      return {
        question: question.label,
        answer: verboseAnswer
      };
    })
  }/>
);

Summary.propTypes = {
  questions: PropTypes.array.isRequired,
  answers: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  answers: state.answers
});

export default connect(mapStateToProps)(Summary);
