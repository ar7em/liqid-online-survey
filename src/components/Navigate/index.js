import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Navigate = (props) => (
  <button className={ style.Navigate }>
    <div className={ style.Navigate__label }>
      {props.label}
    </div>
  </button>
);

Navigate.propTypes = {
  label: PropTypes.string.isRequired
};

export default Navigate;
