import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Wrapper = (props) => (
  <div className={style.Layout}>
    {props.children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
