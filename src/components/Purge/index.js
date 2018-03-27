import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Purge = (props) => (
  <a className={style.Purge} onClick={props.purge} tabIndex={-1} href="#">
    Reset the survey
  </a>
);

Purge.propTypes = {
  purge: PropTypes.func.isRequired
};

export default Purge;
