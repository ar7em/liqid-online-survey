import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Question = (props) => (
  <div className={ style.Question }>
    { props.text }
  </div>
);

Question.propTypes = {
  text: PropTypes.string.isRequired
};

export default Question;
