import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Progress = (props) => (
  <div className={style.Progress} style={{width: `${props.width}%`}}/>
);

Progress.propTypes = {
  width: PropTypes.number.isRequired
};

export default Progress;
