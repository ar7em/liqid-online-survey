import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProgressComponent from "components/Progress";

export const Progress = (props) => (
  <ProgressComponent width={props.width} />
);

Progress.propTypes = {
  width: PropTypes.number.isRequired
};

export const mapStateToProps = (state) => {
  const total = state.questions.length;
  const completed = Object.entries(state.answers).reduce((acc, value) => ( value[1] ? acc+1 : acc), 0);
  const width = Math.floor((completed / total) * 100);

  return {
    width
  };
};

export default connect(mapStateToProps)(Progress);
