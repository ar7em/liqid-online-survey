import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Navigate = (props) => (
  <button
    className={`${style.Navigate} ${props.disabled && style["Navigate--disabled"]}`}
    onClick={() => {
      if (!props.disabled) {
        props.go();
      }
    }}
  >
    <div className={style.Navigate__label}>
      {props.label}
    </div>
  </button>
);

Navigate.propTypes = {
  label: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Navigate;
