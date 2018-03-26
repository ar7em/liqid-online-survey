import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import NavigateComponent from "components/Navigate";

export const Navigate = (props) => (
  <NavigateComponent
    label={props.label}
    go={props.go.bind(null, props.to)}
    disabled={props.disabled}
  />
);

Navigate.propTypes = {
  label: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
  requireAnswerFor: PropTypes.number,
  disabled: PropTypes.bool
};

export const mapStateToProps = (state, {requireAnswerFor}) => {
  const answerRequired = typeof requireAnswerFor !== "undefined";
  const noAnswer = typeof state.answers[requireAnswerFor] === "undefined";

  return {
    disabled: answerRequired && noAnswer
  };
};

export const mapDispatchToProps = (dispatch) => ({
  go: (to) => dispatch(push(to))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigate);
